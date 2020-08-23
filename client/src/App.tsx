import React, {useState} from 'react';
import Button from './components/Button/Button';
import AnotherButton from './components/AnotherButton/AnotherButton';
import {Switch} from 'antd';
import {switchTheme} from 'multiple-themes-webpack-plugin';


export default function App() {
    const [is, setIs] = useState(false);

    function onClick() {
        if (is) {
            switchTheme('demo-dark');
        } else {
            switchTheme('demo-light');
        }
        setIs(i => !i);
    }

    return <div>
        hello world
        <Switch checked={is} onChange={setIs}/>
        <Button onClick={onClick}>
            I'm a button
        </Button>
        <AnotherButton>
            Another button
        </AnotherButton>
    </div>;
}
