import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsComponent } from './comments/comments.component'


const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'comments',
    pathMatch: 'full'
  },
  { path: 'comments', component: CommentsComponent, pathMatch: 'full' },
] 

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES, { enableTracing: false, useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
