import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationrequestService } from 'src/app/services/api/authentificationrequest.service';
import { Classes } from 'src/app/entites/classes';
import { ClasserequestService } from 'src/app/services/api/classerequest.service';


@Component({
  selector: 'app-newclasse',
  templateUrl: './newclasse.component.html',
  styleUrls: ['./newclasse.component.css']
})
export class NewclasseComponent implements OnInit {
  liste_prof:any;
  prof_select:any = [];
  classe:Classes;

  constructor(private route:Router,private auth:AuthentificationrequestService,private classes:ClasserequestService) { }

  ngOnInit() {
    this.findAllProf();
  }

  findAllProf(){
    this.auth.findAllTeachers_request().subscribe(
      data =>{
        console.log(data);this.liste_prof=data;
      },
      error =>{}
    );

  }

  saveClasse(data){
    
    let i = 0;
    for(let prof of this.liste_prof){
      var name = prof.username;
      var choix = data[name];
      if(choix==true){
        this.prof_select[i]=prof;
        i++;
      }
     // data['enseignant'] = this.prof_select;
    }
      this.classe = new Classes();
      this.classe.nbre = data['nbre'];
      this.classe.nom = data['salle'];
      this.classe.enseignants = this.prof_select;
      console.log(this.classe);
    

    this.classes.saveClasse_request(this.classe).subscribe(
      data=>{
        this.route.navigateByUrl("/admin/home");
      }
    );
  }

}
