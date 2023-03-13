import React from 'react';
import get from 'lodash/get';
import {
  useFormContext,
  useController,
  FieldValues,
  UseControllerOptions,
} from 'react-hook-form';
import { PropsAdapter } from '@modules/Form/types';

interface FieldProps {
  title?: string;
  subtitle?: string;
  hasError?: boolean;
  hasSuccess?: boolean;
}

interface InputProps {
  onChange: React.ChangeEventHandler<HTMLElement>;
  onBlur: React.FocusEventHandler<HTMLElement>;
  name: string;
  value: string;
  hasError?: boolean;
}

interface Props<TFieldValues extends FieldValues = FieldValues>
  extends Omit<UseControllerOptions<TFieldValues>, 'control'> {
  fromField: React.ReactElement<FieldProps>;
  children: React.ReactElement<InputProps>;
  title?: string;
  propsAdapter?: PropsAdapter;
}

export const FieldAdapter = <TFieldValues extends FieldValues = FieldValues>({
  fromField: Field,
  children,
  propsAdapter = field => field,
  ...props
}: Props<TFieldValues>) => {
  const { control, errors } = useFormContext<TFieldValues>();
  const { field, meta } = useController<TFieldValues>({
    control,
    ...props,
  });

  const error = get(errors, props.name) as { message?: string } | undefined;
  const hasError = meta.isTouched && meta.invalid;
  const subtitle = error?.message;

  const inputElement = React.cloneElement(children, {
    ...propsAdapter(field),
    hasError,
  });
  const fieldElement = React.cloneElement(
    Field,
    { hasError, subtitle },
    inputElement
  );

  return fieldElement;
};
