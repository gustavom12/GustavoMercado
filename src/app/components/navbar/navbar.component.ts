import {
  AfterViewInit,
  Component,
  HostListener
} from '@angular/core';
import{IntersectionObserverService} from "../../services/intersection-observer.service"
@Component({
  selector: 'app-navbarr',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class navbarrComponent implements AfterViewInit {
  constructor(public observerS: IntersectionObserverService) {}
  navbarTitle = "Home"
  @HostListener('document: scroll')scroll(){
    if(this.navbarTitle === localStorage.getItem("navbarTitle")){
      return
    }else{
      const $title = document.querySelector(".logo")
      this.navbarTitle = localStorage.getItem("navbarTitle")
      //animation
      this.toggle($title,"titleChange1")
      setTimeout(() => {
        this.toggle($title,"titleChange1")
      }, 1000);
      
    }
  }
  
$navbarContent = document.querySelector('.nav-content');
//set an animation and a className to a element
  toggle(ToggleItem,className = 'active') {
    ToggleItem.classList.toggle(className);
  }
  scrollToElement(el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  $home;
  about;
  portfolio;
  form;
  ngAfterViewInit(): void {
    this.$home = document.querySelector('.header');
    this.about = document.querySelector('.about');
    this.portfolio = document.querySelector('.portfolio');
    this.form = document.querySelector('.form');
    window.onscroll = function () {
      myFunction();
    };
    let navbar = document.getElementById('navbar');
    let sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky + 10) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }
  }
}
