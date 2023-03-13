import { PAGES_IDS, PageConfig } from '@models/Navigation';
import { createTable } from '@utils/pageConfig/createTable';
import { ENTITIES_NAMES } from '@models/Entities';
import { TableFilterType } from '@components/MainTable';
import { createPage } from '@utils/pageConfig/createPage';

export const productConfig: PageConfig = {
  id: PAGES_IDS.PRODUCT,
  title: 'Product',
  component: createPage({
    entity: ENTITIES_NAMES.PRODUCT,
    fields: [
      {
        name: 'name',
        title: 'Name',
      },
    ],
    table: createTable({
      entity: ENTITIES_NAMES.PRODUCT,
      title: 'Table "Product"',
      columns: [
        {
          title: 'Name',
          key: 'name',
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
          title: 'Created',
          key: 'createAt',
          filterType: TableFilterType.DATE,
          flexGrow: 2,
        },
      ],
    }),
  }),
};
