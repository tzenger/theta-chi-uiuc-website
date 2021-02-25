import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

  organizations: string[];

  constructor() {
    this.organizations = [
      "Accounting Club",
      "Alpha Chi Sigma Chemistry Fraternity",
      "Alpha Kappa Delta Honor Society",
      "Alpha Phi Omega Service Fraternity",
      "American Marketing Association",
      "Association of Latino Professionals for America(ALPFA)",
      "British Petroleum Professional Responsibility Strategy Comp.",
      "Business Council",
      "Classroom Assistant @Center of Innovative Teaching and Learning",
      "Club Algae",
      "Engineers Without Borders",
      "Film Photographer @Urbana Museum of Photography",
      "Finance Academy",
      "Finance Club",
      "Foellinger Auditorium Staff",
      "Geology Club",
      "IEEE",
      "I - Guide",
      "I - Heal Interdisciplinary Health RSO",
      "Illini Big Data Club",
      "Illini Bodybuilding Club",
      "Illinois Sports Business Consulting",
      "Illinois Track and Field",
      "Industrial Design Society of America",
      "Institute of Industrial Engineers",
      "Intramural Boxing",
      "Joe’s Brewery",
      "Kam’s",
      "Korean Culture Center Staff",
      "Krannert Center Ticket Office",
      "Lincoln Hall Theate",
      "Maize",
      "Men’s Ultimate Frisbee",
      "National Student Advertising Comp.",
      "Nutrition Club",
      "On - Air Personality @WPGU",
      "Real Estate Club",
      "Student Supervisor @Ike Commons",
      "Student Teacher @Jefferson MS",
      "Systems Technician at ATLAS Labs",
      "Tech Consultant @ICS Tech Services",
      "The Clybourne",
      "The Daily Byte Café",
      "The Red Lion",
      "Theta Tau Professional Engineering Fraternity",
      "Undergraduate Research in Functional Electrical Simulation",
      "Undergraduate Research in Aerospace Engineering",
      "Undergraduate Research in Electromagnetic Lab",
      "Undergraduate Research in Organic Systems Lab",
      "Undergraduate Assistant in Food Science Pilot Processing Plant",
      "Wide Impact Developmental Engineering(WIDE)",
      "Wrestling Club"
    ];
  }

  ngOnInit() {
  }

}
