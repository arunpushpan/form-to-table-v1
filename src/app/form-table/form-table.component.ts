import { Component } from '@angular/core';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent {
 name:string=''
 email:string=''
 mobile:string=''
 address:string=''

showTable:boolean=false

 toggleShowTable(): void {
  this.showTable = !this.showTable;
}

}
