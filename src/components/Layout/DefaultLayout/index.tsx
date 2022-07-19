import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export type DefaultLayoutProps = {
    children: any;
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{props.children}</div>
            </div>
        </div>
    );
};
