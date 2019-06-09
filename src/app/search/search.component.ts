import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RepoService} from '../repo.service';
import { Repo} from '../repo';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[RepoService]
})
export class SearchComponent implements OnInit {

  repo: Repo;
  result: any;
  repoArray:any;
  link: string;
  searchValue: string;
  
  getRepos(reposearch){

    

    this.link = "https://api.github.com/users/" + reposearch.value + '/repos' + '?acess_token0a94727d6456bb7fe8d9f84cff11b4ce6d3a913f';
    this.http.get(this.link).subscribe((item)=>{
      this.repoArray = item;
      console.log(this.result);

    });

    }
  


  constructor(private http: HttpClient, private repoService: RepoService) { }

  ngOnInit() {
    this.repoService.repoRequest;
    this.repo = this.repoService.repo;
    console.log(this.repo)
  }
}
