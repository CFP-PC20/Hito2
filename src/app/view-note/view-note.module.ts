import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewNotePageRoutingModule } from './view-note-routing.module';

import { ViewNotePage } from './view-note.page';

import {MatButtonModule,
        MatCardModule} from '@angular/material';
import {HomePageModule} from "../home/home.module";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ViewNotePageRoutingModule,
        MatButtonModule,
        MatCardModule,
        HomePageModule
    ],
  declarations: [ViewNotePage]
})
export class ViewNotePageModule {}
