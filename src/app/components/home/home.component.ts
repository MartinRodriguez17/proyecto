import { Component } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { InformacionComponent } from '../informacion/informacion.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CarruselComponent, InformacionComponent, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
}