import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-on-api-response',
  templateUrl: './on-api-response.component.html',
  styleUrls: ['./on-api-response.component.css']
})
export class OnApiResponseComponent implements OnInit {

  //TODO: css
  //TODO: ottenere piu' informazioni sul film tramite un altra chiamata api

  @Input() fromParent:any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    // console.log(this.fromParent);
    /* Output:
     {prop1: "Some Data", prop2: "From Parent Component", prop3: "This Can be anything"}
    */
  }

  closeModal(sendData:any) {
    this.activeModal.close(sendData);
  }

}
 