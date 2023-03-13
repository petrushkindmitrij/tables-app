import { PAGES_IDS, PageConfig } from '@models/Navigation';
import { createTable } from '@utils/pageConfig/createTable';
import { ENTITIES_NAMES } from '@models/Entities';
import { TableFilterType } from '@components/MainTable';
import { createPage } from '@utils/pageConfig/createPage';

export const pagesConfig: PageConfig = {
  id: PAGES_IDS.PAGES,
  title: 'Pages',
  component: createPage({
    entity: ENTITIES_NAMES.PAGES,
    fields: [
      {
        name: 'title',
        title: 'Title',
      },
    ],
    table: createTable({
      entity: ENTITIES_NAMES.PAGES,
      title: 'Table "Pages"',
      columns: [
        {
          title: 'Title',
          key: 'title',
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
          title: 'UpdatedAt',
          key: 'updatedAt',
          filterType: TableFilterType.DATE,
          flexGrow: 2,
        },
        {
          title: 'PublishedAt',
          key: 'publishedAt',
          filterType: TableFilterType.DATE,
          flexGrow: 2,
        },
      ],
    }),
  }),
};
