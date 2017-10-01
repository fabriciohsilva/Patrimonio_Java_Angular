import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {

  //url do serviço
  itensUrl = 'http://localhost:8080/itens';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.itensUrl);
  }//listar()

  adicionar(item: any){
    return this.http.post(this.itensUrl, item);
  }//adicionar(item: any)


}//export class ItemService
