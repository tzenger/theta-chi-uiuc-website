import { Component, OnInit } from '@angular/core';

class Member {
  first: string;
  last: string;
  preferredName: string;
  initiationSemester: string;
  position: string;
  major: string;
  minor: string;
  year: string;
  pledgeClass: string;
  email: string;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  boardMembers: Member[];
  committeeMembers: Member[];
  otherMembers: Member[];

  constructor() {
    
    this.boardMembers = [
      {
        first: "Nick",
        preferredName: "",
        last: "Letto",
        position: "President",
        year: "\'22",
        initiationSemester: "Fall 2018",
        pledgeClass: "Beta Iota",
        major: "Undecided",
        minor: "",
        email: "nletto2@illinois.edu",
      },
      {
        first: "Bryce",
        preferredName: "",
        last: "Balonick",
        position: "Secretary",
        year: "\'22",
        initiationSemester: "Fall 2018",
        pledgeClass: "Beta Iota",
        major: "Political Science",
        minor: "",
        email: "bryceb2@illinois.edu",
      },
      {
        first: "Jackson",
        preferredName: "",
        last: "Wilson",
        position: "Vice President",
        year: "\'22",
        initiationSemester: "Fall 2018",
        pledgeClass: "Beta Iota",
        major: "Computer Science",
        minor: "",
        email: "jw35@illinois.edu",
      },
      {
        first: "Garrett",
        preferredName: "",
        last: "Chan",
        position: "VP Health & Safety",
        year: "\'22",
        initiationSemester: "Fall 2018",
        pledgeClass: "Beta Iota",
        major: "Undecided",
        minor: "",
        email: "gc12@illinois.edu",
      },
      {
        first: "Michael",
        preferredName: "",
        last: "Tzeng",
        position: "Treasurer",
        year: "\'22",
        initiationSemester: "Fall 2018",
        pledgeClass: "Beta Iota",
        major: "Pre-Engineering",
        minor: "",
        email: "mhtzeng2@illinois.edu",
      },
    ];

    this.committeeMembers = [
      {
        first: "Mitchell",
        preferredName: "Mitch",
        last: "Hayden",
        position: "Brotherhood Chair",
        year: "\'21",
        initiationSemester: "Spring 2018",
        pledgeClass: "Beta Theta",
        major: "History",
        minor: "",
        email: "mhayden3@illinois.edu",
      },
      {
        first: "Nathaniel",
        preferredName: "",
        last: "Jarnagin",
        position: "Athletic Chair",
        year: "\'21",
        initiationSemester: "Fall 2017",
        pledgeClass: "Beta Eta",
        major: "Biology",
        minor: "Bio Chemistry",
        email: "n.jarnagin1@gmail.com",
      },
      {
        first: "Harrison",
        preferredName: "",
        last: "Freeman",
        position: "Web Chair",
        year: "\'22",
        initiationSemester: "Fall 2018",
        pledgeClass: "Beta Iota",
        major: "Undecided",
        minor: "",
        email: "hjf3@illinois.edu",
      },
      {
        first: "Seth",
        preferredName: "",
        last: "Katz",
        position: "Alumni Chair",
        year: "\'21",
        initiationSemester: "Spring 2018",
        pledgeClass: "Beta Theta",
        major: "Electrical Engineering",
        minor: "",
        email: "sethk2@illinois.edu",
      },
    ];


    this.otherMembers = [
      {
        first: "Adam",
        preferredName: "",
        last: "Furman",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "Marketing",
        minor: "",
        email: "adamfurman7@gmail.com",
      },
      {
        first: "Luis",
        preferredName: "",
        last: "Chavez",
        position: "Member",
        year: "\'21",
        initiationSemester: "Fall 2017",
        pledgeClass: "Beta Eta",
        major: "Economics",
        minor: "",
        email: "thundercatchavez@gmail.com",
      },
      {
        first: "Enzo",
        preferredName: "",
        last: "Yamada",
        position: "Member",
        year: "\'21",
        initiationSemester: "Spring 2018",
        pledgeClass: "Beta Theta",
        major: "Architecture",
        minor: "",
        email: "dyamada2@illinois.edu",
      },
      {
        first: "Andy",
        preferredName: "",
        last: "Szelina",
        position: "Member",
        year: "\'19",
        initiationSemester: "Fall 2015",
        pledgeClass: "Beta Gamma",
        major: "English",
        minor: "",
        email: "andyszelina@gmail.com",
      },
      {
        first: "Arun",
        preferredName: "",
        last: "Sundaram",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "",
        minor: "",
        email: "arunks2@illinois.edu",
      },
      {
        first: "Austin",
        preferredName: "",
        last: "Harper",
        position: "Member",
        year: "\'22",
        initiationSemester: "Fall 2018",
        pledgeClass: "Beta Iota",
        major: "Aviation",
        minor: "",
        email: "AustinHarper27@gmail.com",
      },
      {
        first: "Barrett",
        preferredName: "",
        last: "Neath",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "",
        minor: "",
        email: "bneath2@illinois.edu",
      },
      {
        first: "William",
        preferredName: "Billy",
        last: "Bowbin",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "Systems Engineering and Design",
        minor: "",
        email: "wbowbin2@illinois.edu",
      },
      {
        first: "Brandon",
        preferredName: "",
        last: "Li",
        position: "Member",
        year: "\'22",
        initiationSemester: "Fall 2018",
        pledgeClass: "Beta Iota",
        major: "Chemisty",
        minor: "",
        email: "brandon7@illinois.edu",
      },
      {
        first: "Charlie",
        preferredName: "",
        last: "Brom",
        position: "Member",
        year: "\'19",
        initiationSemester: "Fall 2015",
        pledgeClass: "Beta Gamma",
        major: "Computer Science",
        minor: "",
        email: "charliebrom@gmail.com",
      },
      {
        first: "Charlie",
        preferredName: "",
        last: "Fell",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "",
        minor: "",
        email: "cfell2@illinois.edu",
      },
      {
        first: "Christian",
        preferredName: "",
        last: "Zielinski",
        position: "Member",
        year: "\'19",
        initiationSemester: "Fall 2015",
        pledgeClass: "Beta Gamma",
        major: "",
        minor: "",
        email: "czielin2@illinois.edu",
      },
      {
        first: "Cole",
        preferredName: "",
        last: "Blackburn",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "",
        minor: "",
        email: "colejb2@illinois.edu",
      },
      {
        first: "Corey",
        preferredName: "",
        last: "Zeinstra",
        position: "Member",
        year: "\'19",
        initiationSemester: "Fall 2015",
        pledgeClass: "Beta Gamma",
        major: "Computer Engineering",
        minor: "",
        email: "zeinstrac@gmail.com",
      },
      {
        first: "Daniel",
        preferredName: "",
        last: "Grechukha",
        position: "Member",
        year: "\'19",
        initiationSemester: "Spring 2016",
        pledgeClass: "Beta Delta",
        major: "Specialized chemistry",
        minor: "",
        email: "grechuk2@illinois.edu",
      },
      {
        first: "Daniel",
        preferredName: "",
        last: "McRen",
        position: "Member",
        year: "\'21",
        initiationSemester: "Spring 2018",
        pledgeClass: "Beta Theta",
        major: "",
        minor: "",
        email: "dmcren2@illinois.edu",
      },
      {
        first: "Danny",
        preferredName: "",
        last: "Stumpf",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "Economics",
        minor: "Computer Science",
        email: "djs2@illinois.edu",
      },
      {
        first: "Andrew",
        preferredName: "Drew",
        last: "Suchsland",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "",
        minor: "",
        email: "andrew3@illinois.edu",
      },
      {
        first: "Elijah",
        preferredName: "Eli",
        last: "Olin",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "Agricultural Business",
        minor: "",
        email: "eolin2@illinois.edu",
      },
      {
        first: "Ernesto",
        preferredName: "",
        last: "Reyes",
        position: "Member",
        year: "\'22",
        initiationSemester: "Fall 2018",
        pledgeClass: "Beta Iota",
        major: "Economics & Philosophy",
        minor: "",
        email: "efr2@illinois.edu",
      },
      {
        first: "Ethan",
        preferredName: "",
        last: "Li",
        position: "Member",
        year: "\'20",
        initiationSemester: "Spring 2017",
        pledgeClass: "Beta Zeta",
        major: "",
        minor: "",
        email: "ethanl2@illinois.edu",
      },
      {
        first: "Henry",
        preferredName: "",
        last: "Holm",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "",
        minor: "",
        email: "henryzh2@illinois.edu",
      },
      {
        first: "Jack",
        preferredName: "",
        last: "Deno",
        position: "Member",
        year: "\'19",
        initiationSemester: "Fall 2015",
        pledgeClass: "Beta Gamma",
        major: "",
        minor: "",
        email: "jdeno35@yahoo.com",
      },
      {
        first: "Jared",
        preferredName: "",
        last: "Kitchen",
        position: "Member",
        year: "\'22",
        initiationSemester: "Fall 2018",
        pledgeClass: "Beta Iota",
        major: "Community Health",
        minor: "",
        email: "jared.kitchen@yahoo.com",
      },
      {
        first: "Jason",
        preferredName: "",
        last: "Wasiukiewicz",
        position: "Member",
        year: "\'19",
        initiationSemester: "Fall 2015",
        pledgeClass: "Beta Gamma",
        major: "Economics",
        minor: "Business",
        email: "waskwcz2@illinois.edu",
      },
      {
        first: "Kenan",
        preferredName: "",
        last: "Patel",
        position: "Member",
        year: "\'22",
        initiationSemester: "Fall 2018",
        pledgeClass: "Beta Iota",
        major: "Chemical Engineering",
        minor: "",
        email: "kenanp2@illinois.edu",
      },
      {
        first: "Kevin",
        preferredName: "",
        last: "Dabrowski",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "",
        minor: "",
        email: "kevind3@illinois.edu",
      },
      {
        first: "Koh",
        preferredName: "",
        last: "Shibazaki",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "",
        minor: "",
        email: "kohs3@illinois.edu",
      },
      {
        first: "Kyle",
        preferredName: "",
        last: "Dini",
        position: "Member",
        year: "\'20",
        initiationSemester: "Spring 2017",
        pledgeClass: "Beta Zeta",
        major: "",
        minor: "",
        email: "kdini2@illinois.edu",
      },
      {
        first: "Kyle",
        preferredName: "",
        last: "Wallbaum",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "",
        minor: "",
        email: "kylewallbaum2@yahoo.com",
      },
      {
        first: "Mark",
        preferredName: "",
        last: "Cho",
        position: "Member",
        year: "\'22",
        initiationSemester: "Fall 2018",
        pledgeClass: "Beta Iota",
        major: "Aerospace Engineering",
        minor: "",
        email: "hyojaec2@illinois.edu",
      },
      {
        first: "Matt",
        preferredName: "",
        last: "Daniel",
        position: "Member",
        year: "\'19",
        initiationSemester: "Fall 2015",
        pledgeClass: "Beta Gamma",
        major: "",
        minor: "",
        email: "mdaniel4928@gmail.com",
      },
      {
        first: "Matt",
        preferredName: "",
        last: "Price",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "",
        minor: "",
        email: "mjprice2@illinois.edu",
      },
      {
        first: "Matthias",
        preferredName: "",
        last: "Zajdela",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "Civil Engineering",
        minor: "",
        email: "matthiaszajdela@gmail.com",
      },
      {
        first: "Min",
        preferredName: "",
        last: "Lim",
        position: "Member",
        year: "\'19",
        initiationSemester: "Fall 2015",
        pledgeClass: "Beta Gamma",
        major: "",
        minor: "",
        email: "johnmin97@gmail.com",
      },
      {
        first: "Nicholas",
        preferredName: "Nick",
        last: "Hittle",
        position: "Member",
        year: "\'20",
        initiationSemester: "Spring 2017",
        pledgeClass: "Beta Zeta",
        major: "Chemistry",
        minor: "Dance",
        email: "nhittle2@illinois.edu",
      },
      {
        first: "Nikhil",
        preferredName: "",
        last: "Mannem",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "",
        minor: "",
        email: "nmannem2@illinois.edu",
      },
      {
        first: "Sean",
        preferredName: "",
        last: "Santore",
        position: "Member",
        year: "\'21",
        initiationSemester: "Spring 2018",
        pledgeClass: "Beta Theta",
        major: "Advertising",
        minor: "",
        email: "santore2@illinois.edu",
      },
      {
        first: "Shane",
        preferredName: "",
        last: "Donovan",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "Business",
        minor: "",
        email: "sjd2@illinois.edu",
      },
      {
        first: "Tony",
        preferredName: "",
        last: "Mosele",
        position: "Member",
        year: "\'20",
        initiationSemester: "Fall 2016",
        pledgeClass: "Beta Epsilon",
        major: "",
        minor: "",
        email: "amosele2@illinois.edu",
      },
      {
        first: "Zach",
        preferredName: "",
        last: "Boaz",
        position: "Member",
        year: "\'19",
        initiationSemester: "Fall 2015",
        pledgeClass: "Beta Gamma",
        major: "",
        minor: "",
        email: "boaz2@illinois.edu",
      },
    ];
  }

  ngOnInit() {
  }

}
