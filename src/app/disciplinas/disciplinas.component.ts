import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss',
})
export class DisciplinasComponent {}
