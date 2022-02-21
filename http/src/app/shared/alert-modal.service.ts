import { ThisReceiver } from '@angular/compiler';
import { Injectable, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {
  private modalDeleteRef!: BsModalRef;

  constructor(private modalService: BsModalService) { }

   private showAlert(message: string, type: AlertTypes, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if(dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER, 1000);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, 1000);
  }

  showConfirmDelete(template: TemplateRef<any>) {
    this.modalDeleteRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirmDelete() {
    this.modalDeleteRef.hide();
  }
  cancelDelete() {
    this.modalDeleteRef.hide();
  }

}
