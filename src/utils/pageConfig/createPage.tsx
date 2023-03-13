import React from 'react';

import { AppLayout } from '@layouts/AppLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getIsModalWindowOpened, openModalWindow } from '@store/pageControl';
import { CreateComponentProps } from './types';
import { EditModalWindow } from '@components/EditModalWindow';
import { ENTITIES_NAMES } from '@models/Entities';
import { getSelectedId, setSelectedId } from '@store/entities';

export const createPage =
  <E extends ENTITIES_NAMES>({
    entity,
    fields,
    table: Table,
    layout: Layout = AppLayout,
    modalWindow: modalWindowFromProp,
  }: CreateComponentProps<E>): React.FC =>
  () => {
    const dispatch = useDispatch();
    const isModalWindowOpened = useSelector(getIsModalWindowOpened);
    const selectedId = useSelector(getSelectedId);

    const ModalWindow = modalWindowFromProp || EditModalWindow;

    return (
      <Layout>
        <Table
          onEdit={id => {
            dispatch(setSelectedId({ id }));
            dispatch(openModalWindow());
          }}
        />
        {isModalWindowOpened && (
          /* @ts-ignore */
          <ModalWindow entity={entity} id={selectedId} fields={fields} />
        )}
      </Layout>
    );
  };
