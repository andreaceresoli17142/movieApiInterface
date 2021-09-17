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
  title = 'compitoTps';

  constructor(private modalService: NgbModal, private http: HttpClient) { }

  noTitleInsertedFlag = false;

  movieDataGroup = new FormGroup({

    movieTitle: new FormControl(''),
    // yearOfRelease: new FormControl(''),
  });

  onSubmit(): void {
    console.log(this.movieDataGroup.value.movieTitle);


    const url = "https://api.themoviedb.org/3/search/movie?api_key=f8f299c7a98e07f7962dacfe6f8ee16f&language=en-US&query=" + this.movieDataGroup.value.movieTitle + "&page=1";; // Replace it with your own API path
    this.http.get(url).subscribe(data => {
      console.log(data);
      // this.apiCallSuccess( data.total )
    });

  }

  apiCallSuccess(data: any) {
    this.openModal();

    this.movieDataGroup.patchValue({
      movieTitle: ''
    });
  }

  openModal() {
    const modalRef = this.modalService.open(OnApiResponseComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        backdrop: 'static'
      });

    let data = {
      prop1: 'Some Data',
      prop2: 'From Parent Component',
      prop3: 'This Can be anything'
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }


  // stuff
  // 

  // ngOnInit() {

  //   console.log("working");   
  // }

}