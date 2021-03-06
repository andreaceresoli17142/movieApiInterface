import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OnApiResponseComponent } from './on-api-response/on-api-response.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //TODO: css
  //TODO: bottone refresh elimina la ricerca da local storage
  //TODO: (forse) aggiungiere titolo, autore e anno di rilascio sotto i poster

  title = 'compitoTps';

  page=1;
  maxPage=0;

  apiResponse: any = undefined;

  constructor(private modalService: NgbModal, private http: HttpClient) { }

  movieDataGroup = new FormGroup({

    movieTitle: new FormControl(''),
    // yearOfRelease: new FormControl(''),
  });

  onSubmit(): void {

    this.page = 1;
    this.apiReq( true );
  }

  apiReq( first = false, page = 1, bypassLocalStorage = false ): void{

    if ( bypassLocalStorage == false ){

      var localData = this.getFromStorage(  this.movieDataGroup.value.movieTitle, page );

      if ( localData != null ){
        //console.log("from local storage");
        this.processData( localData, first );
        return;
      }
    }

    const url = "https://api.themoviedb.org/3/search/movie?api_key=f8f299c7a98e07f7962dacfe6f8ee16f&language=en-US&query=" + this.movieDataGroup.value.movieTitle + "&page=" + page; // Replace it with your own API path
    this.http.get(url).subscribe(data => {
      //console.log("from api");

      this.saveInStorage( this.movieDataGroup.value.movieTitle , page, data );

      this.processData( data, first );
    });
  }

  processData( data: any, first = false ):void  {
    let temp: any = data;
      let tempData: any = temp.results;
      
      if ( first )
        this.maxPage = temp.total_pages;
      this.apiResponse = this.arrayToMatrix(tempData );
  }

  refresh (){
    window.localStorage.removeItem(this.movieDataGroup.value.movieTitle.toUpperCase() + "-" + this.page);
    this.apiReq(true);
  }

  saveInStorage( query: string, page: number, data: any ): void{
    localStorage.setItem( query.toUpperCase() + "-" + page, JSON.stringify(data));
  }

  getFromStorage( query: string, page: number ): any{

    var localData = localStorage.getItem(query.toUpperCase() + "-" + page);

    if (localData == null)
      return null;

    return JSON.parse( localData );
  }
  
  apiCallSuccess(data: any): void {
    
    this.movieDataGroup.patchValue({
      movieTitle: ''
    });
  }
  
  openModal( movieData: any ): void {
    const modalRef = this.modalService.open(OnApiResponseComponent,{
      scrollable: true,
      windowClass: 'myCustomModalClass',
      // keyboard: false,
      backdrop: 'static'
    });
    
    modalRef.componentInstance.fromParent = movieData;
    modalRef.result.then((result) => {
    }, (reason) => {
    });
  }

  onPageChange( page: number ): void {
    // console.log("pagination element respondend: "+page);
    this.apiReq( false, page );
  }

  arrayToMatrix( data: any ): any {

    let tempMatrix = [];
    let tempArr: any = [];

    for (var i = 0; i < data.length; i++ ) {
      
      tempArr.push( data[i] );

      if ( (i + 1) % 4 == 0 ||  i + 1 == data.length ){
        
        tempMatrix.push( tempArr );
        
        tempArr = [];
      }
    }

    console.log(tempMatrix);
    return tempMatrix;
  }

}