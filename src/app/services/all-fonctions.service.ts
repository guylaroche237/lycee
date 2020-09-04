import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllFonctionsService {

  constructor(private route:Router) { }

  selectReelDashboard(role:string){
    if(role == 'ROLE_ETUDIANT'){
      this.route.navigateByUrl("/dashboard");
    }else if(role == 'ROLE_ENSEIGNANT'){
      this.route.navigateByUrl("/enseignant");

    }else if(role == 'ROLE_ADMIN'){
      this.route.navigateByUrl("/admin");
    }else{
      this.route.navigateByUrl("/login");
    }

  }
}
