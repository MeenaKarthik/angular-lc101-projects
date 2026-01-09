import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['The Manchurian Candidate', 'Oceans 8', 'The Maze Runner', 'Home Alone'];
   codingImage = "https://media.tenor.com/GVk4jB2u_i8AAAAd/coding.gif";

   constructor() { }

   ngOnInit() {
   }

}
