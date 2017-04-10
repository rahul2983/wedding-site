import { Component } from  '@angular/core';

import { NavigationComponent } from './navigation.component';
import { PageFooterComponent } from './page-footer.component';

@Component({
  selector: 'page-content',
  template: `
    <navigation></navigation>
    <page-footer></page-footer>
  `
})
export class PageContentComponent {}
