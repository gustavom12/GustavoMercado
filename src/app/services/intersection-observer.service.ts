import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {
  constructor() { }
  obs = new IntersectionObserver(this.func,{threshold:0.8})
  func (entries = []){
    let title = "Home"
    entries.forEach(el => {
      //Change the navbar title when the element is in the view
      if(el.isIntersecting && el.target.classList[0] === "header")title = "Home"
      if(el.isIntersecting && el.target.classList[0] === "about")title = "Sobre mí"
      if(el.isIntersecting && el.target.classList[0] === "portfoliocontainer")title = "Proyectos"
      if(el.isIntersecting && el.target.classList[0] === "form")title = "Contacto"
      if(!el.isIntersecting){ return }
      localStorage.setItem("navbarTitle", title)
      //console.log(localStorage.getItem("navbarTitle"))
    });
  }
  
  setobs(el,texto:string){
    //console.log(this.obs.observe(el))
    this.obs.observe(el)
  }
  getNavbarTitle() {
    console.log(this.func())
}
}
