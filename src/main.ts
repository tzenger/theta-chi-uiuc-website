import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';
import { AppModule } from './app/app.module';
import { environment, firebaseConfig } from './environments/environment';
import { FirebaseOptionsToken } from '@angular/fire';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([{ provide: FirebaseOptionsToken, useValue: firebaseConfig }])
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));