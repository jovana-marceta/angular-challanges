import { Component } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class TogglerComponent {
  isOn: boolean = false;

  toggleMe() {
    this.isOn = !this.isOn;
  }
}
