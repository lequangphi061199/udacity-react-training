import { ButtonPresenter } from './ButtonPresenter';
import { ButtonProps } from './types';

export const ButtonContainer = (props: ButtonProps) => {
  return <ButtonPresenter {...props} />;
};
