import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../AuthService/auth.service';
import { ApplicationUserService } from '../application-user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService implements HttpInterceptor {

  constructor(private auth: AuthService, private userService: ApplicationUserService) { }


  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.auth.getToken()) {

      const helper = new JwtHelperService();

      const decodedToken: string = helper.decodeToken(this.auth.getToken());

      console.log(this.auth.getToken()); 

      let tokenExpired = helper.isTokenExpired(this.auth.getToken());

      if (tokenExpired) {
        // //console.log(decodedToken)
        this.getRefreshToken(decodedToken['userName'], decodedToken['password']);
        // this.getRefreshToken("hansand", "hans1234");
      } else {

      }
      request = request.clone({

        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`

        }
      });
      
      // next.handle(request)(err => {
      // });
      return next.handle(request);

    } else {
      return next.handle(request);
    }
  }

  getRefreshToken(username: string, password: string) {
    // //console.log("gg");

    this.userService.getRefreshToken(username, password).subscribe(data => {
      if (data.isSuccess) {
        // //console.log(116, data)
        this.auth.setToken(data.applicationUserVM[0])

      }
    })
  }
  
}
