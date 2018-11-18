import { COMPONENTS, PIPES, DIRECTIVES } from './app.imports';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule} from '@ngx-translate/core';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    PIPES,
    DIRECTIVES,
    COMPONENTS
  ],
  imports: [
    IonicModule,
    IonicImageViewerModule
  ],
  exports: [
    PIPES,
    COMPONENTS,
    TranslateModule
  ]
})

export class SharedModule { }