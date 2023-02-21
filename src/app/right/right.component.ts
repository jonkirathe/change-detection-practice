import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightComponent implements DoCheck{
  count: number = 0;
  constructor(private cd: ChangeDetectorRef) {
  }
  ngDoCheck(): void {
    console.info('RIGHT CHANGES');
    this.count++;
  }

  refresh(){
    this.cd.detectChanges();
  }
}
