function Input(props) {
    return ( 
        <>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                className={props.className}
                placeholder={props.placeholder}
                required=""
                value={props.value}
                onClick={props.click}
            />
        </>
     );
}

export default Input;