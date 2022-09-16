import { Component, Input, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  @Input() message: string
  @Input() type: string = 'sucess'

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit() {

  }
  onClose(){
    this.modal.hide()
  }

}
