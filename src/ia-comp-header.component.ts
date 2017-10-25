import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ia-comp-header',
  templateUrl: './ia-comp-header.component.html',
  styleUrls: ['./ia-comp-header.component.scss']
})
export class IaCompHeaderComponent implements OnInit {

  @Input() compHeaderSectionData: Object;
  @Input() compHeaderActionsShow: Object;
  @Input() compHeaderButtonsActions: Array<Object>;

  constructor() { }

  ngOnInit() {
  }

}
