import React from 'react';
import {Switch} from 'antd';

import Button from './components/Button/Button';


export default function App() {
    return <div>
        hello world
        <Switch checked />
        <Button>
            I'm a button
        </Button>
    </div>;
}
