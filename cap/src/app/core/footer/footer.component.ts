import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  ano : number = new Date().getFullYear()
  versao: string = environment.version;

  constructor() { }

  ngOnInit(): void {
  }

}
