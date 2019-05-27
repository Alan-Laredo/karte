import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Home(props) {
    const handleSearch = (search) => {
        console.log(search)
        props.history.push('/tag/' + search)
    }
    return (
        <div>
            <Header search={handleSearch}></Header>
            <Footer></Footer>
        </div>
    )
}
