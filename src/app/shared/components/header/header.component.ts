import { Component, Input } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

interface User{
  nome:String,
  admin:boolean
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() user:User = {nome:"lorem",admin:false}
  showSideBar = false
}
