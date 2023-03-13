import { FieldAdapter } from '@modules/Form/FieldAdapter';
import React from 'react';

const EmptyComponent: React.FC = () => null;

interface Props {
  name: string;
}

export const EmptyField: React.FC<Props> = ({ name }) => (
  <FieldAdapter name={name} fromField={<EmptyComponent />}>
    <EmptyComponent />
  </FieldAdapter>
);
