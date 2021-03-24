import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSalesComponent } from './user-sales/user-sales.component';
import { NavModule } from '../shared/components/nav/nav.module';


@NgModule({
  declarations: [UsersComponent, UserProfileComponent, UserSalesComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NavModule
  ]
})
export class UsersModule { }
