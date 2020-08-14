import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';
import { Http, Request, RequestOptions, RequestOptionsArgs, Response } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private host:String="http://localhost:8000";
    jwtToken:string = null;
    private roles:Array<any>;

  connecter:boolean = false;

  constructor(private http:HttpClient) { }

  authoriser(){
    if(this.connecter == false){
      return this.connecter;
    }else{
      return this.connecter;
    }
  }

  login(user){
    return this.http.post(this.host+"/login",user,{observe:'response'});
      
}

saveToken(jwt:string){
    this.jwtToken = jwt;
    localStorage.setItem("token",jwt);
    let jwtDecode = new JwtHelper();
   this.roles = jwtDecode.decodeToken(this.jwtToken).roles;
   //console.log(jwtDecode.decodeToken(this.jwtToken));
   console.log(this.roles);
    
}

loadToken(){
    this.jwtToken = localStorage.getItem('token');
}

}
