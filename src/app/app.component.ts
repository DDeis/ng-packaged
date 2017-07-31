import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BarService } from '@my/lib';

@Component({
  selector: 'app-root',
  template: `
<my-foo></my-foo>
<hr>
<marquee>{{ value$ | async }}</marquee>
<pre>{{ identity | json }}</pre>
<pre>{{ serialized | json }}</pre>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get value$(): Observable<string> {
    return this.bar.value;
  }

  get identity() {
    return this.bar.lodashIdentity({toto: 'tutu'});
  }

  get serialized() {
    return this.bar.ctSerialize({ foo: 'bar' });
  }

  constructor(private bar: BarService) {}

}
