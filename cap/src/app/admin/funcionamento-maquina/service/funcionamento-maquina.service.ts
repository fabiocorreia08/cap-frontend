import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionamentoMaquinaService {

  readonly baseUrl : string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8081/cap-api/funcionamento-maquina';
    //this.baseUrl = 'http://cmbhlgjboss02:8080/cap-api/funcionamento-maquina';
  }

  buscarTodos(): Observable<any>{    
    return this.http.get(`${this.baseUrl}`);
  }

  gerarCalendarioFuncionamento(funcionamentoMaquina: Object): Observable<Object>{      
    return this.http.post(`${this.baseUrl}/gerarCalendario`, funcionamentoMaquina);
  }

}
