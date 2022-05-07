import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean = false;
  activo:string='';

  title = 'myapp';

  empleados = [

    {nombre:'Alexander',edad:38,profesion:'ingeniero'},
    {nombre:'keidy',edad:20,profesion:'operaria'},
    {nombre:'pedro',edad:19,profesion:'estudiante'},


  ];

}
