function GenForm({genInfo, onsubmit, onchange}) {
    function handleSubmit(e) {
        e.preventDefault()
        onsubmit()
        console.log(genInfo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={onchange} value={genInfo.value} placeholder={genInfo.desc}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default GenForm