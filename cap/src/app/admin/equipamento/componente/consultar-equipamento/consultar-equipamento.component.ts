import { Component, OnInit } from '@angular/core';
import { Equipamento } from '../../model/equipamento.model';
import { EquipamentoService } from '../../service/equipamento.service';

@Component({
  selector: 'app-equipamento',
  templateUrl: './consultar-equipamento.component.html',
  styleUrls: ['./consultar-equipamento.component.css']
})
export class ConsultarEquipamentoComponent implements OnInit {

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

  migrarEquipamento(){
    this.equipamentoService.migrarEquipamento().subscribe(e => {            
      this.equipamentos = e;  
      this.buscarEquipamento();         
    });        
  }

  fecharAlert(){
    this.alert = false;
  }

}
