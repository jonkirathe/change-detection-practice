import {ChangeDetectionStrategy, Component, DoCheck} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements DoCheck{
  count: number = 0;
  ngDoCheck(): void {
    console.info('FOOTER CHANGES');
    this.count++;
  }
}
