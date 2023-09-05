import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService) {}
  name: string = 'José Emmanuel Martínez Rivera';
  titulos: string = 'ISW';
  mision: string = 'Ser un buen ingeniero de software';
  fotoUrl: string = '';
  email: string = '';
  celular: string = '';
  ubicacion: string = '';
  redsocial: string = '';

  ngOnInit(): void {
    this.headerService.getHeader().subscribe((data: any) => {
      this.name = data.name;
      this.titulos = data.titulos;
      this.mision = data.mision;
      this.fotoUrl = data.foto;
      this.email = data.email;
      this.celular = data.celular;
      this.ubicacion = data.ubicacion;
      this.redsocial = data.redsocial;
      console.log(data);
      //alert(data);
    });
  }
}
