import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title = "Links";
  favLinks = ['https://www.launchcode.org/',
              'https://www.youtube.com/',
              'https://www.hopscotch.in/blog/5-famous-akbar-birbal-moral-stories/'];
  constructor() { }

  ngOnInit() {
  }

}
