import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {
  constructor() { }
  obs = new IntersectionObserver(this.func,{threshold:0.5})
  func (entries = []){
    let title = "Home"

    entries.forEach(el => {
      //Change the navbar title when the element is in the view
      if(!el.isIntersecting){ return }
      if(el.isIntersecting && el.target.classList[0] === "header")title = "Home"
      if(el.isIntersecting && el.target.classList[0] === "quiensoy")title = "Sobre mí"
      if(el.isIntersecting && el.target.classList[0] === "portfoliocontainer")title = "Proyectos"
      if(el.isIntersecting && el.target.classList[0] === "form")title = "Contacto"
      console.log(title)
      localStorage.setItem("navbarTitle", title)
    });
  }

  setobs(el,texto:string){
    this.obs.observe(el)
  }
  getNavbarTitle() {
}
}
