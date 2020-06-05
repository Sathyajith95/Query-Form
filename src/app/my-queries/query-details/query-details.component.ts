import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QueryService } from '../query.service';
import { QueryModel } from 'src/app/shared/query.model';

@Component({
  selector: 'app-query-details',
  templateUrl: './query-details.component.html',
  styleUrls: ['./query-details.component.css']
})
export class QueryDetailsComponent implements OnInit {

  query: QueryModel;
  id: number;

  constructor(private route: ActivatedRoute,
              private queryService: QueryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
        console.log(this.id);
        this.query = this.queryService.getQuery(this.id);
      }
    );
  }

}
