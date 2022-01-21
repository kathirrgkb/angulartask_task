import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  

  constructor(private http: HttpClient) { }
  getFiles()
  {
    let url = "https://api.publicapis.org/entries";
    return this.http.get(url);
    
  }
  ngOnInit(): void {
    
   
  }
}
