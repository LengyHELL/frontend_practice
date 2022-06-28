import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from "src/app/pages/login/login.component";
import { AuthGuard } from "src/app/helpers/auth.guard";
import { HomeComponent } from "src/app/pages/home/home.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'popular', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'top-rated', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'search', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
