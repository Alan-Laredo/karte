import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { withRouter } from 'react-router-dom'

const Home = (props) => {
    const handleSearch = (search) => {
        props.history.push('/tag/' + search)
    }
    return (
        <div>
            <Header search={handleSearch}></Header>
            <Footer></Footer>
        </div>
    )
}

export default withRouter(Home)