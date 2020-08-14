import { Component } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lycee';
  constructor(private auth:AuthentificationService,private route:Router){}
  ngOnInit(): void {
   if(!this.auth.authoriser()){
     this.route.navigateByUrl("/login");
   }
    
  }
}
