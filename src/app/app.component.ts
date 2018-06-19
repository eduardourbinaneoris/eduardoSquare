import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Eduardo's Place";
  lugares: any = [
    { nombre: "Perfume de Gardenia" },
    { nombre: "Tortas Locas" },
    { nombre: "Veterinaria Huellas Felices" },
    { nombre: "Perfume de Gardenia" },
    { nombre: "Tortas Locas" },
    { nombre: "Veterinaria Huellas Felices" }
  ];
}
