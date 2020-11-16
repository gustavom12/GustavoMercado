import { Component, OnInit } from '@angular/core';
import{IntersectionObserverService} from "../../services/intersection-observer.service"

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  constructor(private observerS: IntersectionObserverService) { }
  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    const $container = document.querySelector(".portfoliocontainer")
    this.observerS.setobs($container,"Contact")

  }

}
