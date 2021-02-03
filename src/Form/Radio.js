import React from 'react'

const Radio = ({pergunta, options, value, id, onChange, active}) => {

    if(!active) return null;

    return (
        <fieldset>
            <legend>{pergunta}</legend>
            {options.map((option) => (
                <label key={option}>
                    <input id={id} type="radio" checked={value === option} value={option} onChange={onChange} />
                    {option}
                </label>
            ))}
        </fieldset>
    )
}

export default Radio;