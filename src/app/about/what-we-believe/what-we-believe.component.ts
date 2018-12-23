import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-what-we-believe',
  templateUrl: './what-we-believe.component.html',
  styleUrls: ['./what-we-believe.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class WhatWeBelieveComponent {
  public listItems = [
    'We believe the Bible to be the inspired, the only infallible, authoritative Word of God and inerrant in the original writings.',
    'We believe that there is one God, eternally existing in three persons: Father, Son, and Holy Spirit.',
    'We believe in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His' +
    'miracles, in His vicarious and atoning death through His shed blood, in His bodily resurrection, in His' +
    'ascension to the right hand of the Father, and in His personal return in power and glory.',
    'We believe that the lost and sinful man must be saved, and that man\'s only hope of redemption is through the shed blood of Jesus Christ, the Son of God.',
    'We believe in and practice the holy ordinance of water baptism, which signifies the believer\'s death, burial, and resurrection into new life with Christ Jesus.',
    'We believe in the present ministry and baptism of the Holy Spirit, by whose indwelling the Christian is enabled to live a Godly life.',
    'We believe in the resurrection of both the saved and the unsaved; those that are saved into the resurrection of life and those that are unsaved into the resurrection of damnation.',
    'We believe in the spiritual unity of believers in our Lord Jesus Christ.'
  ];

  constructor() { }

}
