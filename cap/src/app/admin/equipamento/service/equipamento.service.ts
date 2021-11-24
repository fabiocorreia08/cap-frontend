import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  readonly baseUrl : string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8081/cap-api/equipamento';
    //this.baseUrl = 'http://cmbhlgjboss02:8080/cap-api/equipamento';
  }

  buscarTodos(): Observable<any>{    
    return this.http.get(`${this.baseUrl}`);
  }

  migrarEquipamento(): Observable<any>{    
    return this.http.get(`${this.baseUrl}/migrar-equipamento`);
  }

  gerar(equipamento: Object): Observable<Object>{      
    return this.http.post(`${this.baseUrl}/gerar`, equipamento);
  }

}
