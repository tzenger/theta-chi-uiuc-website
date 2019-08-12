import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-philanthropy',
  templateUrl: './philanthropy.component.html',
  styleUrls: ['./philanthropy.component.css']
})
export class PhilanthropyComponent implements OnInit {

  assetLocation: string;
  images: string[];

  constructor() {
    this.assetLocation = "assets/involvement/philanthropy/carousel";
    this.images = [
      "0.png",
      "1.png",
      "2.png",
      "3.jpg",
      "4.jpg",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
      "14.png",
      "15.png",
      "16.png"
    ];
  }

  ngOnInit() {
  }

}
