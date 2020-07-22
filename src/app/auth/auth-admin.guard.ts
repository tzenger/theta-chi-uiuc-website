import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
    user: User;

    allowedRoles = [
        'admin'
    ];

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private auth: AuthService
    ) {
        this.auth.user.subscribe(user => {
            this.user = user;
        });
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.auth.user.pipe(map(user => {
            return this.allowedRoles.indexOf(user?.role.toLowerCase()) >= 0;
        }));
    }
}
