// export interface Roles {
//     pledge?: boolean;
//     active?: boolean;
//     chairman?: boolean;
//     executive?: boolean;
//     alumnus?: boolean;
//     admin?: boolean;
// }

import { DocumentReference } from '@angular/fire/firestore';

// export interface ChapterPositions {

// }

export interface User {
    id: string;
    email: string;
    role: string;
    memberRef: DocumentReference;
}