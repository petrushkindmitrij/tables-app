import {
  MarginProps,
  MarginTopProps,
  MarginBottomProps,
  MarginLeftProps,
  MarginRightProps,
} from '../types/props';

export enum TYPOGRAPHY_VARIANT {
  HEADER_H1,
  HEADER_H2,
  HEADER_H3,
  HEADER_H4,
  LEAD_1,
  LEAD_2,
  LEAD_2_MEDIUM,
  BODY_1,
  BODY_1_UNDERLINE,
  BODY_1_MEDIUM,
  BODY_1_STRONG,
  BODY_2,
  BODY_2_MEDIUM,
  BODY_2_STRONG,
  BODY_3,
  BODY_3_MEDIUM,
  BUTTON,
  BUTTON_MEDIUM,
  BUTTON_LARGE,
  CAPS_SMALL,
  CAPS_MIDDLE,
}

export interface TypographyVariantProps {
  variant?: TYPOGRAPHY_VARIANT;
}

export interface TypographyProps
  extends TypographyVariantProps,
    MarginProps,
    MarginTopProps,
    MarginBottomProps,
    MarginLeftProps,
    MarginRightProps {}
