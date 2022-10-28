const ButtonIcon = ({ children, styles, handler, id }) => {
    return (<button type="button" style={styles} onClick={(event) => handler(id, event)}>
            {children}
        </button>);
};
export default ButtonIcon;
