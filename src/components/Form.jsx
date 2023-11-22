function Form({children}) {
    return (
        <form>
            {children}
            <button type="submit">Submit</button>
        </form>
    )
}

function TextField({name, placeholder=''}) {
    return (
        <input type="text" name={name} id={name} placeholder={placeholder}/>
    )
}

export {TextField, Form}