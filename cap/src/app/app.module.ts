import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';

import { HistoricoSituacaoEquipamentoComponent } from './admin/historico-situacao-equipamento/historico-situacao-equipamento.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule} from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionamentoMaquinaComponent } from './admin/funcionamento-maquina/componente/funcionamento-maquina.component';
import { FuncionamentoMaquinaDiaComponent } from './admin/funcionamento-maquina-dia/componente/funcionamento-maquina-dia.component';

import { ConsultarGrupoComponent } from './admin/grupo/componente/consultar-grupo/consultar-grupo.component';
import { CadastrarGrupoComponent } from './admin/grupo/componente/cadastrar-grupo/cadastrar-grupo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultarEquipamentoComponent } from './admin/equipamento/componente/consultar-equipamento/consultar-equipamento.component';
import { CadastrarEquipamentoComponent } from './admin/equipamento/componente/cadastrar-equipamento/cadastrar-equipamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    FuncionamentoMaquinaComponent,
    FuncionamentoMaquinaDiaComponent,
    HistoricoSituacaoEquipamentoComponent,
    ConsultarEquipamentoComponent,
    CadastrarEquipamentoComponent,
    ConsultarGrupoComponent,
    CadastrarGrupoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule, 
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
