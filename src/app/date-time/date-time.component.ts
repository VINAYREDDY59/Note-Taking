import { Component, Input } from '@angular/core';

import { setDate } from '../helper/date-time.helper';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: [ './date-time.component.scss' ],
})
export class DateTimeComponent {
  inputDateTime: string;

  @Input() set dateTime(newDateTime: string) {
    this.inputDateTime = setDate(newDateTime, true);
  }
}


