import { DocumentReference } from '@angular/fire/firestore';

export interface User {
  id: string;
  email: string;
  roleRef: DocumentReference;
  memberRef: DocumentReference;
}