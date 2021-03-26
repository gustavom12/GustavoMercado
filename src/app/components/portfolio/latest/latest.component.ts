import { AfterViewInit, Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination ,Autoplay} from 'swiper/core';
import Swiper from 'swiper';
SwiperCore.use([Navigation, Pagination,Autoplay]);
@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.sass']
})
export class LatestComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 4000,
      },
    });
  }

}
