import { Component, OnInit } from '@angular/core';

interface Cadastro{
  nome: string;
  tipo: string;
  endereco: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage implements OnInit {

  cadastro = {
    nome: '',
    tipo: '',
    endereco: '',
  }

  usuariosCadastrados: Cadastro[]=[];

  salvarCadastro(){
    const nome = this.cadastro.nome.trim();
    const tipo = this.cadastro.tipo.trim();
    const endereco = this.cadastro.endereco.trim();


    if(!nome || !tipo || !endereco){
      return;
    }

    this.usuariosCadastrados.unshift({nome, tipo, endereco});
    this.limparFormulario();
  }

  excluirCadastro(index:number){
    this.usuariosCadastrados.splice(index,1)
  }

  limparFormulario(){
    this.cadastro = {
      nome:'',
      tipo:'',
      endereco:'',
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
