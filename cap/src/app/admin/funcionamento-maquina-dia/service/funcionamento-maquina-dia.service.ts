import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionamentoMaquinaDiaService {

  readonly baseUrl : string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8081/cap-api/funcionamento-maquina-dia';
    //this.baseUrl = 'http://cmbhlgjboss02:8080/cap-api/funcionamento-maquina-dia';    
  }

  buscarTodos(): Observable<any>{    
    return this.http.get(`${this.baseUrl}`);
  }

}
