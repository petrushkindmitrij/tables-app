import React from 'react';
import { Card } from '@ui-kit';

import { NavigationField } from './NavigationField';
import { NavigationProps } from './types';

export const Navigation: React.FC<NavigationProps> = ({
  config,
  onSelect,
  selected,
}) => (
  <Card minWidth={260} p='0' overflow='hidden'>
    {config.map(elem => {
      return (
        <NavigationField
          key={elem.id}
          title={elem.title}
          isSelected={elem.id === selected}
          onClick={() => onSelect?.(elem.id)}
        />
      );
    })}
  </Card>
);
