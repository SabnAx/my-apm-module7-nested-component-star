import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> =
                         new EventEmitter<string>();

  ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`Estoy contento. The rating ${this.rating} was clicked!`);
    }
}
