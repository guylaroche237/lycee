import { Component, OnInit } from '@angular/core';
import { UniterequestService } from 'src/app/services/api/uniterequest.service';
import { ClasserequestService } from 'src/app/services/api/classerequest.service';
import { Unite } from 'src/app/entites/unite';
import { MatiereCompo } from 'src/app/entites/matiere_compo';
import { MatiereCompoBySalleRequestService } from 'src/app/services/api/matiere-compo-by-salle-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configmatieresbyclasse',
  templateUrl: './configmatieresbyclasse.component.html',
  styleUrls: ['./configmatieresbyclasse.component.css']
})
export class ConfigmatieresbyclasseComponent implements OnInit {
  all_classes:any;
  all_unites:any;
  matiere:Unite;
  matiere_select:Unite[] = [];
  matiere_compo:MatiereCompo;
  constructor(private unites:UniterequestService,private classes:ClasserequestService,private request_matierecp:MatiereCompoBySalleRequestService,private route:Router) { }

  ngOnInit() {
    this.findAllClasses();
    this.findallUnites();
  }

  findAllClasses(){
    this.classes.findallclasse_request().subscribe(
      data=>{ this.all_classes = data;console.log(data);},
    );

  }

  findallUnites(){
    this.unites.findAllUnite_request().subscribe(
      data => { this.all_unites = data;console.log(data);}
    );

  }

  saveData(data){
    
    let k = 0;
    for(let unite of this.all_unites){
      var id = unite.nom;
      var choix = data[id];
      if(choix == true){
        this.matiere = new Unite();
        this.matiere.id = unite.id;
        this.matiere.nom = unite.nom;
        this.matiere_select[k] = this.matiere;
        
          k++;     
      } 

    }
    //this.getUniteSelectionner();
    this.matiere_compo = new MatiereCompo();
    this.matiere_compo.classes = data.salle;
    this.matiere_compo.matieres = this.matiere_select;
  
  // let lis = this.compress(this.matieres);
  this.request_matierecp.saveMatiere_compos_by_classe(this.matiere_compo).subscribe(
    data=>{ this.route.navigateByUrl('/admin/composbyclasse');},
    error => {}
  );
   
  
   

  }

}
