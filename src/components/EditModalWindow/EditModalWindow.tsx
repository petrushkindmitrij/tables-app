import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { ModalWindowLayout } from '@layouts/ModalWindowLayout';
import { Form } from '@modules/Form';
import { BottomButtonsLayout } from '@layouts/BottomButtonsLayout';

import { Component } from './Component';
import { EditModalWindowProps, FieldsType } from './types';
import { ENTITIES_NAMES, ENTITIES_TYPES } from '@models/Entities';
import { updateEntity } from '@store/entities';
import { closeModalWindow } from '@store/pageControl';
import { TEMPORARY_ANY } from '@models/_project';

export const EditModalWindow = <
  E extends ENTITIES_NAMES,
  K extends keyof ENTITIES_TYPES[ENTITIES_NAMES] = keyof ENTITIES_TYPES[ENTITIES_NAMES]
>({
  entity,
  id,
  fields,
}: EditModalWindowProps<E, K>): JSX.Element => {
  const dispatch = useDispatch();

  const methods = useForm<FieldsType<E>>();

  const onSubmit = async (form: FieldsType<E>) => {
    methods.formState.dirtyFields;
    dispatch(updateEntity({ entity, id, updatedElementPart: form }));
    dispatch(closeModalWindow());
  };

  return (
    <ModalWindowLayout>
      <Form {...methods} onSubmit={onSubmit as TEMPORARY_ANY}>
        <BottomButtonsLayout
          type={'update'}
          onCancelClick={() => {
            dispatch(closeModalWindow());
          }}
        >
          <Component fields={fields} />
        </BottomButtonsLayout>
      </Form>
    </ModalWindowLayout>
  );
};
