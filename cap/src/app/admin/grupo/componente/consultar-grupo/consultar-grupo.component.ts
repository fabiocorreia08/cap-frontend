import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../model/grupo.model';
import { GrupoService } from '../../service/grupo.service';


@Component({
  selector: 'app-grupo',
  templateUrl: './consultar-grupo.component.html',
  styleUrls: ['./consultar-grupo.component.css']
})
export class ConsultarGrupoComponent implements OnInit {

  alert: boolean = false;
  message!: string;
  grupos!: Array<any>;
  loading!: boolean;
  grupo: Grupo = new Grupo();

  constructor(private grupoService: GrupoService) { }

  ngOnInit(): void {
    this.buscarGrupo();
  }

  buscarGrupo(){
    this.grupoService.buscarTodos().subscribe(g => {            
      this.grupos = g;           
    });
    this.grupo = new Grupo();    
  }

  fecharAlert(){
    this.alert = false;
  }

  migrarGrupo(){
    this.grupoService.migrarGrupo().subscribe(g => {            
      this.grupos = g;  
      this.buscarGrupo();         
    });        
  }

}
