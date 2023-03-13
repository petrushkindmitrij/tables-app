import React from 'react';
import { Input, Stack } from '@ui-kit';
import { FieldAdapter } from '@modules/Form';
import { FormField } from '@components/FormField';
import { ComponentProps, FieldsType } from './types';
import { requiredRule } from '@utils/validateForm';
import { ENTITIES_NAMES } from '@models/Entities';
import { TEMPORARY_ANY } from '@models/_project';

export const Component = <E extends ENTITIES_NAMES>({
  fields,
}: ComponentProps<E>) => (
  <Stack space={4}>
    {fields.map(({ name, title }) => (
      <React.Fragment key={name as string | number}>
        <FieldAdapter<FieldsType<E>>
          name={name as TEMPORARY_ANY}
          rules={{
            required: requiredRule,
          }}
          fromField={<FormField title={title} />}
        >
          <Input />
        </FieldAdapter>
      </React.Fragment>
    ))}
  </Stack>
);
