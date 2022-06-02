import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { PostModalComponent } from './posts/post-modal/post-modal.component';
import { SessionGuard } from './auth/session.guard';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'posts',
    component: HomeComponent,
  },
  {
    path: 'auth',
    // canActivate: [SessionGuard],
    component: AuthComponent
  },
  {
    path: 'user/:id',
    component: ProfileComponent,
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
