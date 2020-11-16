import {Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import{IntersectionObserverService} from "../../services/intersection-observer.service"

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements AfterViewInit {
@HostListener('window:resize')resize(){
  this.barwidth("none")
}
  screenWidth;
  constructor(private observerS: IntersectionObserverService) { }
  //Set width of bar depending of the screen size
   barwidth = (entry:any)=> {
     if(entry === "none"|| !entry[0].isIntersecting)return
     console.log(entry)
    const $width100 = document.querySelector(".fill100"), 
    //first bar (100%width)
    width = getComputedStyle($width100).width,
    $fill = document.querySelectorAll(".fill"),
    dataf = document.querySelectorAll("[data-barWidth]")
    $width100.classList.add("widthAnimation")
    console.log(width,380 / 100 * 50)   
    dataf.forEach((el:any)=>{
      //Width animation
      const x = parseFloat(width) / 100 * parseFloat(el.dataset.barwidth)
      let i = 0
      function increment(){
        if(i >= x) return;
        i++
        el.style.width = `${i}px`
        setTimeout(()=>increment(),15)
      }
      increment()
    })
    this.obs.disconnect()
  } 
   obs = new IntersectionObserver(this.barwidth,{threshold: 0.6})

  ngAfterViewInit():void{
    const $container = document.querySelector(".quiensoy")
    this.observerS.setobs($container,"Contact")
    this.obs.observe(document.querySelector(".bars"))
    this.barwidth("none")
  }
}
