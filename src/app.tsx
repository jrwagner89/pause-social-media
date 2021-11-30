import * as React from 'react';
import './app.scss';

export const App: React.FC = () => {
    const [isPageVisible, setIsPageVisible] = React.useState<boolean>(true);
    return (
        <>
            <div>Hello,</div>
        </>
    );
};
