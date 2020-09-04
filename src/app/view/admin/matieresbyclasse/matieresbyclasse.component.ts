import { Component, OnInit } from '@angular/core';
import { UniterequestService } from 'src/app/services/api/uniterequest.service';
import { MatiereCompoBySalleRequestService } from 'src/app/services/api/matiere-compo-by-salle-request.service';

@Component({
  selector: 'app-matieresbyclasse',
  templateUrl: './matieresbyclasse.component.html',
  styleUrls: ['./matieresbyclasse.component.css']
})
export class MatieresbyclasseComponent implements OnInit {
  liste_compo_by_salle:any;

  constructor(private matieres_compo:MatiereCompoBySalleRequestService) { }

  ngOnInit() {
    this.find_all_compo_by_salle();
  }

  find_all_compo_by_salle(){
    this.matieres_compo.find_all_matieres_compos_by_classe().subscribe(
      data => {
        this.liste_compo_by_salle = data;
        console.log(data);
      },
      error => {}
    );
  }


}
