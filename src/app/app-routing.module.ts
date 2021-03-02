import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';
import {UserAuthGuardSrvice as UserAuthGuard} from './shared/services/user.auth.guard.service';
import {AdminAuthGuardSrvice as AdminAuthGuard } from './shared/services/admin.auth.guard.service'


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // { path: 'user', loadChildren: './user/user.module#UserModule' ,   canActivate: [UserAuthGuard]},
  // { path: 'admin', loadChildren: './admin/admin.module#AdminModule' , canActivate: [AdminAuthGuard]},
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {path: '**' , redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
