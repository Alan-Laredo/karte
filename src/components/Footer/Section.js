import React from 'react'
import './Section.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Section = ({ title, children, items, logo, ...props }) => {
    const itemList = items ?
        items.map((item, key) => {
            return (
                <a href={item.href} key={key}>
                    {item.name ? item.name : (<FontAwesomeIcon icon={['fab', item.icon]} size="2x" />)}
                </a>
            )
        }) : null
    return (
        <div className="Section">
            <h3 className="title">{title ? title.toUpperCase() : (<img src={logo} alt="logo" width="300px" />)}</h3>
            <div className="content">{children || itemList}</div>
        </div>
    )
}

export default Section