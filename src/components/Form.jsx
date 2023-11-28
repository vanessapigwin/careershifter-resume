import {useState} from "react"

function GenForm({
    formData, 
    setFormData
    }) 
    {
    const [isReadOnly, setIsReadOnly] = useState(false)

    const inputItems = Object.keys(formData) 

    function handleSubmit(e) {
        e.preventDefault()
        setIsReadOnly(!isReadOnly)
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
            {
                inputItems.map(key =>
                    <label key={key} htmlFor={key}>
                        <span>{formData[key].desc}</span>
                        <input
                            type={formData[key].type ? formData[key].type: 'text'}
                            name={key}
                            id={key}
                            value={formData[key].value}
                            onChange={handleChange}
                            required={true}
                            readOnly={isReadOnly}
                        />
                    </label>
                )
            }
            <button type="submit">
                {isReadOnly? 'Edit': 'Submit'}
            </button>
        </form>
    )
}

function ModForm({
    formData, 
    setFormData, 
    dataList=null,
    updateDataList=null,
    }) 
    {
    const [isReadOnly, setIsReadOnly] = useState(false)

    const inputItems =  
        Object.keys(formData).slice(0, Object.keys(formData).length-1)

    const textAreaKey = Object.keys(formData).slice(length-1)

    function resetForm() {
        Object.keys(formData).forEach(key => {
            const newInputData = formData[key]
            newInputData.value = ''
            setFormData({
                ...formData,
                [key]:newInputData
        })
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsReadOnly(!isReadOnly)

        if (dataList && !isReadOnly) {
            const newList = dataList;
            newList.push(formData);
            updateDataList(newList);
            resetForm();
        }
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
            {
                inputItems.map(key =>
                    <label key={key} htmlFor={key}>
                        <span>{formData[key].desc}</span>
                        <input
                            type={formData[key].type ? formData[key].type: 'text'}
                            name={key}
                            id={key}
                            value={formData[key].value}
                            onChange={handleChange}
                            required={true}
                            readOnly={isReadOnly}
                        />
                    </label>
                )
            }
            {
            textAreaKey && 
                <label key={textAreaKey} htmlFor={textAreaKey}>
                    <span>{formData[textAreaKey].desc}</span>
                    <textarea
                        name={textAreaKey} 
                        id={textAreaKey} 
                        cols="30" 
                        rows="10"
                        value={formData[textAreaKey].value}
                        onChange={handleChange}
                        required={true}
                        readOnly={isReadOnly}
                    />
                </label>
            }
            <button type="submit">
                {isReadOnly? 'Edit': 'Submit'}
            </button>
        </form>
    )
}

export {GenForm, ModForm}