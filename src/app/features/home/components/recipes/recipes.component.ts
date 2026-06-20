import { Component } from '@angular/core';

interface Recipe {
  name: string;
  desc: string;
  time: string;
  cost: string;
  tag: string;
  tone: string;
}

@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
  activeFilter = 'Todas';
  categories = ['Todas', 'Desayuno', 'Almuerzo', 'Cena'];

  allRecipes: Recipe[] = [
    { name: 'Tostada de aguacate', desc: 'Pan de masa madre, aguacate, tomate cherry y huevo poché.', time: '10 min', cost: '1,80 €', tag: 'Desayuno', tone: '#7b904b' },
    { name: 'Bowl de quinoa', desc: 'Quinoa, garbanzos, aguacate y aliño de limón fresco.', time: '20 min', cost: '2,40 €', tag: 'Almuerzo', tone: '#58641d' },
    { name: 'Crema de calabaza', desc: 'Calabaza asada, jengibre y un toque de leche de coco.', time: '30 min', cost: '1,30 €', tag: 'Cena', tone: '#c0673a' },
    { name: 'Tacos de lenteja', desc: 'Lentejas especiadas, maíz dulce y guacamole casero.', time: '25 min', cost: '2,10 €', tag: 'Cena', tone: '#7b904b' },
    { name: 'Ensalada templada', desc: 'Espinacas, boniato asado y semillas tostadas.', time: '15 min', cost: '1,95 €', tag: 'Almuerzo', tone: '#58641d' },
    { name: 'Pasta al pesto verde', desc: 'Pesto de albahaca y rúcula con piñones tostados.', time: '18 min', cost: '2,30 €', tag: 'Cena', tone: '#c0673a' }
  ];

  get filteredRecipes(): Recipe[] {
    return this.activeFilter === 'Todas'
      ? this.allRecipes
      : this.allRecipes.filter(r => r.tag === this.activeFilter);
  }

  setFilter(cat: string) {
    this.activeFilter = cat;
  }
}
