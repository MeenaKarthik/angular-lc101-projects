import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Blossom';
  image1 = 'https://thumbs.dreamstime.com/b/showy-bright-prunus-kanzan-japanese-flowering-cherry-double-layer-flowers-close-up-sakura-blossom-blossoms-featuring-373559151.jpg';
  image2 = 'https://images.photowall.com/products/61552/blossom-cherry-blossom.jpg?h=699&q=85';
  image3 = 'https://hips.hearstapps.com/hbu.h-cdn.co/assets/16/14/2048x1355/1459784808-gettyimages-167284325_1.jpg';

  constructor() { }

  ngOnInit() {
  }

}