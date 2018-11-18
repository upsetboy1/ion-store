import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account-help',
  templateUrl: 'help.html',
})
export class AccountHelpPage {
  faqs: any[] = [
    {id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga'},
    {id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga'},
    {id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga'},
    {id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga'}
  ];

  constructor() {
  
  }

  toggleSection(i) {
    this.faqs[i].open = !this.faqs[i].open;
  }

  toggleItem(i, j) {
    this.faqs[i].child[j].open = !this.faqs[i].child[j].open;
  }

}
