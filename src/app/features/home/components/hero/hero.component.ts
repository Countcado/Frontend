import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  stat1 = '0+';
  stat2 = '0,00\u00A0€';
  stat3 = '0,0\u2009★';
  private raf = 0;

  ngOnInit() {
    const start = performance.now();
    const dur = 1500;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const ease = 1 - Math.pow(1 - p, 3);
      this.stat1 = Math.round(12000 * ease).toLocaleString('es-ES') + '+';
      this.stat2 = (1.90 * ease).toFixed(2).replace('.', ',') + '\u00A0€';
      this.stat3 = (4.9 * ease).toFixed(1).replace('.', ',') + '\u2009★';
      if (p < 1) this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  ngOnDestroy() {
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}
