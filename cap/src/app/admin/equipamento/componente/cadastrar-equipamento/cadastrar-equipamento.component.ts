import { Component, OnInit } from '@angular/core';
import { Equipamento } from '../../model/equipamento.model';
import { EquipamentoService } from '../../service/equipamento.service';


@Component({
  selector: 'app-equipamento',
  templateUrl: './cadastrar-equipamento.component.html',
  styleUrls: ['./cadastrar-equipamento.component.css']
})
export class CadastrarEquipamentoComponent implements OnInit {

  alert: boolean = false;
  message!: string;
  equipamentos!: Array<any>;
  loading!: boolean;
  equipamento: Equipamento = new Equipamento();

  constructor(private equipamentoService: EquipamentoService) { }

  ngOnInit(): void {
    this.buscarEquipamento();
  }

  buscarEquipamento(){
    this.equipamentoService.buscarTodos().subscribe(e => {            
      this.equipamentos = e;           
    });
    this.equipamento = new Equipamento();    
  }

  fecharAlert(){
    this.alert = false;
  }

}
