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
  currentTabId: number=0;
  
  constructor(private route:Router,private activatedroute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    debugger
    // this.activatedroute.queryParams.subscribe(params => {
      var value=this.activatedroute.snapshot.params['value']
      let tab = ["Privacy Policy", "Terms of Use", "cancellation and refund policy","Reschedule Policy"].indexOf(value);
      this.currentTabId = tab
      // this.tabset.tabs[tab].active = true;
    // });
  }

}
