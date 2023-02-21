import {ChangeDetectionStrategy, Component, DoCheck} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftComponent implements DoCheck{
  count: number = 0;
  ngDoCheck(): void {
    console.info('LEFT CHANGES');
    this.count++;
  }

  changes() {
    console.info('LEFT CLICK CHANGES');
  }
}
