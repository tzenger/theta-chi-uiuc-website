import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  assetLocation: string;
  images: string[];

  constructor() {
    this.assetLocation = "assets/involvement/social/carousel";
    this.images = [
      "0.png",
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.png",
      "12.png",
      "13.png",
      "14.png",
      "15.png",
      "16.jpg",
      "17.jpg",
      "18.png",
      "19.png",
      "20.png",
      "21.jpg",
      "22.png"
    ];
  }

  ngOnInit() {
  }

}
