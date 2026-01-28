import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   errMessage: string = '';

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string){
      const title = newTitle.trim();
      if(title === ''){
      this.errMessage = 'Empty string! Provide a movie name!';
      }
      else if (this.movies.some(m => m.toLowerCase() === title.toLowerCase()))
      {
        this.errMessage = "Duplicate entry exists! Provide another movie name!"; 
      }
      else {       
         this.movies.push(title);
         this.errMessage = ''; 
      }     
   }
}