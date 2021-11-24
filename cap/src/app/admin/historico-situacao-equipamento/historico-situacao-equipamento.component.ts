import { Component, OnInit } from '@angular/core';
import { HistoricoSituacaoEquipamento } from '../models/historico-situacao-equipamento.model';
import { HistoricoSituacaoEquipamentoService } from '../services/historico-situacao-equipamento.service';

@Component({
  selector: 'app-historico-situacao-equipamento',
  templateUrl: './historico-situacao-equipamento.component.html',
  styleUrls: ['./historico-situacao-equipamento.component.css']
})
export class HistoricoSituacaoEquipamentoComponent implements OnInit {

  historicoSituacaoEquipamentos!: Array<any>;
  historicoSituacaoEquipamento: HistoricoSituacaoEquipamento = new HistoricoSituacaoEquipamento(); 
  loading!: boolean;

  constructor(private historicoSituacaoEquipamentoService: HistoricoSituacaoEquipamentoService) { }

  ngOnInit() {
    this.buscarHistoricoSituacaoEquipamento();
  }

  buscarHistoricoSituacaoEquipamento(){
    this.historicoSituacaoEquipamentoService.buscarTodos().subscribe(h => {
      this.historicoSituacaoEquipamentos = h;           
    });
  }

}
