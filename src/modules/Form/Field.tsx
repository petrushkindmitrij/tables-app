import React from 'react';
import {
  Controller,
  ControllerProps,
  FieldValues,
  useFormContext,
} from 'react-hook-form';
import { TEMPORARY_ANY } from '@models/_project';
export const Field: React.FC = <
  TAs extends
    | React.ReactElement
    | React.ComponentType<TEMPORARY_ANY>
    | 'input'
    | 'select'
    | 'textarea',
  TFieldValues extends FieldValues = FieldValues
>(
  props: Omit<ControllerProps<TAs, TFieldValues>, 'control'>
) => {
  const { control } = useFormContext<TFieldValues>();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Controller control={control} {...props} />;
};
