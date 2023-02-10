import { CalculateOpahUsecase } from '../../../core/usecases/opah/calculate-opah.usecase';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OpahModel } from 'src/app/core/models/opah.model';

@Component({
  templateUrl: 'orcamento.component.html',
  styleUrls: ['./orcamento.component.scss'],
})
export class OrcamentoComponent  implements OnInit{

  @ViewChild('resultDiv') resultDiv!: ElementRef;

  alticciResult?: OpahModel;

  getNewHeight() {
    this.resultDiv.nativeElement.style.height = 'auto';
    this.resultDiv.nativeElement.style.height = `${this.resultDiv.nativeElement.scrollHeight}px`;
  }
  constructor(private calculateOpah: CalculateOpahUsecase) {}
  ngOnInit(): void {
  }
}
