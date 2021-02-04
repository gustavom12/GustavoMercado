import { AfterViewInit, Component, OnInit } from '@angular/core';
import{IntersectionObserverService} from "../../services/intersection-observer.service"

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private observerS: IntersectionObserverService) { }


  form

  ngAfterViewInit(): void {
    const $header = document.querySelector(".header")
    this.observerS.setobs($header,"Contact")
    this.form = document.querySelector('#form');
  }

  buttonHover(){
    const arrow = document.querySelector("#arrow")
    arrow.classList.add("arrowdown")
  }

  buttonNotHover(){
    const arrow = document.querySelector("#arrow")
    arrow.classList.remove("arrowdown")
  }

  scrollToElement(el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }

}
