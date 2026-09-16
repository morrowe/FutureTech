import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {im} from '../img/img.js';
import axios from "axios"
import styles from './page5.module.scss'


function Page5() {
    const [pluses, setPluses] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/pluses")
        .then(res => setPluses(res.data))
        .catch(err => console.error(err));
    }, []);
    const [paper, setPaper] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/paper")
        .then(res => setPaper(res.data))
        .catch(err => console.error(err));
    }, []);
    const [trends, setTrends] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/trends")
        .then(res => setTrends(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <>
            <main>
                <section className={styles.sect1}>
                    <h6>Unlock a World of </h6>
                    <div>
                        <h6>Knowledge</h6>
                        <p>Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</p>
                    </div> 
                </section>
                <section className={styles.sect2}>
                    
                    <div className={styles.size}>
                        {pluses.map((item, index) => (
                        <div>
                            <h3>{item.name}<span>+</span></h3>
                            <p>{item.info}</p>
                        </div>))}
                    </div>
                </section>
                <section className={styles.sect3}>
                    <div className={styles.lightv3}>
                        <div className={styles.size}>
                            <div className={styles.left}>
                                <button>Dive into the Details</button>
                                <h5>In-Depth Reports and Analysis</h5>
                            </div>
                            <div className={styles.right}>
                                <button>Whitepapers</button>
                                <button>Ebooks</button>
                                <button>Reports</button>
                            </div>
                        </div>
                    </div>
                    {paper.map((item, index) => (
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <div className={styles.info}>
                                <img src={item.img} alt="" />
                                <div className={styles.raiting}>
                                    <h4>{item.head}</h4>
                                    <p>{item.info}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.video} style={{ backgroundImage: `url(${item.bg})` }}></div>
                            <div className={styles.text}>
                                <h2>{item.name}</h2>
                                <p>{item.text}</p>
                            </div>
                            <div className={styles.blocks}>
                                <div>
                                    <p className={styles.grey}>Publication Date</p>
                                    <p>{item.date}</p>
                                </div>
                                <div>
                                    <p className={styles.grey}>Category</p>
                                    <p>{item.categ}</p>
                                </div>
                                <div>
                                    <p className={styles.grey}>Author</p>
                                    <p>{item.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>))}
                </section>
                <section className={styles.sect4}>
                    <div className={styles.size}>
                        {trends.map((item, index) => (
                        <div className={styles.block}>
                            <div className={styles.bg} style={{ backgroundImage: `url(${item.img})` }}></div>
                            <h2>{item.name}</h2>
                            <p className={styles.grey}>{item.info}</p>
                            <div className={styles.buttons}>
                                <button>View Details</button>
                                <button>Download PDF Now</button>
                            </div>
                        </div>))}
                    </div>
                </section>
            </main>
        </>
    )
}
export default Page5