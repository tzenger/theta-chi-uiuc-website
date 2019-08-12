import { Component, OnInit } from '@angular/core';

class Alumni {
  name: string;
  year: number;
  notability: string;
}

@Component({
  selector: 'app-notable-alumni',
  templateUrl: './notable-alumni.component.html',
  styleUrls: ['./notable-alumni.component.css']
})
export class NotableAlumniComponent implements OnInit {

  alumni: Alumni[];

  constructor() {
    this.alumni = [
      { name: "Marcin Kleczynski", year: 2012, notability: "Founder and CEO of Malwarebytes" },
      { name: "Tom Haller", year: 1960, notability: "Former MLB catcher for the San Francisco Giants (1961–1967), Los Angeles Dodgers (1968–1971), and Detroit Tigers (1972)" },
      { name: "John Bauer", year: 1954, notability: "Former offensive lineman for the New York Giants (1954)" },
      { name: "Marv Berschet", year: 1952, notability: "Former lineman for the Washington Redskins (1954–1955)" },
      { name: "Robert J. Heggie", year: 1935, notability: "Former President of A.M. Castle & Company" },
      { name: "James C. Downs Jr.", year: 1927, notability: "Founder of Real Estate Research Corporation and author of Principles of Real Estate Management" },
      { name: "Kenneth L. Smith", year: 1926, notability: "First salaried President of Chicago Stock Exchange" },
      { name: "Brigadier General Kenneth B. Bush", year: 1916, notability: "U.S. Army, Distinguished Service Medal (U.S. Army) Recipient, Korean War" },
    ]
  }

  ngOnInit() {
  }

}
