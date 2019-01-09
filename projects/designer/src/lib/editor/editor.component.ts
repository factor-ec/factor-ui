import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'ft-designer-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  host: { class: 'd-flex' }
})
export class EditorComponent implements OnInit {
  components: any[] = [
    {
      label: 'Box',
      library: 'html',
      group: 'layout',
      component: {
        type: 'box'
      }
    },
    {
      label: 'Container',
      library: 'bootstrap',
      group: 'layout',
      component: {
        type: 'box',
        properties: {
          class: 'container'
        }
      }
    },
    {
      label: 'Row',
      library: 'bootstrap',
      group: 'layout',
      component: {
        type: 'box',
        properties: {
          class: 'row'
        },
        children: [
          {
            type: 'box',
            properties: {
              class: 'col'
            }
          },
          {
            type: 'box',
            properties: {
              class: 'col'
            }
          }
        ]
      }
    },
    {
      label: 'Alert',
      library: 'bootstrap',
      group: 'components',
      component: {
        type: 'box',
        properties: {
          class: 'alert alert-primary'
        }
      }
    },
    {
      label: 'Badge',
      library: 'bootstrap',
      group: 'components',
      component: {
        type: 'text',
        properties: {
          class: 'badge badge-secondary'
        }
      }
    },
    {
      label: 'Button group',
      library: 'bootstrap',
      group: 'components',
      component: {
        type: 'box',
        properties: {
          class: 'btn-group'
        },
        children: [
          {
            type: 'button'
          },
          {
            type: 'button'
          }
        ]
      }
    },
    {
      label: 'Card',
      library: 'bootstrap',
      group: 'components',
      component: {
        type: 'box',
        properties: {
          class: 'card'
        },
        children: [
          {
            type: 'box',
            properties: {
              class: 'card-header'
            }
          },
          {
            type: 'box',
            properties: {
              class: 'card-body'
            }
          }
        ]
      }
    },
    {
      label: 'Form group',
      library: 'bootstrap',
      group: 'forms',
      component: {
        type: 'box',
        properties: {
          class: 'form-group'
        },
        children: [
          {
            type: 'text',
            properties: {
              class: 'd-block'
            }
          },
          {
            type: 'input'
          }
        ]
      }
    },
    {
      label: 'Jumbotron',
      library: 'bootstrap',
      group: 'components',
      component: {
        type: 'box',
        properties: {
          class: 'jumbotron'
        },
        children: [
          {
            type: 'heading',
            value: 'Hello, world!',
            properties: {
              class: 'display-4'
            }
          },
          {
            type: 'paragraph',
            value: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
            properties: {
              class: 'lead'
            }
          }
        ]
      }
    },
    {
      label: 'List group',
      library: 'bootstrap',
      group: 'navigation',
      component: {
        type: 'box',
        properties: {
          class: 'list-group'
        },
        children: [
          {
            type: 'box',
            properties: {
              class: 'list-group-item'
            }
          },
          {
            type: 'box',
            properties: {
              class: 'list-group-item'
            }
          },
          {
            type: 'box',
            properties: {
              class: 'list-group-item'
            }
          }
        ]
      }
    },
    {
      label: 'Nav',
      library: 'bootstrap',
      group: 'navigation',
      component: {
        type: 'nav',
        properties: {
          class: 'nav-tabs'
        },
        children: [
          {
            type: 'navItem',
            value: 'Tab 1',
            properties: {
              class: 'active'
            }
          },
          {
            type: 'navItem',
            value: 'Tab 2'
          },
          {
            type: 'navItem',
            value: 'Tab 3'
          }
        ]
      }
    },
    {
      label: 'Button',
      library: 'html',
      group: 'forms',
      component: {
        type: 'button'
      }
    },
    {
      label: 'Link',
      library: 'html',
      group: 'navigation',
      component: {
        type: 'link'
      }
    },
    {
      label: 'Icon',
      library: 'factor-ui',
      group: 'components',
      component: {
        type: 'icon'
      }
    },
    {
      icon: 'media-image',
      label: 'Image',
      library: 'html',
      group: 'components',
      component: {
        type: 'image'
      }
    },
    {
      label: 'Text',
      library: 'html',
      group: 'components',
      component: {
        type: 'text'
      }
    },
    {
      label: 'Heading',
      library: 'html',
      group: 'components',
      component: {
        type: 'heading'
      }
    },
    {
      label: 'Paragraph',
      library: 'html',
      group: 'components',
      component: {
        type: 'paragraph'
      }
    },
    {
      label: 'Input',
      library: 'html',
      group: 'forms',
      component: {
        type: 'input'
      }
    }
  ];
  currentComponent: any;
  dragging: boolean;
  showGuides: boolean;

  private _component: any;
  get component(): any {
    return this._component;
  }
  @Input()
  set component(value: any) {
    this._component = this.mapComponent(value);
  }
  @ViewChild('button')
  button: TemplateRef<any>;
  @ViewChild('box')
  box: TemplateRef<any>;
  @ViewChild('icon')
  icon: TemplateRef<any>;
  @ViewChild('image')
  image: TemplateRef<any>;
  @ViewChild('input')
  input: TemplateRef<any>;
  @ViewChild('link')
  link: TemplateRef<any>;
  @ViewChild('nav')
  nav: TemplateRef<any>;
  @ViewChild('text')
  text: TemplateRef<any>;
  @ViewChild('heading')
  heading: TemplateRef<any>;
  @ViewChild('paragraph')
  paragraph: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    this.component = this.mapComponent({ type: 'box', properties: { class: 'container' } });
  }
  add(option, parent) {
    let newComponent: any = JSON.parse(JSON.stringify(option.component));
    newComponent.properties = newComponent.properties || {};
    if (newComponent.type == 'button') {
      const label = prompt('Type a label');
      if (label) {
        newComponent.children = [{ type: 'text', value: label }];
      }
    }
    if (newComponent.type == 'icon') {
      newComponent.properties.name = prompt('Type an icon name');
    }
    if (newComponent.type == 'image') {
      newComponent.properties.src = prompt('Type a url');
    }
    if (['link', 'text', 'heading', 'paragraph'].indexOf(newComponent.type)>=0) {
      newComponent.value = prompt('Type text');
    }
    this.currentComponent = this.mapComponent(newComponent);
    parent.children = parent.children || [];
    parent.children.push(this.currentComponent);
  }
  remove(component) {

  }
  select(component, event) {
    event.stopPropagation();
    this.currentComponent = component;
  }
  mapComponent(component): any {
    if (component) {
      component.template = this[component.type];
      component.properties = component.properties || {};
      component.children = component.children || [];
      component.children.forEach((child) => {
        this.mapComponent(child);
      });
    }
    return component;
  }

}
