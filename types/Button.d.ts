import { ButtonProps } from '@tarojs/components/types/Button';
import QYBaseComponents from './base';

type TaroButtonProps = Pick<
  ButtonProps,
  | 'formType'
  | 'openType'
  | 'lang'
  | 'sessionFrom'
  | 'sendMessageTitle'
  | 'sendMessagePath'
  | 'sendMessageImg'
  | 'showMessageCard'
  | 'appParameter'
  | 'onContact'
  | 'onGetUserInfo'
  | 'onGetPhoneNumber'
  | 'onOpenSetting'
  | 'onError'
>;
export interface QYButtonProps extends QYBaseComponents, TaroButtonProps {
  /**
   * 设置按钮圆角
   */
  circle?: boolean;
  /**
   *按钮样式大小，
   */
  size?: 'normal' | 'small';
  /**
   * 设置按钮为禁用态（不可点击）
   * @default false
   */
  disabled?: boolean;
}
export interface QYButtonState {}
