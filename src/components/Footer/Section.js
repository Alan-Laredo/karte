import React from 'react'
import './Section.css'

const Section = ({ title, children, items, logo, ...props }) => {
    const itemList = items ?
        items.map((item) => {
            console.log(item);
            return (<a href={item.href} key={item.id}>{item.name}</a>)
        }) :
        console.log(items)
    return (
        <div className="Section">
            <h3 className="title">{title || (<img src={logo} alt="logo" width="300px" />)}</h3>
            <div className="content">{children || itemList}</div>
        </div>
    )
}

export default Section