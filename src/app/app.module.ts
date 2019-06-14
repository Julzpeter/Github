import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { SearchComponent } from './search/search.component';

import { HttpClientModule } from '@angular/common/http';
import { DateAgoPipe } from './date-ago.pipe';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GithubComponent,
    SearchComponent,
    DateAgoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
