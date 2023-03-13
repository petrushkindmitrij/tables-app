import { SIZE_VARIANT } from '../types/props';
import { BasicInput } from '../Basics';

export interface ICurrencyItem {
  id: string;
  symbol: string;
}

type IBasicInputProps = Omit<
  React.ComponentProps<typeof BasicInput>,
  'size' | 'onChange' | 'type' | 'nonce' | 'onResize' | 'onResizeCapture'
>;

export interface InputSizeProps {
  size?: SIZE_VARIANT;
}

export interface InputErrorSecProps {
  hasError?: boolean;
  hasSuccess?: boolean;
}

export interface IInputProps
  extends IBasicInputProps,
    InputSizeProps,
    InputErrorSecProps {
  hasNoIcons?: boolean;
  disabled?: boolean;
  control?: React.ReactElement;
  onChange?: (val: string) => void;
  onFocus?: (e: unknown) => void;
  onBlur?: (e: unknown) => void;
}

export interface ICurrencyInputProps extends Omit<IInputProps, 'onSelect'> {
  onSelect?: ({ id, symbol }: ICurrencyItem) => void;
  currency: ICurrencyItem;
  currencyItems?: ICurrencyItem[];
}

export interface IconSizeProps {
  size: IInputProps['size'];
}
