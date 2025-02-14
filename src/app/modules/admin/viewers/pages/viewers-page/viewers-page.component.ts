import { Component, OnInit } from '@angular/core';
import { CardViewersCountComponent } from '../../components/card-viewers-count/card-viewers-count.component';

@Component({
  selector: 'app-viewers-page',
  standalone: true,
  templateUrl: './viewers-page.component.html',
  styleUrls: ['./viewers-page.component.css'],
  imports: [
    CardViewersCountComponent
  ] 
})
export class ViewersPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
