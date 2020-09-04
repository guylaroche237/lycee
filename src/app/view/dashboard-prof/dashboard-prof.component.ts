import { Component, OnInit } from '@angular/core';
import { StoragedataService } from 'src/app/services/storagedata.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-prof',
  templateUrl: './dashboard-prof.component.html',
  styleUrls: ['./dashboard-prof.component.css']
})
export class DashboardProfComponent implements OnInit {

  constructor(private storage:StoragedataService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit() {
    this.route.navigate(['home'],{relativeTo:this.router})
  }

  deconnection(){
    this.storage.forgetUser();
    this.route.navigateByUrl("/login");
  }

}
