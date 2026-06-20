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
    { q: '¿Cómo calcula Countcado el coste de cada receta?', a: 'Usamos precios medios de supermercado por ingrediente y los ajustamos a las cantidades de la receta. Puedes editar los precios para que coincidan con tu tienda habitual.', open: true },
    { q: '¿Necesito conectar mi banco?', a: 'No. Countcado funciona con presupuestos que tú defines. Si quieres, registras tus compras a mano en segundos; nunca pedimos acceso a tu cuenta bancaria.', open: false },
    { q: '¿Puedo usarlo gratis para siempre?', a: 'Sí. El plan Semilla es gratuito e incluye lo esencial para cocinar y controlar un presupuesto. Mejoras de plan solo cuando lo necesites.', open: false },
    { q: '¿Las recetas son aptas para dietas específicas?', a: 'Puedes filtrar por vegetariano, vegano, sin gluten y más. La comunidad añade recetas nuevas cada día con sus etiquetas correspondientes.', open: false },
    { q: '¿Funciona en el móvil?', a: 'Countcado es totalmente responsive y funciona en el navegador de tu móvil. Una app nativa está en camino.', open: false },
    { q: '¿Puedo cancelar cuando quiera?', a: 'Claro. No hay permanencia: cancelas con un clic y conservas el acceso hasta el final del periodo pagado.', open: false }
  ];

  toggle(i: number) {
    const wasOpen = this.faqs[i].open;
    this.faqs.forEach(f => f.open = false);
    this.faqs[i].open = !wasOpen;
  }
}
