import { useEffect } from 'react';
import './styles/Home.css';
import { AuthContext } from '../context/auth';
import { useContext } from 'react';

function Home(props) {
    
    return (
        <main>
            <section className="manga-day"></section>
            <section className="site-info"></section>
            <section className="generator"></section>
        </main>
    );
}
export default Home;
