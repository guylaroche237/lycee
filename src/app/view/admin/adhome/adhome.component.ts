import { Component, OnInit } from '@angular/core';
import { ClasserequestService } from 'src/app/services/api/classerequest.service';

@Component({
  selector: 'app-adhome',
  templateUrl: './adhome.component.html',
  styleUrls: ['./adhome.component.css']
})
export class AdhomeComponent implements OnInit {
  all_classes:any;

  constructor(private classes:ClasserequestService) { }

  ngOnInit() {
    this.findAllClasses();
  }

  findAllClasses(){
    this.classes.findallclasse_request().subscribe(
      data=>{ this.all_classes = data;console.log(data);},
    );

  }

}
