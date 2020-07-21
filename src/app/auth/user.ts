export interface Roles {
    pledge?: boolean;
    active?: boolean;
    chairman?: boolean;
    executive?: boolean;
    alumnus?: boolean;
    admin?: boolean;
}

export interface ChapterPositions {

}

export interface User {
    uid: string;
    email: string;
    roles: Roles;
    firstName: string;
    lastName: string;
    pledgeClass: string;
}