import {Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import{IntersectionObserverService} from "../../services/intersection-observer.service"
import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient, private observerS: IntersectionObserverService) { }
  //Set width of bar depending of the screen size
   barwidth = (entry:any)=> {
     if(entry === "none"|| !entry[0].isIntersecting)return
    const bar = document.querySelector(".bar"),
    nameofbar = document.querySelector(".nameofbar"),
    Namewidth = getComputedStyle(nameofbar).width,
    widdth = getComputedStyle(bar).width,
    //100%
    width =  Number(widdth.replace("px","")) - Number(Namewidth.replace("px","")),
    dataf = document.querySelectorAll("[data-barWidth]")
    dataf.forEach((el:any)=>{
      //Width animation
      const x = width / 100 * parseFloat(el.dataset.barwidth)
      let percent = 0
      let i = 0
      function increment(){
        if(i >= x) return;
        i++
        el.style.width = `${i}px`
        // percent ++
        // el.parentElement.querySelector("span").innerText = `${percent}%`
        setTimeout(()=>increment(),1)
      }
      increment()
    })
    //sumar en contador de visitas
    this.http.put("https://contadorvisitasportfolio.herokuapp.com/contador/sumar",{})
    .subscribe()
  this.http.get("https://contadorvisitasportfolio.herokuapp.com/contador")
    .subscribe(data=>{
      localStorage.setItem("c",JSON.stringify(data))
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
