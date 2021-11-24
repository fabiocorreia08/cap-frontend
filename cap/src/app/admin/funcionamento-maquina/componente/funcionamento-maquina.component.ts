import { Component, OnInit } from '@angular/core';
import { FuncionamentoMaquina } from '../model/funcionamento-maquina.model';
import { FuncionamentoMaquinaService } from '../service/funcionamento-maquina.service';

@Component({
  selector: 'app-funcionamento-maquina',
  templateUrl: './funcionamento-maquina.component.html',
  styleUrls: ['./funcionamento-maquina.component.css']
})
export class FuncionamentoMaquinaComponent implements OnInit {

  funcionamentoMaquinas!: Array<any>;
  funcionamentoMaquina: FuncionamentoMaquina = new FuncionamentoMaquina(); 
  loading!: boolean;
  alert: boolean = false;
  message!: string;
  
  constructor(private funcionamentoMaquinaService: FuncionamentoMaquinaService) { }

  ngOnInit(): void {
    this.buscarFuncionamentoMaquina(); 
  }

  buscarFuncionamentoMaquina(){
    this.funcionamentoMaquinaService.buscarTodos().subscribe(f => {            
      this.funcionamentoMaquinas = f;           
    });
    this.funcionamentoMaquina = new FuncionamentoMaquina();    
  }

  gerarCalendarioFuncionamento(){
    this.funcionamentoMaquinaService.gerarCalendarioFuncionamento(this.funcionamentoMaquina)
        .subscribe(f => {  
          //console.log(p);
          this.buscarFuncionamentoMaquina();                         
      });
    this.message = 'Operação realizada com sucesso.'   
    this.alert=true;         
  }

  fecharAlert(){
    this.alert = false;
  }

}
