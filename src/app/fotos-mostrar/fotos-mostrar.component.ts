import { Component, OnInit } from '@angular/core';
import { FotosService } from '../fotos.service';

@Component({
  selector: 'app-fotos-mostrar',
  templateUrl: './fotos-mostrar.component.html',
  styleUrls: ['./fotos-mostrar.component.css']
})
export class FotosMostrarComponent implements OnInit {
  fotos:any = [];
  constructor(private service:FotosService) { }

  ngOnInit() {
  }
  onClick(){
    this.service.getFoto().subscribe(data=>{
      this.fotos = data.urls.regular;
    });
  }
}
