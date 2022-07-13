import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsetComponent } from 'ngx-tabset';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {
  @ViewChild('tabSet') tabset: TabsetComponent;
  
  constructor(private route:Router,private activatedroute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    debugger
    // this.activatedroute.queryParams.subscribe(params => {
      var value=this.activatedroute.snapshot.params['value']
      let tab = ["PrivacyPolicy", "TermsofUse", "RefundPolicy","ReschedulePolicy"].indexOf(value);
      this.tabset.tabs[tab > -1 ? tab : 0].active = true;
    // });
  }

}
