import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentChild, NgModule, TemplateRef } from '@angular/core';
import { ContribNgNoHostModule } from '@angular-contrib/common';

@Component({
  selector: 'stuff',
  host: { ngNoHost: '' },
  template: `
    Example
  `,
})
export class StuffComponent {}

@Component({
  selector: 'util',
  template: `
    <ng-container *ngTemplateOutlet="content"></ng-container>
  `,
})
export class UtilComponent {
  @ContentChild(TemplateRef, { static: false })
  content: TemplateRef<{}>;
}

@Component({
  selector: 'app',
  template: `
    <util>
      <ng-template>
        <stuff></stuff>
      </ng-template>
    </util>
  `,
})
export class AppComponent {
  @ContentChild(TemplateRef, { static: false })
  content: TemplateRef<{}>;
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, StuffComponent, UtilComponent],
  imports: [BrowserModule, CommonModule, ContribNgNoHostModule],
})
export class AppModule {}
