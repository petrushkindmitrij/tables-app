import React from 'react';
import { useFieldArray, useFormContext, FieldValues } from 'react-hook-form';
import { Stack } from '@ui-kit';

import { TEMPORARY_ANY } from '@models/_project';

import { DEFAULT_ARRAY_ENTITY } from './constants';

interface FieldProps {
  append: () => void;
  remove: () => void;
  fieldsLength: number;
  fieldNumber: number;
  name: string;
}

interface Props<TFieldValues> {
  name: string;
  initialValue?: Partial<TFieldValues>;
  formComponent: React.ReactElement<FieldProps>;
  space?: number | string;
  onRemove?: (index: number) => void;
  onAppend?: () => void | Promise<void>;
  numberItems?: number;
}

export const FieldsArray = <TFieldValues extends FieldValues>({
  name,
  initialValue = DEFAULT_ARRAY_ENTITY,
  formComponent,
  space = 4,
  onRemove,
  onAppend,
  numberItems,
  ...props
}: Props<TFieldValues>) => {
  const { control } = useFormContext<TFieldValues>();
  const { fields, append, remove } = useFieldArray<TFieldValues>({
    control,
    name: name as string,
  });

  const appendCallback = (value: Partial<TFieldValues> = initialValue) => {
    append(value);
    onAppend?.();
  };

  const removeCallback = (index: number) => async () => {
    if (onRemove) {
      await onRemove(index);
    }
    remove(index);
  };

  if (numberItems) {
    for (let i = 0; i < numberItems - fields.length; i++) {
      // appendCallback(items[fields.length + i])
      appendCallback();
    }
    for (let i = 0; i < fields.length - numberItems; i++) {
      removeCallback(fields.length - i - 1)();
    }
  }

  return (
    <Stack space={space}>
      {fields.map((field: TEMPORARY_ANY, index) => {
        const form = React.cloneElement(formComponent, {
          key: field.id,
          name: `${name}.${index}`,
          append: appendCallback,
          remove: removeCallback(index),
          fieldNumber: index,
          fieldsLength: fields.length,
          ...props,
        });

        return form;
      })}
    </Stack>
  );
};
