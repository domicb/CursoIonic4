import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expandable-content',
  templateUrl: './expandable-content.component.html',
  styleUrls: ['./expandable-content.component.scss'],
})
export class ExpandableContentComponent {

  @Input() title: string;

  @Output() change = new EventEmitter<boolean>();

  private isExpanded = false;

  constructor() {

  }

  public togggleExpand(): void {

    this.isExpanded = !this.isExpanded;

    this.change.emit(this.isExpanded);
  }
}
