import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile = false;
  constructor() {
  }

  ngOnInit(): void {
    if (window.screen.width < 700) { // 768px portrait
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
