import { Component, OnInit } from '@angular/core';
import { UserService} from '../users/user.service';
import { User} from '../user';
import { HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [UserService]
})
export class GithubComponent implements OnInit {

  user: User;
  result: any;
  

  getRepos(){
    const repos = "https://api.github.com/users/Julzpeter/repos";

    this.http.get(repos).subscribe((data)=>{

      this.result = data;
      console.log(this.result);
    });
}

  constructor(private userService: UserService, private http: HttpClient,private router: Router) {
    this.user = new User("",0,"","")
  }

  ngOnInit() {
    this.userService.userInformation();
    this.user = this.userService.user
  }

}
