import { Routes } from '@angular/router';

import { BoxInitialComponent } from './components/box-initial/box-initial.component';
import { AuthGuard } from './core/auth.guard';
import { UserComponent } from './components/user/user.component';
import { UserResolver } from './components/user/user.resolver';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: BoxInitialComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
]
