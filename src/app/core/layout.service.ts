import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  menuExpanded: boolean;

  constructor() { }
  toggleMenu() {
    this.menuExpanded = !this.menuExpanded;
  }
}
