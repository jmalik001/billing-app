import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import {AdminAuthGuardSrvice as AdminAuthGuard} from '../shared/services/admin.auth.guard.service'

const routes: Routes = [{ path: '', component: AdminComponent },
{path:'admin-home', component: AdminHomeComponent , canActivate: [AdminAuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
