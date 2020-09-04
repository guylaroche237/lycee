import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classes } from 'src/app/entites/classes';

@Injectable({
  providedIn: 'root'
})
export class ClasserequestService {

  private baseUrl:string = "http://localhost:8000/api/classes";

  constructor(private http:HttpClient) { }
  //---------------- save new classe --------------------------
  saveClasse_request(cls:Classes){
    return this.http.post(this.baseUrl+'/save',cls);

  }
  //---------------- find all classes ----------------------
  findallclasse_request(){
    return this.http.get(this.baseUrl+'/');
  }
  
}
