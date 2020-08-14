import { Component, OnInit } from '@angular/core';
import { AuthentificationrequestService } from 'src/app/services/api/authentificationrequest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error_password:boolean = false;
  message_error:string = "";
  constructor(private api_request:AuthentificationrequestService) { }

  ngOnInit() {
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

}
