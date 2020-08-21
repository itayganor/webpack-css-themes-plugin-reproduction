import React, {ReactNode} from 'react';

import classes from './AnotherButton.module.less';


function AnotherButton({children}: ButtonProps) {
    return <button className={classes.btn}>
        {children}!!
    </button>;
}

interface ButtonProps {
    children: ReactNode;
}

export default AnotherButton;
