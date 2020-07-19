import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProtectedRoutingModule } from './protected-routing.module';
import { AccountComponent } from './pages/account/account.component';

@NgModule({
  declarations: [
    AccountComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProtectedRoutingModule,
    FormsModule,
  ]
})
export class ProtectedModule { }
