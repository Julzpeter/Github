import { Injectable } from '@angular/core';
import { User} from "../user";
import { HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User
  
  userInformation(){
  interface ApiResponse{
    login:string;
    id:number;
    avatar:string;
    bio:string;
  }
  const promise=new Promise((resolve,reject)=>{
    var link = "https://api.github.com/users/Julzpeter?access_token=0a94727d6456bb7fe8d9f84cff11b4ce6d3a913f";
    this.http.get<ApiResponse>(link).toPromise().then(
      (response)=>{
        this.user.name = response.login;
        this.user.id = response.id;
        this.user.avatar = response.avatar;
        this.user.bio = response.bio;
  
        resolve();
  
        console.log(response.login);
        },
        (error)=>{
          alert('error');
          reject(error);
        }
    );
  });
return promise;
  }
  

  constructor(private http: HttpClient)
   {this.user = new User('',0,'','')

   }
}
