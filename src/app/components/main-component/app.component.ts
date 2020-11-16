import { Component,OnInit } from '@angular/core';
import { trigger,style,transition,animate } from "@angular/animations"
import * as AOS from 'aos'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
  /*animations: [
    trigger("animacion",[
      state("*",style({
        transform:"translateX(-100)"
        opacity:0
      }))
    ])
  ]*/
})
export class AppComponent implements OnInit{
  title = 'GustavoMercado';
  

  ngOnInit(){
    AOS.init({
      once: true,
      offset: 10
      });
  }
}
