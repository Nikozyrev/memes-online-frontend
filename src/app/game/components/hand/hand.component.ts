import { Component } from '@angular/core';
import { IMeme } from '../../models/meme.model';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss'],
})
export class HandComponent {
  memes: IMeme[] = [
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
}
