/// Service to get the Application Configuration details (from file)
//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// To specify the response object type, first define an interface with the required properties. 
// (Use an interface rather than a class; a response cannot be automatically converted to an instance of a class.)
export interface Config {
  server: string; 
  port: String;
  url: String;
}

@Injectable(
  {providedIn:'root'}
)

export class ConfigService {
  config: Config;

  constructor(private http: HttpClient) { 
    this.getConfig().subscribe(data => { 
     });
     
    }

  
  getConfig():Observable <any>{
    // can use <Config> because interface has been declared in export interface..
    return this.http.get<Config>("/assets/appConfiguration/config.json");
  }

  showConfig() {
    this.getConfig()
      .subscribe((data: Config) => this.config = {...data}
      // can use ...data above, to put the declared Config structure directly into this.config, otherwise use the following:
      // .subscribe((data: Config) => this.config = {serverURL: data['serverUrl'] 
      // or
      // .subscribe(data => this.config = {
      //    heroesUrl: (data as any).heroesUrl,
      //    textfile:  (data as any).textfile,
      //  });
      );
  }
}