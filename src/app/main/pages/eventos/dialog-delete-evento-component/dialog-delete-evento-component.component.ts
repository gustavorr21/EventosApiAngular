import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-delete-evento-component',
  templateUrl: './dialog-delete-evento-component.component.html',
  styleUrls: ['./dialog-delete-evento-component.component.scss']
})
export class DialogDeleteEventoComponentComponent {

  title: string = "Atenção"
  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(
      @Inject(MAT_DIALOG_DATA) private data: any,
      private dialogRef: MatDialogRef<DialogDeleteEventoComponentComponent>) {
      if (data) {
          this.message = data.message || this.message;
          this.title = data.title || this.title;
          if (data.buttonText) {
              this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
              this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
          }
      }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
}
}
