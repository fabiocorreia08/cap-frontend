import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoSituacaoEquipamentoService {

  readonly baseUrl : string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8081/cap-api/historico-situacao-equipamento';
    //this.baseUrl = 'http://cmbhlgjboss02:8080/cap-api/historico-situacao-equipamento';
  }

  buscarTodos(): Observable<any>{    
    return this.http.get(`${this.baseUrl}`);
  }

}
