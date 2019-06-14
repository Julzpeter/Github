import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from './repo';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepoService {

  repo: Repo;
  newRepo: any;


  constructor(private http: HttpClient) {
    this.repo = new Repo("", 0, "", "",new Date());
    console.log('works');
  }

  repoRequest() {
    interface ApiResponse {
      name: string;
      id: number;
      html_url: string;
      description: string;
    }

    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiGithub).toPromise().then(

        (response) => {
          this.repo.name = response.name;
          this.repo.id = response.id;
          this.repo.html_url = response.html_url;
          this.repo.description = response.description;
          this.newRepo = response;
          console.log(this.repo);
          console.log('xc');
          resolve();
        },
        (error) => {
          alert('error');
          reject(error);
        }
      );

    });
    return promise;
  }

}
