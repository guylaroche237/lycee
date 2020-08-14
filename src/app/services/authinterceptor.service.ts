import { HttpInterceptor,HttpRequest,HttpHandler} from '@angular/common/http';
import { from } from 'rxjs';
import { StoragedataService } from './storagedata.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor {

  constructor(private storage:StoragedataService) { }

  intercept(request:HttpRequest<any>,next:HttpHandler){
    console.log(' INTERCEPTOR FOR REQUEST');

    let token = this.storage.getToken();;
    request = this.addToken(request,token);
    return next.handle(request);
  //  return next.handle(authReq);
  }

  private addToken(request:HttpRequest<any>,token:string){
    return request.clone(
      {setHeaders: {'Authorization':'Bearer '+token}}
    );
  }

}