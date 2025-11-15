import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-alimento',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './alimento.component.html',
  styleUrl: './alimento.component.css',
  standalone:true
})
export class AlimentoComponent {

}
