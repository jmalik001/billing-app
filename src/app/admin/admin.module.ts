import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NavModule } from '../shared/components/nav/nav.module';

@NgModule({
  declarations: [AdminComponent, AdminHomeComponent],
  imports: [CommonModule, AdminRoutingModule, NavModule],
})
export class AdminModule {}
