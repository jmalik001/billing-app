import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';

const userRoutes: Routes = [
  { path: 'user-details', component: UserListComponent },
];

@NgModule({
  declarations: [UserListComponent, UserHomeComponent],
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
})
export class UserModule {}
