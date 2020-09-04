import { Component, OnInit } from '@angular/core';
import { StoragedataService } from 'src/app/services/storagedata.service';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(private storage:StoragedataService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit() {
    this.route.navigate(['home'],{relativeTo:this.router});
  }

  deconnection(){
    this.storage.forgetUser();
    this.route.navigateByUrl("/login");
  }

}
