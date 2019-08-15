import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private afs: AngularFirestore
  ) { }

  public add(member: Member) {
    const id = this.afs.createId();
    const memberRef: AngularFirestoreDocument<any> = this.afs.doc(`members/${id}`);
    member.id = id;
    return memberRef.set(member, { merge: false });
  }

  public remove(id: string) {

    if (!id) {
      console.log('Could not delete member id: ' + id);
      return;
    }

    const memberRef: AngularFirestoreDocument<any> = this.afs.doc(`members/${id}`);

    if (!memberRef) {
      console.log('Member reference does not exist: ' + id);
      return;
    }

    return memberRef.delete();
  }

  public update(member: Member, merge?: true) {

    if (!member.id) {
      console.log('Could not update member: ' + member);
      return;
    }

    const memberRef: AngularFirestoreDocument<any> = this.afs.doc(`members/${member.id}`);

    if (!memberRef) {
      console.log('Member reference does not exist: ' + member.id);
      return;
    }

    return memberRef.set(member, { merge: merge });
  }

  public async getAll(): Promise<Member[]> {
    let members: Array<Member> = [];

    const data = await this.afs.collection('members').ref.get();

    data.forEach(doc => {
      members.push(<Member>doc.data());
    });

    return members;
  }
}
