import { Component, OnInit } from '@angular/core';
import { AuthentificationrequestService } from 'src/app/services/api/authentificationrequest.service';
import { ClasserequestService } from 'src/app/services/api/classerequest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error_password:boolean = false;
  message_error:string = "";
  role:string;
  all_classes:any;
  constructor(private api_request:AuthentificationrequestService,public classes:ClasserequestService) { }

  ngOnInit() {
    this.find_all_classes();
  }

  register(data){
    console.log(data);
    if(data.password == data.password2){
      this.api_request.register_request(data).subscribe(
        res=>{
         // console.log(res);
          console.log(res.body);
          console.log(res.status);
        },
        error=>{
          this.message_error = "Certaines Informations existe deja";
          this.error_password = true;
        }
      );

    }else{
      this.message_error="Password Pas Identique"
      this.error_password = true;
    }
  }

  find_all_classes(){
    this.classes.findallclasse_request().subscribe(
      data =>{ this.all_classes = data;console.log(data);}
    );
  }

}
