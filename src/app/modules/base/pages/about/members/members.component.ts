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
        major: "Political Science",
        minor: "",
        email: "nletto2@illinois.edu",
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
      {
        first: "Peter",
        preferredName: "Pete",
        last: "Waz",
        position: "Recruitment Chair",
        year: "\'22",
        initiationSemester: "Fall 2019",
        pledgeClass: "Beta Lambda",
        major: "Pre-Engineering",
        minor: "",
        email: "join@thetachiuiuc.org",
      },
      {
        first: "Marcus",
        preferredName: "",
        last: "Mrdak",
        position: "Marshal",
        year: "\'22",
        initiationSemester: "Spring 2019",
        pledgeClass: "Beta Kappa",
        major: "",
        minor: "",
        email: "",
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
      {
        first: "Justin",
        preferredName: "",
        last: "Kang",
        position: "Social Chair",
        year: "\'21",
        initiationSemester: "Fall 2019",
        pledgeClass: "Beta Lambda",
        major: "",
        minor: "",
        email: "",
      },
    ];
  }

  ngOnInit() {
  }

}
