export class Member {
  id?: string;
  uid?: number;
  netId?: string;
  firstName: string;
  lastName: string;
  preferredName?: string;
  position: string;
  birthday: firebase.firestore.Timestamp;
  gradYear: number;
  pledgeClass: string;
  phone: number;
  email: string;
  city?: string;
  state?: string;
  major?: string;
  minor?: string;
}