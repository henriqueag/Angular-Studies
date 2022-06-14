import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentPageComponent } from './pages/content/content-page.component';
import { StartComponent } from './components/start-page/start-page.component';

@NgModule({
  declarations: [
        ContentPageComponent,
        StartComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
