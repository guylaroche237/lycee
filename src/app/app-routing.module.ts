import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/authentification/login/login.component';
import { RegisterComponent } from './view/authentification/register/register.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { PublicationsComponent } from './view/student/publications/publications.component';
import { HomeComponent } from './view/student/home/home.component';
import { BulletinsComponent } from './view/student/bulletins/bulletins.component';
import { BulletinComponent } from './view/student/bulletin/bulletin.component';
import { CompositionsComponent } from './view/student/compositions/compositions.component';
import { CoursComponent } from './view/student/cours/cours.component';
import { CourComponent } from './view/student/cour/cour.component';
import { ForumComponent } from './view/student/forum/forum.component';
import { ProfilComponent } from './view/student/profil/profil.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent, 
  children:[
   //  {path:"",component:DashboardComponent},
    {path:"publications",component:PublicationsComponent},
    {path:"home",component:HomeComponent},
    {path:"bulletins",component:BulletinsComponent},
    {path:"bulletin",component:BulletinComponent},
    {path:"compositions",component:CompositionsComponent},
    {path:"cours",component:CoursComponent},
    {path:"cour",component:CourComponent},
    {path:"forum",component:ForumComponent},
    {path:"profil",component:ProfilComponent}
    

  ],},
  {path:"",redirectTo:"/login",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
