import { Injectable, EventEmitter } from '@angular/core';
import { QueryModel } from '../shared/query.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  queryInserted = new EventEmitter<QueryModel[]>();

  private queries: QueryModel[] = [
    new QueryModel(1 , 'Sathyajith','7760624514',
                   'sathyajith95@gmail.com','Test Title 1','Test Detail 1',
                   'C/fakepath/batman_joker_wallpaper.png'),
    new QueryModel(2 , 'Tim Cook','7760624514',
                   'test@gmail.com','Test Title 2','Test Detail 2',
                   'C/fakepath/batman_joker_wallpaper.png')
  ];

  getQueries(){
    return this.queries.slice();
  }

  getQuery(index: number){
    return this.queries[index];
  }

  insertNewQuery(formData: NgForm){
    const query = new QueryModel(
      this.queries.length+1, formData.value.name,
      formData.value.contNumber,formData.value.email,
      formData.value.qTitle,formData.value.qDetails,
      formData.value.attachment);
    
    this.queries.push(query);
    this.queryInserted.emit(this.queries);
  }
  constructor() { }
}
