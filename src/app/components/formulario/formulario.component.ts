import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  //#region 'Variables'
  public dteInicio: NgbDateStruct;
  public dteFin: NgbDateStruct;
  //#endregion 'Variables'

  //#region 'Angular Life Cycle'
  constructor() {}

  ngOnInit(): void {}
  //#endregion 'Angular Life Cycle'

  //#region 'Load'
  //#endregion 'Load'

  //#region 'General Methods'
  //#endregion 'General Methods'

  //#region 'Validations'
  //#endregion 'Validations'
}
