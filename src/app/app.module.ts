import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyQueriesComponent } from './my-queries/my-queries.component';
import { WriteQueryComponent } from './write-query/write-query.component';
import { QueryListComponent } from './my-queries/query-list/query-list.component';
import { AppRouteModule } from './app-route.module';
import { QueryDetailsComponent } from './my-queries/query-details/query-details.component';
import { QueryService } from './my-queries/query.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyQueriesComponent,
    WriteQueryComponent,
    QueryListComponent,
    QueryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouteModule
  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
