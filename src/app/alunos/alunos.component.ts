import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, HeaderComponent],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss',
})
export class AlunosComponent implements OnInit {
  formPesquisa!: FormGroup;

  ngOnInit(): void {
    this.formPesquisa = new FormGroup({
      pesquisar: new FormControl('', Validators.required),
    });
  }

  pesquisar() {}

  excluir() {
    window.confirm('Quer mesmo excluir este usuário?');
  }
}
