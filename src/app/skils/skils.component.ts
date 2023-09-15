<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { SkilsService } from '../services/skils.service';
>>>>>>> 0523303de6f6d0c8bd6f4979ed9163764b4e929f

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
<<<<<<< HEAD
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent {

=======
  styleUrls: ['./skils.component.css'],
})
export class SkilsComponent implements OnInit {
  habilidades: Array<any> = [];
  constructor(private skilsService: SkilsService) {}

  ngOnInit(): void {
    this.skilsService.getSkils().subscribe((data: any) => {
      this.habilidades = data;
    });
  }
>>>>>>> 0523303de6f6d0c8bd6f4979ed9163764b4e929f
}
