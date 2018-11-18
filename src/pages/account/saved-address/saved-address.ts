import { Component } from '@angular/core';
import { IonicPage, ItemSliding, AlertController, ViewController, NavParams, ModalController } from 'ionic-angular';
import { AddressProvider, ToastProvider, OrderProvider } from '../../../providers/providers';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-saved-address',
  templateUrl: 'saved-address.html',
})
export class SavedAddressPage {

  action: number;
  title: any;

  constructor(private toast: ToastProvider, private alertCtrl: AlertController, private translate: TranslateService, private order: OrderProvider, private viewCtrl: ViewController, private navParams: NavParams, private address: AddressProvider, public modalCtrl: ModalController) {
    this.action = this.navParams.data.params ? this.navParams.data.params.action : 0;
    
    this.translate.get(['SELECT', 'ADDRESS', 'SAVED_ADDRESS']).subscribe( x=> {
      this.title = this.action == 3 || this.action == 4 ? x.SELECT+' '+x.ADDRESS : x.SAVED_ADDRESS;
    });
  }

  editAddress(params, index, action){
    console.log(action);
    if(action==3){
      this.order.setBilling(params);
      this.dismiss();
    }else if(action==4){
      this.order.setShipping(params);
      this.dismiss();
    }else{
      params.action = 2;
      let modal = this.modalCtrl.create('AddAddressPage', {params: params, index: index});
      modal.present();
    }
  }

  remove(index: number, item: ItemSliding) {
    this.translate.get(['REMOVE_TTL', 'REMOVE_MSG', 'CANCEL', 'YES']).subscribe( x=> {
      let confirm = this.alertCtrl.create({
        title: x.REMOVE_TTL,
        message: x.REMOVE_MSG,
        buttons: [{
            text: x.CANCEL
          },{
            text: x.YES,
            handler: () => {
              this.confirmRemove(index);
              item.close();
            }
          }]
      });
      confirm.present();
    });
  }

  confirmRemove(index: number){
    this.address.remove(index);
    this.translate.get('REMOVE_FROM_ADDRESS').subscribe( x=> {
      this.toast.show(x);
    });
  }

  setPrimary(index: number, item: ItemSliding) {
    this.address.setPrimary(index);
    item.close();
    this.translate.get('PRIMARY_HAS_SET').subscribe( x=> {
      this.toast.showWithClose(x);
    });
  }

  dismiss() {
		this.viewCtrl.dismiss();
  }
  
  addNew(){
    let params = { action: 1}
    let modal = this.modalCtrl.create('AddAddressPage', {params: params});
    modal.present();
  }

}
