import { ButtonProps } from './types';

export const ButtonPresenter = (props: ButtonProps) => {
    return <button>{props.children}</button>
}