import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { AccountComponent } from './account/account.component';
import { BillinginfoComponent } from './billinginfo/billinginfo.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'billinginfo',
    component: BillinginfoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
