import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() user: User;
  @Output() close = new EventEmitter();
  @Input() message: string;

  constructor() {}

  onCloseModal() {
    this.close.emit();
  }


}
