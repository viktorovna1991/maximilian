import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {
  innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = window.innerWidth;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  onClick(event, path): void {
    this.router.navigate([path]).then(r => console.log('e'));
  }

}
