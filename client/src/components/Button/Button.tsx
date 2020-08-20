import React, {ReactNode} from 'react';

import classes from './Button.module.less';


function Button({children}: ButtonProps) {
    return <button className={classes.btn}>
        {children}
    </button>;
}

interface ButtonProps {
    children: ReactNode;
}

export default Button;
