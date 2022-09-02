import { ApiListModel } from './api.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from './api.service';

@Injectable()
export class ApiResolver implements Resolve<ApiListModel> {

  constructor(public apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot) : Promise<ApiListModel> {

    let GetLista = new ApiListModel();

    return new Promise((resolve, reject) => {
      GetLista.forEach(() => {
        this.apiService.listar()
        .then(res => {
          GetLista.id = res.id;
          GetLista.title = res.title;
          GetLista.body = res.body;
          GetLista.provider = res.provider;
          return resolve(GetLista);
        }, err => {
          return reject(err);
        })
    })
  }
    )}}
