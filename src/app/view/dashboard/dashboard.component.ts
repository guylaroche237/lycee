import { Component, OnInit } from '@angular/core';
import { StoragedataService } from 'src/app/services/storagedata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthentificationrequestService } from 'src/app/services/api/authentificationrequest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;

  constructor(private storage:StoragedataService,private router:Router,private auth:AuthentificationrequestService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUserOnline();
    //this.route.navigateByUrl("/publications");
    this.router.navigate(['home'],{relativeTo:this.route});
  }

  deconnection(){
    this.storage.forgetUser();
    this.router.navigateByUrl("/login");

  }

  loadUserOnline(){
    var id:number = this.storage.getId();
    
    this.auth.findUserById_request(id).subscribe(
      data =>{ 
        this.user = data; console.log(this.user.email);},
      error =>{ console.log("user non trouver !!");}
    );

  }

}
