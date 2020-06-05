import { Component, OnInit } from '@angular/core';
import { QueryService } from './query.service';
import { QueryModel } from '../shared/query.model';

@Component({
  selector: 'app-my-queries',
  templateUrl: './my-queries.component.html',
  styleUrls: ['./my-queries.component.css']
})
export class MyQueriesComponent implements OnInit {

  queries: QueryModel[];

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
    this.queries = this.queryService.getQueries();
    this.queryService.queryInserted.subscribe(
      (queries: QueryModel[]) => {
        this.queries = queries;
    });
  }

}
