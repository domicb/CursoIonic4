import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {

  @Input() upVotes = 0;

  @Input() downVotes = 0;

  @Output() vote = new EventEmitter<boolean>();

  public get votesAverage(): number {

    if (this.upVotes + this.downVotes) {
      return this.upVotes * 10 / (this.upVotes + this.downVotes);
    } else {
      return 0;
    }
  }

  constructor() {

  }

  public upVote(): void {

    this.upVotes++;
    this.vote.emit(true);
  }


  public downVote(): void {

    this.downVotes++;
    this.vote.emit(false);
  }
}
