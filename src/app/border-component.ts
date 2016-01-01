import {Component} from 'angular2/core';

@Component({
  selector: 'my-fancy-border',
  template: `
      <style>
        div {
            border: 5px solid #EDF3F3;
            border-radius: 1em;
            text-align: center;
        }
        span {
            font-size: 10px;
            display: inline-block;
        }
        .inner {
            padding: 5px;
            margin: 5px;
        }
        .outer {
            width: 400px;
        }
      </style>
      <div class="outer">
        <span>-- {{title}} --</span>
        <div class="inner">
            <ng-content></ng-content>
        </div>
        <span>-- {{title}} --</span>
      </div>`,
  inputs: ['title: title']
})
export class BorderComponent {
  title: string;
}
