import { Component, OnInit } from '@angular/core';

interface Conta {
  nome: string;
  vencimento: string;
  pagamento: string;
  valor: string;
}

@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
  standalone: false,
})

export class ReceberPage implements OnInit {

  conta: Conta = {
    nome: '',
    vencimento: '',
    pagamento: '',
    valor: ''
  };

  contas: Conta[] = [];

  salvarConta() {
    const nome = this.conta.nome.trim();
    const vencimento = this.conta.vencimento;
    const pagamento = this.conta.pagamento;
    const valor = this.conta.valor;

    // regex para validar formato 00/00/0000
    const regexData = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!nome || !vencimento || !pagamento || !valor) {
      alert('Preencha todos os campos!');
      return;
    }

    if (!regexData.test(vencimento) || !regexData.test(pagamento)) {
      alert('Use o formato de data: 00/00/0000');
      return;
    }

    this.contas.unshift({
      nome,
      vencimento,
      pagamento,
      valor
    });

    this.limparFormulario();
  }

  excluirConta(index: number) {
    this.contas.splice(index, 1);
  }

  limparFormulario() {
    this.conta = {
      nome: '',
      vencimento: '',
      pagamento: '',
      valor: ''
    };
  }

  formatarData(campo: 'vencimento' | 'pagamento') {
    let dataInformada = this.conta[campo];

    if (!dataInformada) return;

    // remove tudo que não for número
    dataInformada = dataInformada.replace(/\D/g, '');

    // aplica máscara
    if (dataInformada.length > 2) {
      dataInformada = dataInformada.slice(0, 2) + '/' + dataInformada.slice(2);
    }

    if (dataInformada.length > 4) {
      dataInformada = dataInformada.slice(0, 5) + '/' + dataInformada.slice(5, 9);
    }

    // atualiza via ngModel (isso é o correto!)
    this.conta[campo] = dataInformada;
  }

  formatarValor(event: any) {
    const valor = event.target.value;
    if (!valor) {
      this.conta.valor = '';
      return;
    }

    // remove tudo que não for número
    let v = valor.replace(/\D/g, '');

    if (v === '') {
      this.conta.valor = '';
      return;
    }

    // transforma em número com centavos
    v = (parseInt(v, 10) / 100).toFixed(2);

    // aplica máscara de reais
    v = v
      .replace('.', ',') // troca ponto por vírgula
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // adiciona pontos

    this.conta.valor = 'R$ ' + v;
  }

  constructor() { }

  ngOnInit() { }

}
