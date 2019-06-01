import React from 'react'
import './Detail.css'

const Detail = ({ inv }) => {
    const fields = []
    for (let [key, value] of Object.entries(inv)) {
        fields.push({ name: key, value: value })
    }
    return (
        <div className="detail">
            <div className="img"><img src={inv.image} alt={inv.uri} width="100%" height="auto" /></div>
            <div className="caption">
                <h4>{inv.title}</h4>
                <div className="text">
                    {fields.filter(field => {
                        if (
                            field.name === "title" ||
                            field.name === "image" ||
                            field.name === "tags" ||
                            field.name === "title"
                        ) {
                            return false;
                        }
                        return true;
                    }
                    ).map((field, key) =>
                        <p key={key}>
                            {`${field.name}: ${field.value}`}
                        </p>
                    )}
                </div>
                <p>
                    {inv.tags.map((tag, i) => <small key={i}>{tag}</small>)}
                    <br></br>
                    {inv.description}
                </p>
            </div>
        </div>
    )
}

export default Detail
