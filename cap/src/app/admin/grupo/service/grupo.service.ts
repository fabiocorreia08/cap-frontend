import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  readonly baseUrl : string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8081/cap-api/grupo';
    //this.baseUrl = 'http://cmbhlgjboss02:8080/cap-api/grupo';
  }

  buscarTodos(): Observable<any>{    
    return this.http.get(`${this.baseUrl}`);
  }

  gerar(grupo: Object): Observable<Object>{      
    return this.http.post(`${this.baseUrl}/gerar`, grupo);
  }

  migrarGrupo(): Observable<any>{    
    return this.http.get(`${this.baseUrl}/migrar-grupo`);
  }

}
