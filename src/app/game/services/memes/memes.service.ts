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
        'https://www.theinterrobang.ca/images/interrobang/030819/B8QC6DAZ9PWRK7M2.jpg',
    },
    {
      image: 'https://ichef.bbci.co.uk/images/ic/704xn/p072ms1x.jpg',
    },
    {
      image:
        'https://www.mommyshorts.com/wp-content/uploads/2013/05/6a0133f30ae399970b0192aa1b4c77970d-800wi.jpg',
    },
    {
      image:
        'https://coresites-cdn-adm.imgix.net/whitelines_new/wp-content/uploads/2016/10/Snowboard-Meme-46.jpg?fit=crop',
    },
    {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/46f84be08b4a47e19d3396df5642fc7d-1-1586268891.gif',
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
