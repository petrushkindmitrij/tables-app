import { PAGES_IDS, PageConfig } from '@models/Navigation';
import { createTable } from '@utils/pageConfig/createTable';
import { ENTITIES_NAMES } from '@models/Entities';
import { TableFilterType } from '@components/MainTable';
import { createPage } from '@utils/pageConfig/createPage';

export const pricePlansConfig: PageConfig = {
  id: PAGES_IDS.PRICE_PLANS,
  title: 'Price plans',
  component: createPage({
    entity: ENTITIES_NAMES.PRICE_PLANS,
    fields: [
      {
        name: 'description',
        title: 'Description',
      },
    ],
    table: createTable({
      entity: ENTITIES_NAMES.PRICE_PLANS,
      title: 'Table "Price plans"',
      columns: [
        {
          title: 'Description',
          key: 'description',
          filterType: TableFilterType.TEXT,
          flexGrow: 3,
        },
        {
          title: 'Status',
          key: 'active',
          filterType: TableFilterType.BOOLEAN,
          flexGrow: 1,
        },
        {
          title: 'CreateAt',
          key: 'createAt',
          filterType: TableFilterType.DATE,
          flexGrow: 2,
        },
        {
          title: 'RemoveAt',
          key: 'removeAt',
          filterType: TableFilterType.DATE,
          flexGrow: 2,
        },
      ],
    }),
  }),
};
