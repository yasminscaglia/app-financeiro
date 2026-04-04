import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Login{
  nome:string;
  senha:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  login = {
    nome: '',
    senha: '',
  }

  constructor(private router: Router) {}

  acessarMenu(){
    const nome = this.login.nome.trim();
    const senha = this.login.senha.trim();

    if (!nome || !senha) {
      return 
    }

    this.router.navigate(['/menu'])
    this.login = {
      nome: '',
      senha: '',
    }
  }


  ngOnInit() {
  }

}
