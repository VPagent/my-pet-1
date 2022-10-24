import s from '../Container/container.module.scss'
import React from 'react'


interface Iprops {
    children: React.ReactNode,
}

const Container = (props:Iprops):JSX.Element => {

    return(
        <div className={s.container}>
            {props.children}
        </div>
    )
}

export default Container