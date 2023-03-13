import { ENTITIES_NAMES } from '@models/Entities';

import { State } from './types';

export const initialState: State = {
  entities: {
    [ENTITIES_NAMES.PRODUCT]: [
      {
        id: 1234,
        name: 'ertwertwerr',
        active: true,
        // createAt: '1985-08-09T02:10:18.0Z',
        createAt: '1985-08-09T02:10:18.0Z',
      },
      {
        id: 4345,
        name: 'treter',
        active: true,
        createAt: '1985-08-09T02:10:18.0Z',
      },
    ],
    [ENTITIES_NAMES.PRICE_PLANS]: [
      {
        id: 124,
        description: 'ksldjfdskldjf',
        active: true,
        createAt: '1985-08-09T02:10:18.0Z',
        removeAt: '1986-08-09T02:10:18.0Z',
      },
      {
        id: 2342,
        description: 'weirowe',
        active: false,
        createAt: '1985-08-09T02:10:18.0Z',
        removeAt: '1986-08-09T02:10:18.0Z',
      },
    ],
    [ENTITIES_NAMES.PAGES]: [
      {
        id: 1234,
        title: 'ksldjfdskldjf',
        active: true,
        updatedAt: '1985-08-09T02:10:18.0Z',
        publishedAt: '1986-08-09T02:10:18.0Z',
      },
      {
        id: 4324,
        title: 'fsl;klerw',
        active: true,
        updatedAt: '1985-08-09T02:10:18.0Z',
        publishedAt: '1986-08-09T02:10:18.0Z',
      },
    ],
  },
  selectedId: null,
};
/* 
 [ENTITIES_NAMES.PRODUCT]: [
      {
        id: 1234,
        name: 'ertwertwerr',
        active: true,
        // createAt: '1985-08-09T02:10:18.0Z',
        createAt: '01.01.2000',
      },
      {
        id: 4345,
        name: 'treter',
        active: true,
        createAt: '01.01.2000',
      },
    ],
    [ENTITIES_NAMES.PRICE_PLANS]: [
      {
        id: 1234,
        description: 'ksldjfdskldjf',
        active: true,
        createAt: '01.01.2000',
        removeAt: '01.01.2000',
      },
      {
        id: 2342,
        description: 'weirowe',
        active: true,
        createAt: '01.01.2000',
        removeAt: '01.01.2000',
      },
    ],
    [ENTITIES_NAMES.PAGES]: [
      {
        id: 1234,
        title: 'ksldjfdskldjf',
        active: true,
        updatedAt: '01.01.2000',
        publishedAt: '01.01.2000',
      },
      {
        id: 4324,
        title: 'fsl;klerw',
        active: true,
        updatedAt: '01.01.2000',
        publishedAt: '01.01.2000',
      },
    ],
     */
