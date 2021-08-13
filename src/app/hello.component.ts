import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h2>{{ title }}!</h2>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() title: string;
}
