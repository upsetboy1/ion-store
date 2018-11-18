import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LoadingProvider {
  load: any;

  constructor(private loader: LoadingController, private translate: TranslateService) {}

  present() {
    this.translate.get(['WAIT']).subscribe( x=> {
      this.load = this.loader.create({
        spinner: 'dots'
      });
    });

    this.load.present(); 
  }

  dismiss(){
    this.load.dismiss();
  }
}
