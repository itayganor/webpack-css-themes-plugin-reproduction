import React, {HTMLAttributes, ReactNode} from 'react';

import classes from './Button.module.less';


function Button({children, ...rest}: ButtonProps) {
    return <button className={classes.btn} {...rest}>
        {children}
    </button>;
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export default Button;
