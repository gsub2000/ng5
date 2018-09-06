import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersComponent } from './offers/offers.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { BillinginfoComponent } from './billinginfo/billinginfo.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    LoginComponent,
    AccountComponent,
    BillinginfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
