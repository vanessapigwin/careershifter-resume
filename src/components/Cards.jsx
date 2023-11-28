function FormCard({children}) {
    return (
        <section className='form-card'>{children}</section>
    )
}

function ContentCard({children}) {
    return (
        <section className="content-card">{children}</section>
    )
}

export {FormCard, ContentCard}