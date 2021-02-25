import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthBasicGuard implements CanActivate {
    allowedRoles = [
        'basic',
        'exec',
        'admin'
    ];

    constructor(
        private auth: AuthService
    ) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.auth.user.pipe(map(user => {
            return this.allowedRoles.indexOf(user?.role.toLowerCase()) >= 0;
        }));
    }
}
