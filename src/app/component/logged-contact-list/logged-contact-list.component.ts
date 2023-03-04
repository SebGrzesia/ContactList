import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-logged-contact-list',
  templateUrl: './logged-contact-list.component.html',
  styleUrls: ['./logged-contact-list.component.css']
})
export class LoggedContactListComponent {


  constructor(private dialog: MatDialog){

  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%' 
    });
  }
}
