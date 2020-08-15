/// <reference types="react" />
declare module "icons" {
    import PropTypes from 'prop-types';
    export const GoogleIcon: {
        ({ disabled, type }: {
            disabled: any;
            type: any;
        }): JSX.Element;
        propTypes: {
            disabled: PropTypes.Requireable<boolean>;
            type: PropTypes.Requireable<string>;
        };
        defaultProps: {
            type: string;
        };
    };
}
declare module "styles" {
    export const darkStyle: {
        height: string;
        width: string;
        border: string;
        textAlign: "center";
        verticalAlign: string;
        boxShadow: string;
        fontSize: string;
        lineHeight: string;
        display: string;
        borderRadius: string;
        transition: string;
        fontFamily: string;
        cursor: string;
        userSelect: "none";
        backgroundColor: string;
        color: string;
    };
    export const lightStyle: {
        height: string;
        width: string;
        border: string;
        textAlign: "center";
        verticalAlign: string;
        boxShadow: string;
        fontSize: string;
        lineHeight: string;
        display: string;
        borderRadius: string;
        transition: string;
        fontFamily: string;
        cursor: string;
        userSelect: "none";
        backgroundColor: string;
        color: string;
    };
    export const hoverStyle: {
        boxShadow: string;
        transition: string;
    };
    export const disabledStyle: {
        backgroundColor: string;
        color: string;
        cursor: string;
    };
}
declare module "GoogleButton" {
    import React, { PureComponent } from 'react';
    import PropTypes from 'prop-types';
    type GoogleButtonProps = {
        label: string;
        disabled: boolean;
        tabIndex: number;
        onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => any;
        type: 'light' | 'dark';
        style: object;
    };
    type GoogleButtonState = {
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
}
declare module "index" {
    export { default as GoogleButton } from "GoogleButton";
}
