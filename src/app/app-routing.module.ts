import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { UserComponent } from './users/user/user.component';
import { SignupComponent } from './users/user/signup/signup.component';
import { SigninComponent } from './users/user/signin/signin.component';



const routes: Routes = [
  
  {
   path:"signup",component:UserComponent,
   children:[{path:"",component:SignupComponent}]
  },
  {
    path:"login",component:UserComponent,
    children:[{path:"",component:SigninComponent}]
  },
  {path:"notes",component:NotesComponent},
  {path:"user",component:UserComponent},
  // {path:"",redirectTo:"/login",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
