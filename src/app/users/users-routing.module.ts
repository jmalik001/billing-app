import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSalesComponent } from './user-sales/user-sales.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    children: [
      { path: '', redirectTo : 'profile', pathMatch: 'full' },
      { path: 'profile', component: UserProfileComponent },
      { path: 'edit-profile', component: UserProfileComponent },
      { path: 'user-sales', component: UserSalesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
