import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-accesorios',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './accesorios.component.html',
  styleUrl: './accesorios.component.css',
  standalone:true
})
export class AccesoriosComponent {

}
