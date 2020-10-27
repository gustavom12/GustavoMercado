import { HtmlTagDefinition } from '@angular/compiler';
import { AfterViewInit, Component, OnInit,ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() { }
//@ViewChildren ("fill")fill:any 
//@ViewChild ("fill100")width100:any
   barwidth = ()=> {
    const $width100 = document.querySelector(".fill100"),
    width = getComputedStyle($width100).width,
    $fill = document.querySelectorAll(".fill"),
    dataf = document.querySelectorAll("[data-barWidth]")
    console.log(width,380 / 100 * 50)   
    dataf.forEach((el:any)=>{
     const x = parseFloat(width) / 100 * parseFloat(el.dataset.barwidth)
     el.style.width = `${x}px`
     console.log(parseFloat(width) / 100 * parseFloat(el.dataset.barwidth))
    })
    
   } 

  ngOnInit(): void {
    this.barwidth()
   
  }

  ngAfterViewInit():void{
    //const $fill = this.fill._results
    // $width100 = this.width100._results.ElementRef
    //console.log($fill)
  }
}
