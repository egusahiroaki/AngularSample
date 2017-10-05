import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]>{
    // 引数の値で完了されたPromiseオブジェクトを返す。
    return Promise.resolve(HEROES)
  }
}