import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { NavBarUserComponent } from './nav-bar-user/nav-bar-user.component';

@NgModule({
  declarations: [NavBarAdminComponent, NavBarUserComponent],
  imports: [CommonModule],
  exports: [NavBarAdminComponent, NavBarUserComponent],
})
export class NavModule {}
