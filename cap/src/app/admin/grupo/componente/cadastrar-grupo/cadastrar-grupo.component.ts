import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../model/grupo.model';
import { GrupoService } from '../../service/grupo.service';
import { Location } from '@angular/common';
import { LabelValue } from 'src/app/admin/models/label-value';
import { GrupoDTO } from '../../resources/dto/grupo-dto';
import { EquipamentoService } from 'src/app/admin/equipamento/service/equipamento.service';
import { Equipamento } from 'src/app/admin/equipamento/model/equipamento.model';


@Component({
  selector: 'app-grupo',
  templateUrl: './cadastrar-grupo.component.html',
  styleUrls: ['./cadastrar-grupo.component.css']
})
export class CadastrarGrupoComponent implements OnInit {

  public grupo: Grupo = new Grupo();  
  public equipamentos!: Array<Equipamento>;

  constructor(private grupoService: GrupoService,
    private equipamentoService: EquipamentoService,
    private location:Location) { }

  ngOnInit(): void {  
    this.buscarEquipamento();  
  } 

  buscarEquipamento(){
    this.equipamentoService.buscarTodos().subscribe(e => {            
      this.equipamentos = e;           
    });       
  }

  public salvar() {
    
  }

  public cancelar() {
    this.location.back();
  }

}
