import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEquipamentoComponent } from './admin/equipamento/componente/cadastrar-equipamento/cadastrar-equipamento.component';
import { ConsultarEquipamentoComponent } from './admin/equipamento/componente/consultar-equipamento/consultar-equipamento.component';

import { FuncionamentoMaquinaComponent } from './admin/funcionamento-maquina/componente/funcionamento-maquina.component';
import { CadastrarGrupoComponent } from './admin/grupo/componente/cadastrar-grupo/cadastrar-grupo.component';
import { ConsultarGrupoComponent } from './admin/grupo/componente/consultar-grupo/consultar-grupo.component';

import { HistoricoSituacaoEquipamentoComponent } from './admin/historico-situacao-equipamento/historico-situacao-equipamento.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'funcionamento-maquina', component: FuncionamentoMaquinaComponent }, 
  { path: 'historico-situacao-equipamento', component: HistoricoSituacaoEquipamentoComponent }, 
  { path: 'consultar-equipamento', component: ConsultarEquipamentoComponent }, 
  { path: 'cadastrar-equipamento', component: CadastrarEquipamentoComponent }, 
  { path: 'consultar-grupo', component: ConsultarGrupoComponent }, 
  { path: 'cadastrar-grupo', component: CadastrarGrupoComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
