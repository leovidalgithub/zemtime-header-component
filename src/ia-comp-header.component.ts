import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ia-comp-header',
  templateUrl: './ia-comp-header.component.html',
  styleUrls: ['./ia-comp-header.component.scss']
})
export class IaCompHeaderComponent implements OnInit {

  @Input() compHeaderSectionData: object;
  @Input() compHeaderActionsShow: object;
  @Input() compHeaderButtonsActions: Array<object>;

  constructor() { }

  ngOnInit() {
  }

}