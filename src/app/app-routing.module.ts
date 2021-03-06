import { ListDetailComponent } from './list-detail/list-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListExpenseComponent } from './list-expense/list-expense.component';


export const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"expense-list",
    component:ListExpenseComponent
  },
  {
    path:'expense-detail',
    component:ListDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
