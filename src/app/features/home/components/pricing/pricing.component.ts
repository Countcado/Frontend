import { Component } from '@angular/core';

interface Plan {
  name: string;
  tagline: string;
  priceM: string;
  priceA: string;
  featured: boolean;
  cta: string;
  features: string[];
}

@Component({
  selector: 'app-pricing',
  standalone: false,
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  billing: 'mensual' | 'anual' = 'mensual';

  plans: Plan[] = [
    {
      name: 'Semilla', tagline: 'Para empezar a cocinar y ahorrar.', priceM: '0\u00A0€', priceA: '0\u00A0€',
      featured: false, cta: 'Crear cuenta',
      features: ['Hasta 20 recetas guardadas', 'Coste por ración', '1 presupuesto mensual', 'Acceso a la comunidad']
    },
    {
      name: 'Cosecha', tagline: 'Para quien cocina cada semana.', priceM: '4,99\u00A0€', priceA: '3,99\u00A0€',
      featured: true, cta: 'Empezar ahora',
      features: ['Recetas ilimitadas', 'Presupuestos semanales y mensuales', 'Lista de la compra automática', 'Estadísticas de ahorro', 'Publica tus recetas']
    },
    {
      name: 'Huerto', tagline: 'Para familias y foodies serios.', priceM: '9,99\u00A0€', priceA: '7,99\u00A0€',
      featured: false, cta: 'Probar 14 días',
      features: ['Todo lo de Cosecha', 'Hasta 5 perfiles', 'Planificador de menús', 'Exporta tus gastos', 'Soporte prioritario']
    }
  ];

  getPrice(plan: Plan): string {
    return this.billing === 'mensual' ? plan.priceM : plan.priceA;
  }

  getPeriod(plan: Plan): string {
    if (plan.priceM === '0\u00A0€') return 'gratis';
    return this.billing === 'mensual' ? '/mes' : '/mes · anual';
  }

  trackByName(_: number, plan: Plan): string {
    return plan.name;
  }
}
