import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {

  listURL ='https://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient) {}

  listar(){
    return this.http.get(this.listURL)
    .toPromise()
    .then((res: any) => {
      return res;
    }, (err: any) => {  return err; });
  }
}
