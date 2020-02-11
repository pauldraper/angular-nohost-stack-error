import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app';

if (location.search === '?prod') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
