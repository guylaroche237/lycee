import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { AuthentificationrequestService } from 'src/app/services/api/authentificationrequest.service';

@Component({
  selector: 'app-all-prof',
  templateUrl: './all-prof.component.html',
  styleUrls: ['./all-prof.component.css']
})
export class AllProfComponent implements OnInit {

  proffeusseurs:any;

  constructor(private auth:AuthentificationrequestService) { }

  ngOnInit() {
    this.getAllProff();
    }

  getAllProff(){
    this.auth.findAllTeachers_request().subscribe(
      data => { this.proffeusseurs = data ,console.log(data);},
      error =>{}
    );

  }

}
