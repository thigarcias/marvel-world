import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css'],
  providers: []
})
export class MarvelComponent implements OnInit {
  nomeHeroi: string;
  loading: boolean = false;

  @Output() buscarHeroi = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
}