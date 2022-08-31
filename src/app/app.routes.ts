import { Routes } from '@angular/router';

import { BoxInitialComponent } from './components/box-initial/box-initial.component';
import { BoxPrincipalComponent } from './components/box-principal/box-principal.component';
import { AuthGuard } from './core/auth.guard';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: BoxInitialComponent, canActivate: [AuthGuard] },
  { path: 'home', component: BoxPrincipalComponent, canActivate: [AuthGuard]},
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
]
