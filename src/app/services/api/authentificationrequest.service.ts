import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoragedataService } from '../storagedata.service';
import { Roles } from 'src/app/entites/roles';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationrequestService {
  private baseUrl:string = "http://localhost:8000/api/auth";

  constructor(private http:HttpClient,private storage:StoragedataService) { }
  //------------------- login user : connection ---------------------
  login_request(user){
    return this.http.post(this.baseUrl+"/login",user);
  }
  //------------------ Register user: creation de compte ----------
  register_request(user){
    return this.http.post(this.baseUrl+"/register",user,{observe:'response'});
  }
  //------------------ Find User by Id -------------------------------------
     // {headers:new HttpHeaders({'Authorization':'Bearer '+this.storage.getToken()})}
  findUserById_request(id:number){
    return this.http.get(this.baseUrl+'/user/id/'+id);
  }
  //----------------- Find All Teachers  ---------------------------
  findAllTeachers_request(){
    return this.http.get(this.baseUrl+'/users/profs');
  }
}
