import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gi-theta-chi',
  templateUrl: './gi-theta-chi.component.html',
  styleUrls: ['./gi-theta-chi.component.css']
})
export class GiThetaChiComponent implements OnInit {
  assetLocation2014: string;
  assetLocation2015: string;
  assetLocation2016: string;
  assetLocation2017: string;
  images2014: string[];
  images2015: string[];
  images2016: string[];
  images2017: string[];

  constructor() {
    this.assetLocation2014 = "assets/involvement/gi-theta-chi/2014";
    this.assetLocation2015 = "assets/involvement/gi-theta-chi/2015";
    this.assetLocation2016 = "assets/involvement/gi-theta-chi/2016";
    this.assetLocation2017 = "assets/involvement/gi-theta-chi/2017";
    this.images2014 = [
      "0.jpg",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
    ];
    this.images2015 = [
      "0.jpg",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
    ];
    this.images2016 = [
      "0.jpg",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
    ];
    this.images2017 = [
      "0.png",
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
    ];
  }

  ngOnInit() {
  }

}
