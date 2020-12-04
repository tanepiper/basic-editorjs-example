import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxEditorJSComponentModule } from '@tinynodes/ngx-editorjs';
import { NgxEditorjsPluginsModule } from '@tinynodes/ngx-editorjs-plugins';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxEditorJSComponentModule, NgxEditorjsPluginsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
