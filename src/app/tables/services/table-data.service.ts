import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private httpClient: HttpClient) { }

  getTableData(): Observable<any> {
    return this.httpClient.get<any>(`${environment.ApiUrl}/Table`);
  }
}
