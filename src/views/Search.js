import React, { Component } from 'react'

export class Search extends Component {
    state = {
        invitaciones: [
            {
                uri: "boda",
                title: "boda",
                image: "../img/inv1.png",
                tags: [
                    "boda",
                    "elegante",
                ],
                active: 1
            },
            {
                uri: "bs",
                title: "bs",
                image: "../img/inv2.png",
                tags: [
                    "bs"
                ],
                active: 1
            },
            {
                uri: "xv",
                title: "xv",
                image: "../img/inv3.png",
                tags: [
                    "XV"
                ],
                active: 1
            },
        ]
    }
    render() {
        const invs = this.state.invitaciones.filter(
            inv => !inv.tags.indexOf(this.props.match.params.tag)
        )
        return (
            <div>
                {invs.map((inv, key) => (
                    <div key={key}>
                        <p>{inv.title}</p>
                        <img src={inv.image} alt={inv.title} />
                        <div>tags: {inv.tags.map(tag => <p>{tag}</p>)}</div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Search
