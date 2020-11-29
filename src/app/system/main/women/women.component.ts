import {Component, HostListener, OnInit} from '@angular/core';

export interface PhotoItem {
  image: string;
}

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
  innerWidth: any;
  photoItems: PhotoItem[] = [
    {image: '../assets/girls.jpg'},
    {image: '../assets/delicious.JPG'},
    {image: '../assets/an.jpg'},
    {image: '../assets/medals.jpg'},
    {image: '../assets/group.jpg'},
    {image: '../assets/child.JPG'},
    {image: '../assets/box.JPG'},
    {image: '../assets/jump.JPG'},
    {image: '../assets/filles.JPG'},
    {image: '../assets/kitty.jpg'}
  ];
  gallery;
  items;
  len;
  current = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = window.innerWidth;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.len = this.photoItems.length;
  }

  onChangeItem(event): any {
    if (this.current === 1 && event.target.id === 'prev') {
      this.current = -(this.len);
    }
    if (this.current < -(this.len - 1) && event.target.id === 'next') {
      this.current = 0;
    }
    if (event.target.id === 'next') {
      this.photoItems.push(this.photoItems[0]);
      this.photoItems.shift();
    }
    if (event.target.id === 'prev') {
      this.photoItems.unshift(this.photoItems[this.len - 1]);
      this.photoItems.pop();
    }
    this.gallery = document.getElementById('gallery');
    this.gallery.style.left = 220 * this.current + 'px';
    return this.current;
  }

}
