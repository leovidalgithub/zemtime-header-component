import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ia-comp-header-light',
  templateUrl: './ia-comp-header.component.html',
  styleUrls: ['./ia-comp-header.component.scss']
})
export class IaCompHeaderComponentLight implements OnInit {

  @Input() compHeaderSectionData: object;
  @Input() compHeaderActionsShow: object;
  @Input() compHeaderButtonsActions: Array<object>;

  constructor() { }

  ngOnInit() {
  }

}


// ---------------------------------------------------------------------------    HEADER DATA
      // $scope.sectionData = {
      //   title:                 '',
      //   titleClass:            '',
      //   notificationShow:      false,
      //   notificationCondition: '',
      //   notificationResult:    '',
      //   span:                  '',
      //   spanShow:              false
      // };
      //
      // $scope.actions = {
      //   showActions: false
      // }
      //
      // $scope.buttons = [{
      //   text:  '',
      //   class: '',
      //   title: false,
      //   hide:  false,
      //   click: function(),
      //   clickParameters: '',
      //   disabled: false
      // }];
// ---------------------------------------------------------------------------
