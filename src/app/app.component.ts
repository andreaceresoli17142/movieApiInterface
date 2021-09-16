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

  movieDataGroup = new FormGroup({

    movieTitle: new FormControl(''),

  });

  onSubmit(): void{
    console.log(this.movieDataGroup.value);
  }
  

  // ngOnInit() {

  //   console.log("working");   
  // }

}