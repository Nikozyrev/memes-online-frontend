import { Injectable } from '@angular/core';
import { IMeme } from '../../models/meme.model';

@Injectable({
  providedIn: 'root',
})
export class MemesService {
  private mockMemes: IMeme[] = [
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyr8x4pkGlqDeU1n_rn4NAvZ8tLUm31oZpgMEF18Rp0g&s',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyr8x4pkGlqDeU1n_rn4NAvZ8tLUm31oZpgMEF18Rp0g&s',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyr8x4pkGlqDeU1n_rn4NAvZ8tLUm31oZpgMEF18Rp0g&s',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyr8x4pkGlqDeU1n_rn4NAvZ8tLUm31oZpgMEF18Rp0g&s',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyr8x4pkGlqDeU1n_rn4NAvZ8tLUm31oZpgMEF18Rp0g&s',
    },
  ];

  constructor() {}

  getMemes() {
    return this.mockMemes;
  }
}
