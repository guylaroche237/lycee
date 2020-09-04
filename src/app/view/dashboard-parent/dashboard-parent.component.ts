import { Component, OnInit } from '@angular/core';
import { StoragedataService } from 'src/app/services/storagedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-parent',
  templateUrl: './dashboard-parent.component.html',
  styleUrls: ['./dashboard-parent.component.css']
})
export class DashboardParentComponent implements OnInit {

  constructor(private storage:StoragedataService,private route:Router) { }

  ngOnInit() {
  }

  deconnection(){
    this.storage.forgetUser();
    this.route.navigateByUrl("/login");
  }

}
