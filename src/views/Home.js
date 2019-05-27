import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Home() {
    const handleSubmit = (e) => {
        e.preventDefautl()
        console.log('submited');
        
    }
    return (
        <div>
            <Header handleSubmit={handleSubmit}></Header>
            <Footer></Footer>
        </div>
    )
}
