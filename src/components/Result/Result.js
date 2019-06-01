import React from 'react'
import './Result.css'
import {withRouter} from 'react-router-dom'

const Result = ({ inv, history, i }) => {
    const handleClick = () => {
        history.push('/inv/' + inv.uri)
    }
    
    return (
        <div className={"result" + (i % 2 === 0 ? " prime" : "")} onClick={handleClick}>
            <div className="img"><img src={inv.image} alt={inv.uri} width="100%" height="auto" /></div>
            <div className="caption">
                <h4>{inv.title}</h4>
                <p>
                    {inv.tags.map((tag, i) => <small key={i}>{tag}</small>)}
                    <br></br>
                    {inv.description}
                </p>
            </div>
            <button>Ver >></button>
        </div>
    )
}

export default withRouter(Result)
