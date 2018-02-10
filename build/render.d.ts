/// <reference types="react" />
import * as React from 'react';
import { RouteProps } from 'react-router-dom';
export declare type AfterRenderProps<T> = T & {
    req: any;
    res: any;
    assets: any;
    routes: Partial<RouteProps>[];
    document: React.ComponentType<any>;
};
export declare function render<T>(options: AfterRenderProps<T>): Promise<string | undefined>;
