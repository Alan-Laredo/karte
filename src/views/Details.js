import React, { Component } from 'react'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Detail from '../components/Detail/Detail';
import data from './data.json'

export class Details extends Component {
    state = {
        invitacion: []
    }

    componentWillMount() {
        this.setState({
            invitacion: data.filter(inv =>
                inv.uri === this.props.match.params.uri
            ).map((inv) => {
                if (!/\/static/.test(inv.image)) {
                    inv.image = require("../img/" + inv.image)
                }
                return inv
            })
        })
    }

    render() {
        const inv = this.state.invitacion
        return (
            <div>
                <Header title="Detalle"></Header>
                <Detail inv={inv[0]}></Detail>
                <Footer />
            </div>
        )
    }
}

export default Details
