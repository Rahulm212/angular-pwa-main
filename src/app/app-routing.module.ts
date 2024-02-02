import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';

//lazy loading implemetation 
const routes: Routes = [{ path: '', component: HomeComponent },
{  path: 'user-profile', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule) },];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
