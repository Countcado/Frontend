import { Component, OnInit, OnDestroy } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  initials: string;
  stars: string;
  text: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  tIndex = 0;
  private auto: ReturnType<typeof setInterval> | null = null;

  testimonials: Testimonial[] = [
    { name: 'Lucía Fernández', role: 'Cocina en casa', initials: 'LF', stars: '★★★★★', text: 'Por fin sé cuánto me cuesta cada plato. He bajado un 30% la compra del mes sin comer peor.' },
    { name: 'Marc Oliveras', role: 'Estudiante', initials: 'MO', stars: '★★★★★', text: 'Las recetas baratas y el presupuesto semanal me salvan cada finde. Y la interfaz es preciosa.' },
    { name: 'Sofía Reyes', role: 'Madre de dos', initials: 'SR', stars: '★★★★★', text: 'Planifico el menú, genero la lista y controlo el gasto familiar en un solo sitio. Brutal.' }
  ];

  ngOnInit() {
    this.auto = setInterval(() => {
      this.tIndex = (this.tIndex + 1) % this.testimonials.length;
    }, 5500);
  }

  ngOnDestroy() {
    if (this.auto) clearInterval(this.auto);
  }

  prev() {
    this.tIndex = (this.tIndex + this.testimonials.length - 1) % this.testimonials.length;
  }

  next() {
    this.tIndex = (this.tIndex + 1) % this.testimonials.length;
  }

  goTo(i: number) {
    this.tIndex = i;
  }

  get trackTransform(): string {
    return 'translateX(-' + (this.tIndex * 100) + '%)';
  }
}
