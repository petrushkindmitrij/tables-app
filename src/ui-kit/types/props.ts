type SpacePropsTypes = number | string;
export enum SIZE_VARIANT {
  XSMALL = 'xsmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
export enum WEIGHT_VARIANT {
  NORMAL = 'normal',
  MEDIUM = 'medium',
  BOLD = 'bold',
}

export interface OpacityProps {
  opacity?: number | string;
}
export interface DisplayProps {
  display?: string;
}

export interface WidthProps {
  width?: number | string;
}
export interface HeightProps {
  height?: number | string;
}

// padding
export interface PaddingProps {
  p?: SpacePropsTypes;
  padding?: SpacePropsTypes;
}
export interface PaddingRightProps {
  pr?: SpacePropsTypes;
  paddingRight?: SpacePropsTypes;
}
export interface PaddingLeftProps {
  pl?: SpacePropsTypes;
  paddingLeft?: SpacePropsTypes;
}
export interface PaddingBottomProps {
  pb?: SpacePropsTypes;
  paddingBottom?: SpacePropsTypes;
}
export interface PaddingTopProps {
  pt?: SpacePropsTypes;
  paddingTop?: SpacePropsTypes;
}

// margin
export interface MarginProps {
  m?: SpacePropsTypes;
  margin?: SpacePropsTypes;
}
export interface MarginRightProps {
  mr?: SpacePropsTypes;
  marginRight?: SpacePropsTypes;
}
export interface MarginLeftProps {
  ml?: SpacePropsTypes;
  marginLeft?: SpacePropsTypes;
}
export interface MarginBottomProps {
  mb?: SpacePropsTypes;
  marginBottom?: SpacePropsTypes;
}
export interface MarginTopProps {
  mt?: SpacePropsTypes;
  marginTop?: SpacePropsTypes;
}

export interface FontSizeProps {
  fontSize?: number | string;
}
export interface FontWeightProps {
  fontWeight?: number | string;
}
export interface LineHeightProps {
  lineHeight?: number | string;
}

// other
export interface SizeProps {
  size?: Partial<SIZE_VARIANT>;
}

export interface WeightProps {
  weight?: Partial<WEIGHT_VARIANT>;
}
