import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {
  innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = window.innerWidth;
  }
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

}
