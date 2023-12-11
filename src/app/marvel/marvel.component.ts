import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css'],
  providers: []
})
export class MarvelComponent implements OnInit {
  nomeHeroi: string;
  loading: boolean = false;

  constructor(
  ) { }

  ngOnInit() {
  }

  buscarHeroi() {
      this.loading = true;
  }
}
