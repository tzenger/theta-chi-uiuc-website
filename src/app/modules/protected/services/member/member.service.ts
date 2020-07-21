import { Injectable } from '@angular/core';
import { ProtectedModule } from '../../protected.module';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: ProtectedModule
})
export class MemberService {

  constructor(
    private afs: AngularFirestore
  ) { 
  }

  // getMemberFromRef(memberRef: DocumentReference)
}
