import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoragedataService {
  idUser:number;

  constructor() { }


  //----------------------- save Token ----------------
  saveToken(jwt:string){
    localStorage.setItem("token",jwt);
  }
  //----------------------- return Token --------------
  getToken(){
    return localStorage.getItem("token");
  }
  //----------------------- save id user connect -------------
  saveId(id:number){
    localStorage.setItem("id",''+id);
    
  }
  //----------------------- return id user connect ----------
  getId(){
    var idusr = localStorage.getItem("id");
    return +idusr;
  }
  //----------------------  deconnection user ----------------
  forgetUser(){
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem('role');
  }
  //----------------------- save role user ----------------------

  saveRoleUser(role:string){
    localStorage.setItem('role',role);
  }
  //-----------------------  get role user ---------------------------

  getRoleUser(){
    return localStorage.getItem('role');
  }
}
