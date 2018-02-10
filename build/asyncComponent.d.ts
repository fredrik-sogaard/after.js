/// <reference types="react" />
import * as React from 'react';
export interface AsyncRouteComponentProps {
    isInitialRender: boolean;
    setAppState: (data: any) => void;
}
export interface AsyncRouteComponentState {
    Component: React.ReactNode | null;
}
/**
 * Returns a new React component, ready to be instantiated.
 * Note the closure here protecting Component, and providing a unique
 * instance of Component to the static implementation of `load`.
 */
export declare function asyncComponent<Props = any>({loader, Placeholder}: {
    loader: () => Promise<any>;
    Placeholder?: React.ComponentType<Props>;
}): {
    new (props: any): {
        componentWillMount(): void;
        updateState(): void;
        render(): JSX.Element | null;
        setState<K extends "Component">(state: AsyncRouteComponentState | ((prevState: Readonly<AsyncRouteComponentState>, props: any) => AsyncRouteComponentState | Pick<AsyncRouteComponentState, K>) | Pick<AsyncRouteComponentState, K>, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<any>;
        state: Readonly<AsyncRouteComponentState>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    load(): Promise<void>;
    getInitialProps(ctx: any): any;
};
