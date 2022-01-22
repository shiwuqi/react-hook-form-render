import * as React from 'react';
import FormRender from 'react-hook-form-render';
import style from './app.module.less';

const App = () => {

    return (
        <div className={style.container}>
            <FormRender />
        </div>
    )
}

export default App;