import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'ft-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  collection: string;
  @Input()
  path: string;
  @Input()
  size: string;

  constructor(
    @Inject('FactorCommonConfiguration') private configuration
  ) { }

  ngOnInit() {
    if (!this.collection) {
      if (this.configuration.icon && this.configuration.icon.collection) {
        this.collection = this.configuration.icon.collection;
      } else {
        this.collection = 'icons';
      }
    }
    if (!this.path) {
      if (this.configuration.icon && this.configuration.icon.path) {
        this.path = this.configuration.icon.path;
      } else {
        this.path = 'assets';
      }
    }
  }
}
