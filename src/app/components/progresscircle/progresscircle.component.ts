import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-progresscircle',
  templateUrl: './progresscircle.component.html',
  styleUrls: ['./progresscircle.component.sass']
})
export class ProgresscircleComponent implements AfterViewInit {
  @Input("width")width;
  @Input("title")title
  @ViewChild("percent1")percent1
  @ViewChild("percent2")percent2
  AnimationDuration = 2500
  percentAnimation = 0
  delay = 700
  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    const callback = (entry)=>{
      if(entry === "none"|| !entry[0].isIntersecting)return
      const TimeIteration = this.AnimationDuration / this.width
      setTimeout(()=>{
        const Interval =  setInterval(()=>{
          this.percentAnimation += 1
          if(this.percentAnimation >= this.width)clearInterval(Interval)
        },TimeIteration)
      },this.delay - 50)
      // 180 / 50 * lo q haya
      const progressValue:HTMLDivElement = this.percent1.nativeElement
      const progressValue2:HTMLDivElement = this.percent2.nativeElement
      const primer50 = new Promise((resolve,reject)=>{
        progressValue.animate([
          {transform: `rotate(0deg)`},
          {transform: `rotate(180deg)`},
        ],{
        // timing options
        easing: "linear",
        duration: this.AnimationDuration / 2,
        iterations: 1,
        fill: 'forwards',
        delay: this.delay
      })
      setTimeout(()=>{resolve("animación terminada")},(this.AnimationDuration / 2) + this.delay )
      }).then((res)=>{
        //si la animación es menor al 50%, no sigue con la otra mitad de la animacion
        if(this.width <= 50)return;
        const percent = (((this.width -50 ) / 100) * 180) *2
        progressValue2.classList.add("animationStayAt100")
        progressValue2.animate([
          {transform: `rotate(0deg)`},
          {transform: `rotate(${percent}deg)`}
        ],{
          // timing options
          easing: "ease-out",
          duration: this.AnimationDuration / 2,
          iterations: 1,
          fill: 'forwards'
        })
      })
      observer.unobserve(document.querySelector(".about"))
    }
    let observer = new IntersectionObserver(callback, {threshold: 0.4})
    observer.observe(document.querySelector(".about"))
  }
}
