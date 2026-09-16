import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {im} from '../img/img.js';
import axios from "axios"
import styles from './page4.module.scss'


function Page4() {
    const [articl, setArticl] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/articl")
        .then(res => setArticl(res.data))
        .catch(err => console.error(err));
    }, []);
    const [rolik, setRolik] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/rolik")
        .then(res => setRolik(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <>
            <main>
                <section className={styles.sect1}>
                    <h6>Unlock the World of Artificial Intelligence </h6>
                    <div>
                        <h6>through Podcasts</h6>
                        <p>Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</p>
                    </div>
                </section>
                <section className={styles.sect2}>
                    {articl.map((item, index) => (
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <div className={styles.info}>
                                <img src={item.img} alt="" />
                                <div className={styles.raiting}>
                                    <h4>{item.head}</h4>
                                    <img src={im.star} alt="" />
                                </div>
                                <div className={styles.block}>
                                    <div>
                                        <p className={styles.grey}>Host</p>
                                        <p>{item.host}</p>
                                    </div>
                                    <button>Listen Podcast <span>↗</span></button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.video} style={{ backgroundImage: `url(${item.bg})` }}>
                                <button><img src={im.play} alt="" /></button>
                            </div>
                            <div className={styles.text}>
                                <h2>{item.name}</h2>
                                <p>{item.text}</p>
                            </div>
                            <div className={styles.blocks}>
                                <div>
                                    <p className={styles.grey}>Total Episodes</p>
                                    <p>{item.episod}</p>
                                </div>
                                <div>
                                    <p className={styles.grey}>Average Episode Length</p>
                                    <p>{item.info}</p>
                                </div>
                                <div>
                                    <p className={styles.grey}>Release Frequency</p>
                                    <p>{item.reales}</p>
                                </div>
                            </div>
                        </div>
                    </div>))}
                </section>
                <section className={styles.light}>
                    <div>
                        <button>Stay Informed with Fresh Content</button>
                        <h5>Latest Podcast Episodes</h5> 
                    </div>
                </section>
                <section className={styles.sect3}>
                    {rolik.map((item, index) => (
                    <div className={styles.container}>
                        <div className={styles.size}>
                            <div className={styles.bagr} style={{ backgroundImage: `url(${item.img})` }}>
                                <div>
                                    <button><img src={im.play} alt="" /></button>
                                    <p>{item.time}</p>
                                </div>
                            </div>
                            <div className={styles.text}>
                                <h2>{item.name}</h2>
                                <p className={styles.gray}>{item.info}</p>
                            </div>
                            <button className={styles.butt}>Listen Podcast <span>↗</span></button>
                        </div>    
                    </div>))}
                </section>
            </main>
        </>
    )
}
export default Page4