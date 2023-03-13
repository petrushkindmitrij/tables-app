import { PLATFORM_APPS } from '@constants/platform';

export interface PlatformState {
  [key: string]: any; // eslint-disable-line
}

export interface MicrofrontendProps {
  name: string;
  context: () => { [key: string]: unknown };
  publish: <S>(state: S) => void;
  navigateTo: (appName: PLATFORM_APPS) => void;
  subscribe: <T extends keyof PlatformState>(
    listener: (value: PlatformState[T], oldValue?: PlatformState[T]) => void,
    path?: T
  ) => void;
  setError: (error: string) => void;
  setToast: (arg: { title: string; content: string }) => void;
  callModal: (modal: TModalData) => void;
  closeModal: () => void;
  onFinishApp: () => void;
  onFinishClientSession: () => void;
  handleFinishApp: (callback: () => void) => void;
  domElementGetter: () => HTMLElement;
  metaSetter: () => void;
  hotkeysConfig: {
    [key: string]: {
      hotkey: string;
    };
  };
}

export type TButton = {
  label: string;
  callback: () => void;
  type: 'primary';
};

export type TModalData = {
  type: 'info' | 'warning';
  errorId?: string;
  title?: string;
  content?: string;
  onOk?: TButton;
  onCancel?: TButton;
};
