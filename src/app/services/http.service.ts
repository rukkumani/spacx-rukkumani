import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private ApiUrl = `https://api.spaceXdata.com/v3/`
  getHeader() {
    return new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Accept', 'application/json; charset=utf-8')
  }
  constructor(private httpClient: HttpClient) { }

  getspaceXlaunch(filterKey): Observable<any> {
    let params = new HttpParams({fromObject:filterKey});
    return this.httpClient.get(`${this.ApiUrl}launches?`, {
      params,
      headers: this.getHeader(),
      observe: 'response'
    })
  }

  // getspaceXFliteredData(filterKey):Observable<any>{
  //   let params = new HttpParams({fromObject:filterKey});
  //   return this.httpClient.get(`${this.ApiUrl}launches?`, {
  //     params,
  //     headers: this.getHeader(),
  //     observe: 'response'
  //   })
  // }

}
