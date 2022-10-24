import s from '../Container/container.module.scss';
import React from 'react';
const Container = (props) => {
    return (<div className={s.container}>
            {props.children}
        </div>);
};
export default Container;
