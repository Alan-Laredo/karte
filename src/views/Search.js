import React, { Component } from 'react'
import data from './data.json'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Result from './../components/Result/Result'
import similarText from './../utils/similarText';

export class Search extends Component {
    state = {
        invitaciones: []
    }

    componentWillMount() {
        this.setState({
            invitaciones: data
                .filter(({ tags }) => {
                    let realtag
                    tags.map(tag => {
                        let similar = similarText(this.props.match.params.tag, tag, 1)
                        if (similar >= 70) {
                            realtag = tag
                            return tag
                        }
                    })
                    return tags.includes(realtag)
                })
                .map((inv) => {
                    if (!/\/static/.test(inv.image)) {
                        inv.image = require("../img/" + inv.image)
                    }
                    return inv
                })
        })
    }
    componentWillReceiveProps(newProps) {
        console.log(newProps)
        this.setState({
            invitaciones: data
                .filter(({ tags }) => {
                    let realtag
                    tags.map(tag => {
                        let similar = similarText(newProps.match.params.tag, tag, 1)
                        if (similar >= 70) {
                            realtag = tag
                            return tag
                        }
                        return null
                    })
                    return tags.includes(realtag)
                })
                .map((inv) => {
                    if (!/\/static/.test(inv.image)) {
                        inv.image = require("../img/" + inv.image)
                    }
                    return inv
                })
        })
    }

    render() {
        const invs = this.state.invitaciones
        return (
            <div>
                <Header title="Resultados"></Header>
                <h4 className="title">ESTOS SON LOS RESULTADOS QUE COINCIDEN CON TU BUSQUEDA:</h4>
                {invs.length ? invs.map((inv, i) => (
                    <Result inv={inv} key={i} i={i}></Result>
                )) : 'No hay invitaciones con ese tag'}
                <Footer />
            </div>
        )
    }
}

export default Search
