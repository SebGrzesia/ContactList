import { DialogComponent } from './component/dialog/dialog.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contactList';

  constructor(private dialog: MatDialog){

  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%' 
    });
  }

}
