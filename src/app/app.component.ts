import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { format } from 'path';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compitoTps';

  noTitleInsertedFlag = false;

  movieDataGroup = new FormGroup({

    movieTitle: new FormControl(''),
    // yearOfRelease: new FormControl(''),


  });

  onSubmit(): void{
    // if ( this.movieDataGroup.value.movieTitle == '' )
    //   this.noTitleInsertedFlag = true;
    console.log(this.movieDataGroup.value.movieTitle);
  }
  

  // ngOnInit() {

  //   console.log("working");   
  // }

}