import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {MatButtonModule,
      MatListModule} from '@angular/material';
import {FooterComponent} from "../footer/footer.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MatButtonModule,
        MatListModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
    ],
    exports: [
        FooterComponent
    ],
    declarations: [HomePage, FooterComponent]
})
export class HomePageModule {}
