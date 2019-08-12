import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-involvement-mission',
  templateUrl: './involvement-mission.component.html',
  styleUrls: ['./involvement-mission.component.css']
})
export class InvolvementMissionComponent implements OnInit {
  assetLocation: string;
  images: string[];

  constructor() {
    this.assetLocation = "assets/involvement/mission/carousel";
    this.images = [
      "0.jpg",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "1.jpg",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
      "14.png",
      "15.png"
    ];
  }

  ngOnInit() {
  }

}
