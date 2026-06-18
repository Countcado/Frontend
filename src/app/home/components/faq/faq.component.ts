import { Component } from '@angular/core';

interface FaqItem {
  q: string;
  a: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs: FaqItem[] = [
    {
      q: '¿De dónde salen los datos nutricionales?',
      a: 'De USDA FoodData Central para los macronutrientes y de Open Food Facts para códigos de barras, nutriscore e imágenes de productos a nivel nacional.',
      open: false
    },
    {
      q: '¿Es de verdad gratis?',
      a: 'Sí. El plan Gratis incluye buscador, cálculo de macros y escáner sin coste. El plan Plus añade extras opcionales, pero nunca te bloqueamos lo esencial.',
      open: false
    },
    {
      q: '¿Tengo que pesar todo lo que como?',
      a: 'No. Puedes usar porciones estándar o cantidades aproximadas. La idea es darte claridad, no convertir la comida en una tarea.',
      open: false
    },
    {
      q: '¿Funciona para mis alergias o dieta?',
      a: 'Al registrarte rellenas un perfil con alérgenos, preferencias y objetivos, y CountCado adapta sus recomendaciones a partir de ahí.',
      open: false
    }
  ];

  toggle(index: number) {
    const wasOpen = this.faqs[index].open;
    this.faqs.forEach(f => f.open = false);
    this.faqs[index].open = !wasOpen;
  }
}
