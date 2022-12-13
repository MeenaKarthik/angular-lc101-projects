import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cool pics!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://media.istockphoto.com/id/619639650/photo/snowing-on-jubilee-gardens-in-london-at-dusk.jpg?b=1&s=170667a&w=0&k=20&c=KafjMyGcRYZuKN94PdzHk8MRQXl-DghFfs4ZUNXAfQY=';
  image3 = 'https://media.istockphoto.com/id/499910260/photo/girl-playing-with-a-snowman.webp?s=612x612&w=0&k=20&c=6-RZrEIRz3EJFEhPr7SATG4nJxdKXAh6LLbkZzrE4-c=';

  constructor() { }

  ngOnInit() {
  }

}