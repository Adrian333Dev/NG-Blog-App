import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const modules = [NgbModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class BootstrapModule {}
