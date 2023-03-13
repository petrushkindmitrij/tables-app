import { PageConfig } from '@models/Navigation';

export interface NavigationProps {
  config: PageConfig[];
  onSelect?: (id: NavigationFieldType['id']) => void;
  selected?: NavigationFieldType['id'];
}

export interface NavigationReduxContainerProps extends NavigationProps {}

export interface NavigationFieldType extends Pick<PageConfig, 'id'> {
  title: string;
  isSelected?: boolean;
}
