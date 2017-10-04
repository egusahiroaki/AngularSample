import { Component, Input } from '@angular/core';
 
import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="her">
      <h2>{{her.name}} details!</h2>
      <div><label>id: </label>{{her.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="her.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  // @Inputデコレーションは、親のtemplate、ここではapp.componentの
  // <hero-detail>で定義した[]の値をそのまま使用できる
  @Input('hero') her: Hero;
}