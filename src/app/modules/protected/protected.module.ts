import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProtectedRoutingModule } from './protected-routing.module';
import { AccountComponent } from './pages/account/account.component';
import { ViewAccountDetailsComponent } from './components/view-account-details/view-account-details.component';
import { EditAccountDetailsComponent } from './components/edit-account-details/edit-account-details.component';

@NgModule({
  declarations: [
    AccountComponent,
    ViewAccountDetailsComponent,
    EditAccountDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProtectedRoutingModule,
    FormsModule,
  ]
})
export class ProtectedModule { }
