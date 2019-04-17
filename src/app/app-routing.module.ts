import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { UsereditComponent } from './user/useredit/useredit.component';
const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'userdetail/:id', component: UserdetailComponent},
  { path: 'useredit/:id', component: UsereditComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
