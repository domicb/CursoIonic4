import { Component } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.page.html',
  styleUrls: ['./sandbox.page.scss'],
})
export class SandboxPage {

  public numExpanded = 0;

  public upVotesSum = 4;

  public downVotesSum = 3;

  constructor() {

  }

  public expandableContentChanged(isExpanded: boolean): void {

    this.numExpanded += isExpanded ? 1 : -1;
  }

  public voteSubmitted(isPositive: boolean): void {

    if (isPositive) {
      this.upVotesSum++;
    } else {
      this.downVotesSum++;
    }
  }
}
