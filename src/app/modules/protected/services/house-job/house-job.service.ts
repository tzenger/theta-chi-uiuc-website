import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProtectedModule } from '../../protected.module';

@Injectable({
    providedIn: ProtectedModule
})
export class HouseJobService {

    constructor(
        private afs: AngularFirestore
    ) {
    }

    // getMemberFromRef(memberRef: DocumentReference)
}
