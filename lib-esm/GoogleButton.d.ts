import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
declare type GoogleButtonProps = {
    label: string;
    disabled: boolean;
    tabIndex: number;
    onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => any;
    type: 'light' | 'dark';
    style: object;
};
declare type GoogleButtonState = {
    hovered: boolean;
};
export default class GoogleButton extends PureComponent<GoogleButtonProps, GoogleButtonState> {
    constructor(props: GoogleButtonProps);
    static propTypes: {
        label: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        tabIndex: PropTypes.Requireable<number>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        type: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        label: string;
        disabled: boolean;
        type: string;
        tabIndex: number;
        onClick: () => void;
    };
    state: {
        hovered: boolean;
    };
    getStyle: () => React.CSSProperties;
    mouseOver: () => void;
    mouseOut: () => void;
    click: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    render(): JSX.Element;
}
export {};
