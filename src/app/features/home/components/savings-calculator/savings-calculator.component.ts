import { Component } from '@angular/core';

@Component({
  selector: 'app-savings-calculator',
  standalone: false,
  templateUrl: './savings-calculator.component.html',
  styleUrl: './savings-calculator.component.scss'
})
export class SavingsCalculatorComponent {
  spend = 120;

  get cook(): number { return this.spend * 0.4; }
  get savingYear(): number { return (this.spend - this.cook) * 12; }
  get barPct(): number { return Math.round(((this.spend - this.cook) / this.spend) * 100); }
  get spendLabel(): string { return Math.round(this.spend).toLocaleString('es-ES') + '\u00A0€'; }
  get cookLabel(): string { return Math.round(this.cook).toLocaleString('es-ES') + '\u00A0€'; }
  get savingYearLabel(): string { return Math.round(this.savingYear).toLocaleString('es-ES') + '\u00A0€'; }

  onRangeChange(event: Event): void {
    this.spend = parseInt((event.target as HTMLInputElement).value, 10);
  }
}
