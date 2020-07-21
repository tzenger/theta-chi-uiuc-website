import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthBasicGuard implements CanActivate {
    user: User;

    allowedRoles = [
        'basic',
        'exec',
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
        return this.allowedRoles.indexOf(this.user?.role.toLowerCase()) >= 0;
    }
}
