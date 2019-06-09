import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent} from './github/github.component';
import { SearchComponent} from './search/search.component';
import { CommonModule} from '@angular/common';


const routes: Routes = [
  { path: 'github', component: GithubComponent },
  { path: 'search', component: SearchComponent },
  { path: "", redirectTo: "/github", pathMatch: "full" }
];

@NgModule({
  declarations:[],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
export const routingComponents = [GithubComponent, SearchComponent]
