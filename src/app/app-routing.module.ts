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
import { DashboardProfComponent } from './view/dashboard-prof/dashboard-prof.component';
import { AcceuilComponent } from './view/enseignant/acceuil/acceuil.component';
import { DashboardAdminComponent } from './view/dashboard-admin/dashboard-admin.component';
import { AdhomeComponent } from './view/admin/adhome/adhome.component';
import { MatieresbyclasseComponent } from './view/admin/matieresbyclasse/matieresbyclasse.component';
import { ConfigmatieresbyclasseComponent } from './view/admin/configmatieresbyclasse/configmatieresbyclasse.component';
import { NewclasseComponent } from './view/admin/newclasse/newclasse.component';
import { AllProfComponent } from './view/admin/all-prof/all-prof.component';


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
  {path:"enseignant",component:DashboardProfComponent,
   children:[
     {path:"home",component:AcceuilComponent}
   ]  
},
{path:"admin",component:DashboardAdminComponent,
 children:[
   {path:"home",component:AdhomeComponent},
   {path:"composbyclasse",component:MatieresbyclasseComponent},
   {path:"configcompo",component:ConfigmatieresbyclasseComponent},
   {path:"new-classe",component:NewclasseComponent},
   {path:"profeusseurs",component:AllProfComponent},
   {path:"",redirectTo:"/admin",pathMatch:"full"}
 ]},
  {path:"",redirectTo:"/login",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
