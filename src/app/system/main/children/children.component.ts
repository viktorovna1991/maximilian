import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
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
