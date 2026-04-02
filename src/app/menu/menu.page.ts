import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false,
})
export class MenuPage implements OnInit {

  constructor(private router: Router) {}

  areaDeCadastro() {
    this.router.navigate(['/cadastro'])
  }

  areaDeRecebimento() {
    this.router.navigate(['/receber'])

  }

  areaDePagamento() {
    this.router.navigate(['/pagar'])
  }


  sair() {
    this.router.navigate(['/login'])
  }
  ngOnInit() {
  }

}
