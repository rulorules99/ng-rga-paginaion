import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BodyResponse } from './body-response';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) { }

  /**
   * Get a list
   * @param params: string
   * @return Promise<BodyResponse>
   */
  public get(params: string = ''): Promise<BodyResponse> {
    return this.http.get<BodyResponse>(`https://reqres.in/api/users${params}`).toPromise();
  }

  /**
   * Get a list
   * @param params: string
   * @return Promise<BodyResponse>
   */
  public customGet(params: string = ''): Promise<BodyResponse> {
    return this.http.get<BodyResponse>(`https://reqres.in/api/users${params}${params ? '&' : '?'}delay=3`).toPromise();
  }
}
