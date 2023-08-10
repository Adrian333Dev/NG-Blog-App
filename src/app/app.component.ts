import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BootstrapModule } from './shared/modules/bootstrap.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, BootstrapModule],
})
export class AppComponent {}
