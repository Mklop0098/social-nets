import React from 'react';
import { DefaultLayoutProps } from '../DefaultLayout';
import { Header } from '../DefaultLayout/Header';

export const HeaderOnly: React.FC<DefaultLayoutProps> = (props) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{props.children}</div>
            </div>
        </div>
    );
};
