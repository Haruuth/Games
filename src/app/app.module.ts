import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { EncuentraElTesoroComponent } from './pages/encuentra-el-tesoro/encuentra-el-tesoro.component';
import { FormsModule } from '@angular/forms';
import { WhackAMoleComponent } from './pages/whack-a-mole/whack-a-mole.component';
import { CambioDeMonedaComponent } from './pages/cambio-de-moneda/cambio-de-moneda.component';
import { SharedComponent } from './shared/shared.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { MemoComponent } from './pages/memo/memo.component'



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    EncuentraElTesoroComponent,
    WhackAMoleComponent,
    CambioDeMonedaComponent,
    SharedComponent,
    ComponentsComponent,
    HeaderComponent,
    MemoComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
