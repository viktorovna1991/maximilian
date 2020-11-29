import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.scss']
})
export class QualitiesComponent implements OnInit {
  innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = window.innerWidth;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

}
