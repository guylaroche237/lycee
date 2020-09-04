import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/authentification/login/login.component';
import { RegisterComponent } from './view/authentification/register/register.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AuthentificationService } from './services/authentification.service';
import { HttpClientModule } from '@angular/common/http';

import { StoragedataService } from './services/storagedata.service';
import { AuthentificationrequestService } from './services/api/authentificationrequest.service';
import { NgxSpinnerService, NgxSpinnerModule } from "ngx-spinner";
import { HomeComponent } from './view/student/home/home.component';  
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthinterceptorService } from './services/authinterceptor.service';

import { from } from 'rxjs';
import { PublicationsComponent } from './view/student/publications/publications.component';
import { CompositionsComponent } from './view/student/compositions/compositions.component';
import { BulletinsComponent } from './view/student/bulletins/bulletins.component';
import { BulletinComponent } from './view/student/bulletin/bulletin.component';
import { CoursComponent } from './view/student/cours/cours.component';
import { CourComponent } from './view/student/cour/cour.component';
import { ProfilComponent } from './view/student/profil/profil.component';
import { ForumComponent } from './view/student/forum/forum.component';
import { DashboardAdminComponent } from './view/dashboard-admin/dashboard-admin.component';
import { DashboardProfComponent } from './view/dashboard-prof/dashboard-prof.component';
import { DashboardParentComponent } from './view/dashboard-parent/dashboard-parent.component';
import { AcceuilComponent } from './view/enseignant/acceuil/acceuil.component';
import { AdhomeComponent } from './view/admin/adhome/adhome.component';
import { AllFonctionsService } from './services/all-fonctions.service';
import { MatieresbyclasseComponent } from './view/admin/matieresbyclasse/matieresbyclasse.component';
import { ConfigmatieresbyclasseComponent } from './view/admin/configmatieresbyclasse/configmatieresbyclasse.component';
import { NewclasseComponent } from './view/admin/newclasse/newclasse.component';
import { UniterequestService } from './services/api/uniterequest.service';
import { ClasserequestService } from './services/api/classerequest.service';
import { MatiereCompoBySalleRequestService } from './services/api/matiere-compo-by-salle-request.service';
import { AllProfComponent } from './view/admin/all-prof/all-prof.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    PublicationsComponent,
    CompositionsComponent,
    BulletinsComponent,
    BulletinComponent,
    CoursComponent,
    CourComponent,
    ProfilComponent,
    ForumComponent,
    DashboardAdminComponent,
    DashboardProfComponent,
    DashboardParentComponent,
    AcceuilComponent,
    AdhomeComponent,
    MatieresbyclasseComponent,
    ConfigmatieresbyclasseComponent,
    NewclasseComponent,
    AllProfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
    
  ],
  providers: [AuthentificationService,AllFonctionsService,UniterequestService,ClasserequestService,MatiereCompoBySalleRequestService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthinterceptorService,multi:true}
    ,StoragedataService,AuthentificationrequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
