import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
