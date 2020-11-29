import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(event, path): void {
    this.router.navigate([path]).then(r => console.log('e'));
  }

}
