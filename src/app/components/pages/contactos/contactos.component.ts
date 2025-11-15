import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-contactos',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css',
  standalone:true
})
export class ContactosComponent {

}
