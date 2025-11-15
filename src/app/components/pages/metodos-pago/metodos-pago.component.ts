import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-metodos-pago',
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './metodos-pago.component.html',
  styleUrl: './metodos-pago.component.css',
  standalone:true
})
export class MetodosPagoComponent {

}
