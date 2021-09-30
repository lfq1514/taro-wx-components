// 所有组件的基本类型
import { CSSProperties } from 'react';

export interface QYComponent {
  className?: string;
  customStyle?: string | CSSProperties;
  onClick?: () => any;
}

export interface AtIconBaseProps extends QYComponent {
  value: string;

  color?: string;

  prefixClass?: string;

  size?: number | string;
}

export default QYComponent;
