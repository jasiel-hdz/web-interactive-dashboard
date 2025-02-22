import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OtsService } from './core/services/Ots.service';
import { ViewersService } from './core/services/viewers.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet],
})
export class AppComponent {
    /**
     * Constructor
     */
    constructor(
        private otsService: OtsService,
        private ViewersService: ViewersService,
    ) {
        this.getData();
    }

    async getData() {
        try {
          await this.otsService.initOTS();
          await this.ViewersService.initViewers();
        } catch (error) {
          console.error('Error al obtener OTS:', error);
        }
      }
}
