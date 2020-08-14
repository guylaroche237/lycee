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
    ForumComponent
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
  providers: [AuthentificationService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthinterceptorService,multi:true}
    ,StoragedataService,AuthentificationrequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
