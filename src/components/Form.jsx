function GenForm({formData, setFormData}) {
    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }

    function handleChange(e) {
        const key = e.target.name
        const newInputData = formData[key]
        newInputData.value = e.target.value
        setFormData({
            ...formData,
            [key]:newInputData
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(formData).map(key =>
                <input
                    key={key} 
                    type={formData[key].type ? formData[key].type: 'text'}
                    name={key}
                    value={formData[key].value}
                    placeholder={formData[key].desc}
                    onChange={handleChange}
                />
            )}
            <button type="submit">Submit</button>
        </form>
    )
}

export default GenForm