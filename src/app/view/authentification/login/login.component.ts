import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { AuthentificationrequestService } from 'src/app/services/api/authentificationrequest.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";  
import { Observable } from 'rxjs';
import { StoragedataService } from 'src/app/services/storagedata.service';
import { AllFonctionsService } from 'src/app/services/all-fonctions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usert:UserToken;
  stringifiedData: any;  
  parsedJson: any; 
  spinner_state:boolean=false;
  login_state:boolean=true;


  constructor(private auth:AuthentificationrequestService,private fonctions:AllFonctionsService,private storage:StoragedataService) { }

  ngOnInit() {
    if(localStorage.getItem("token")!=null){
     // this.route.navigateByUrl("/dashboard");
     this.fonctions.selectReelDashboard(this.storage.getRoleUser());


    }
  }

  login(data){
  //  this.spinner.show();
     this.login_state = false;
     this.spinner_state = true;
    this.auth.login_request(data).subscribe(
      res =>{
       
       this.stringifiedData = JSON.stringify(res);
       this.parsedJson = JSON.parse(this.stringifiedData); 
       console.log(this.parsedJson);
       this.storage.saveToken(this.parsedJson.token);
       this.storage.saveRoleUser(this.parsedJson.roles[0]);
       this.storage.saveId(this.parsedJson.id);
       this.spinner_state = false;
       this.login_state = true;

       
       this.fonctions.selectReelDashboard(this.storage.getRoleUser());

      
      // this.route.navigateByUrl("/dashboard");
    //   this.spinner.hide();
        //console.log(this.usert.token);
      },
      error => 
       {
         this.spinner_state = false;
         this.login_state = true;
         console.log(error);
       }
    );
    console.log(data);
  }

}
