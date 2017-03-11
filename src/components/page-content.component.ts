import { Component } from  '@angular/core';

import { NavigationComponent } from './navigation.component';
import { PageHeaderComponent } from './page-header.component';
import { PageBodyComponent } from './page-body.component';
import { PageFooterComponent } from './page-footer.component';

@Component({
  selector: 'page-content',
  template: `
    <navigation></navigation>
    <page-footer></page-footer>
  `
})
export class PageContentComponent {}
