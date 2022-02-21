import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = "https://api.cdnjs.com/libraries";

  results$!: Observable<any>;
  total = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSearch() {
    let valueSearch: string = this.queryField.value;

    if (valueSearch && (valueSearch = valueSearch.trim()) !== '') {
      const fields = "name,description,version,homepage";
      
      let params = new HttpParams();
      params = params.set("fields", fields).set("search", this.queryField.value);

      this.results$ = this.http.get(this.SEARCH_URL, { params })
        .pipe(
          tap((res: any) => this.total = res.total),
          map((res: any) => res.results)
        );
    }
  }
}
