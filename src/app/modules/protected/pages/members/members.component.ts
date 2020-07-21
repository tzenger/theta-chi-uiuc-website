import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Member } from '../../services/member/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members: Observable<Member[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.members = <Observable<Member[]>>this.afs.collection('members').valueChanges();
  }

  ngOnInit(): void {
  }

}
