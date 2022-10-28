
type Props ={
    children: React.ReactNode,
    styles: object,
    handler?: Function,
    id: string | number,
}

const ButtonIcon:React.FC<Props> = ({children, styles, handler, id}:Props):JSX.Element => {

    return(
        <button type="button" style={styles} onClick={(event) => handler(id, event)}>
            {children}
        </button>
    )
}

export default ButtonIcon