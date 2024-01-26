import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'coverage-problem-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alpha';
  value = 42;

  /**
   * Enforce more line coverage in app alpha than in app beta
   * @param by The increment to use
   */
  public increment(by: number): number {
    return this.value += by;
  }
}
