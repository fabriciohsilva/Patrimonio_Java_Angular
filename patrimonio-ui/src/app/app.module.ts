import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

//PrimeNG
import { DataTableModule
       , ButtonModule
       , InputTextModule
       , InputMaskModule
       , CalendarModule } from 'primeng/primeng'; 

//Project
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { ItemService } from './services/item.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule
  , BrowserAnimationsModule
  , DataTableModule
  , HttpClientModule
  , ButtonModule
  , InputTextModule
  , InputMaskModule
  , CalendarModule
  , FormsModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
