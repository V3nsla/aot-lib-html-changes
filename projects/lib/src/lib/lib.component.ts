import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib',
  template: `
    <p>
      lib works 4000!
    </p>
  `,
  styles: []
})
export class LibComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
