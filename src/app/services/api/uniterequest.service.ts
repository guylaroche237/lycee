import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniterequestService {
  private baseUrl:string = "http://localhost:8000/api/unite";

  constructor(private http:HttpClient) { }
  //----------------- return tous les unites de matieres ----------------
  findAllUnite_request(){
    return this.http.get(this.baseUrl+"/all");
  }

}
