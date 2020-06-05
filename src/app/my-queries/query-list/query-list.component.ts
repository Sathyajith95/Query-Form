import { Component, OnInit, Input } from '@angular/core';
import { QueryService } from '../query.service';
import { QueryModel } from 'src/app/shared/query.model';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent implements OnInit {
  
  @Input() query: QueryModel;
  @Input() index: string;

  constructor(private querieService: QueryService) {  }

  ngOnInit(): void {

  }

}
