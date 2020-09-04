import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatiereCompo } from 'src/app/entites/matiere_compo';

@Injectable({
  providedIn: 'root'
})
export class MatiereCompoBySalleRequestService {
  private baseUrl:string = "http://localhost:8000/api/matcp";

  constructor(private http:HttpClient) { }

  //------------ save matiere compos ----------------------
  saveMatiere_compos_by_classe(matiere_compo:MatiereCompo){
    return this.http.post(this.baseUrl+'/save',matiere_compo);
  }
  //_---------------- return all matiere compos by classe ---------
  find_all_matieres_compos_by_classe(){
    return this.http.get(this.baseUrl+'/all');
  }
}
