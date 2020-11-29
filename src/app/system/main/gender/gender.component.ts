import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-girl',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
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
