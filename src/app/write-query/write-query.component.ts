import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { QueryService } from '../my-queries/query.service';

@Component({
  selector: 'app-write-query',
  templateUrl: './write-query.component.html',
  styleUrls: ['./write-query.component.css']
})
export class WriteQueryComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              private queryService: QueryService) { }

  ngOnInit(): void {
  }

  onSubmit(formData: NgForm) {
    console.log(formData.value);
    // this.httpClient.post('C:/Users/Sathya/Documents/FormData', formData.value);
    this.queryService.insertNewQuery(formData);
  }

}
