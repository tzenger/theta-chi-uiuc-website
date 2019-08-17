import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  eventAssetLocation: string;
  pupAssetLocation: string;
  eventImages: string[];
  pupImages: string[];

  constructor() {
    this.eventAssetLocation = "assets/involvement/service/events";
    this.pupAssetLocation = "assets/involvement/service/pet_a_puppy";
    this.eventImages = [
      "0.png",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png"
    ];
    this.pupImages = [
      "0.png",
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png"
    ];
  }

  ngOnInit() {
  }

}
