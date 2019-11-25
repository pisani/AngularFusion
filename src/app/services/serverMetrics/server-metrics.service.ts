import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServerMetricsService {

  constructor(private http: HttpClient) {

    }

  getChart():Observable <any>{
    // can use <Config> because interface has been declared in export interface..
    return this.http.get("/assets/mockServerData/barchart.json");
  }

}
