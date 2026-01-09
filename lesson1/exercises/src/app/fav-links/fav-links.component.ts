import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  title = "Favorite Links";
  favLinks = ['https://education.launchcode.org/intro-to-professional-web-dev/','https://education.launchcode.org/java-web-development/','https://gaana.com/playlist/gaana-dj-ar-rahman-top-50-tamil'];
  constructor() { }

  ngOnInit() {
  }

}
