import { Component, OnInit } from '@angular/core';

import { ItemService } from '../services/item.service';
import { FormControl } from "@angular/forms/forms";

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})

export class ItemCadastroComponent implements OnInit {

  itens = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.consultar();
  }//ngOnInit() 

  consultar(){
    this.itemService.listar()
      .subscribe(dados => this.itens = dados);
  }//consultar()

  adicionar(frm: FormControl){
    console.log(frm.value);
    this.itemService.adicionar(frm.value)
      .subscribe(() => {
        frm.reset();
        this.consultar();
      });
  }//adicionar(frm: FormControl)

}//export class ItemCadastroComponent implements OnInit 
