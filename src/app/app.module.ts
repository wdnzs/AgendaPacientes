import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AgendaComponent } from './agenda/agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FinanceiroComponent,
    CadastroComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
