import { AfterViewInit, Component, OnInit } from '@angular/core';
import{IntersectionObserverService} from "../../services/intersection-observer.service"


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements AfterViewInit {

  constructor(private observerS: IntersectionObserverService) { }

  ngAfterViewInit(): void {
    const $form = document.querySelector(".form")
    this.observerS.setobs($form,"Contact")
  }

}
