import {ChangeDetectionStrategy, Component, DoCheck} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements DoCheck {
  count: number = 0;
  ngDoCheck(): void {
    console.info('HEADER CHANGES');
    this.count++;
  }

}
