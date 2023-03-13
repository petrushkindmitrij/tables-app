import React from 'react';
import {
  FormProvider,
  SubmitHandler,
  FieldValues,
  SubmitErrorHandler,
  FormProviderProps,
} from 'react-hook-form';
import { Form as FromComponent } from '@ui-kit';
import { DevTool } from '@hookform/devtools';

interface Props<TFieldValues extends FieldValues>
  extends FormProviderProps<TFieldValues> {
  onSubmit?: SubmitHandler<TFieldValues>;
  onInvalid?: SubmitErrorHandler<TFieldValues>;
}

export const Form = <TFieldValues extends FieldValues>({
  children,
  onSubmit,
  onInvalid,
  ...methods
}: Props<TFieldValues>) => (
  <FormProvider {...methods}>
    <FromComponent
      onSubmit={onSubmit && methods.handleSubmit(onSubmit, onInvalid)}
    >
      {/* <DevTool control={methods.control} /> */}
      {children}
    </FromComponent>
  </FormProvider>
);
