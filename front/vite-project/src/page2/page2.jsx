import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {im} from '../img/img.js';
import axios from "axios"
import styles from './page2.module.scss'


function Page2() {
    const [neww, setNeww] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/neww")
        .then(res => setNeww(res.data))
        .catch(err => console.error(err));
    }, []);
    const [news, setNews] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/news")
        .then(res => setNews(res.data))
        .catch(err => console.error(err));
    }, []);
    const [people, setPeople] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/people")
        .then(res => setPeople(res.data))
        .catch(err => console.error(err));
    }, []);
    const [video, setVideo] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/video")
        .then(res => setVideo(res.data))
        .catch(err => console.error(err));
    }, []);
    return (
        <>
            <main>
                <section className={styles.sect1}>
                    <h6>Today's Headlines: Stay</h6>
                    <div>
                        <h6>Informed</h6>
                        <p>Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</p>
                    </div>
                </section>
                <section className={styles.sect2}>
                    {neww.map((item, index) => (
                    <div className={styles.top}>
                        <div className={styles.image} style={{ backgroundImage: `url(${item.img})` }}></div>
                        <div className={styles.info}>
                            <div className={styles.head}>
                                <h3>{item.name}</h3>
                                <p>{item.text}</p>
                            </div>
                            <div className={styles.tegs}>
                                <div>
                                    <p className={styles.grey}>Category</p>
                                    <p>{item.categ}</p>
                                </div>
                                <div>
                                    <p className={styles.grey}>Publication Date</p>
                                    <p>{item.date}</p>
                                </div>
                                <div>
                                    <p className={styles.grey}>Author</p>
                                    <p>{item.author}</p>
                                </div>
                            </div>
                            <div className={styles.reaction}>
                                <div>
                                    <button><img src={im.like} alt="" /> {item.liike}</button>
                                    <button><img src={im.send} alt="" /> {item.send}</button>
                                </div>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>))}
                    <div className={styles.line}></div>
                    <div className={styles.bottom}>
                        {news.map((item, index) => (
                        <div className={styles.content}>
                            <div className={styles.img} style={{ backgroundImage: `url(${item.img})` }}></div>
                            <h2>{item.name}</h2>
                            <p className={styles.grey}>{item.categ}</p>
                            <div className={styles.niz}>
                                <div>
                                    <button><img src={im.like} alt="" /> {item.liike}</button>
                                    <button><img src={im.send} alt="" /> {item.send}</button>
                                </div>
                                <button>Read More <span>↗</span></button>
                            </div>
                        </div>))}
                    </div>
                </section>
                <section className={styles.lightv2}>
                    <div>
                        <button>Welcome to Our News Hub</button>
                        <h5>Discover the World of Headlines</h5> 
                    </div>
                    <button>View All News <span>↗</span></button>
                </section>
                <section className={styles.sect3}>
                    <div className={styles.line}></div>
                    <div className={styles.menu}>
                        <button className={styles.actv}>All</button>
                        <button>Technology</button>
                        <button>Politics</button>
                        <button>Health</button>
                        <button>Environment</button>
                        <button>Sports</button>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.content}>
                        {people.map((item, index) => (
                        <div className={styles.container}>
                            <div className={styles.one}>
                                <img src={item.img} alt="" />
                                <div>
                                    <p>{item.name}</p>
                                    <p className={styles.grey}>{item.work}</p>
                                </div>
                            </div>
                            <div className={styles.two}>
                                <p className={styles.data}>{item.data}</p>
                                <div className={styles.text}>
                                    <div>
                                        <h2>{item.head}</h2>
                                        <p>{item.text}</p>
                                    </div>
                                    <button>Read More <span>↗</span></button>
                                </div>
                                <div className={styles.reaction}>
                                    <button><img src={im.like} alt="" /> {item.liike}</button>
                                    <button><img src={im.comm} alt="" /> {item.comm}</button>
                                    <button><img src={im.send} alt="" /> {item.send}</button>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </section>
                <section className={styles.lightv2}>
                    <div>
                        <button className={styles.size1}>Featured Videos</button>
                        <h5>Visual Insights for the Modern Viewer</h5> 
                    </div>
                    <button>View All News <span>↗</span></button>
                </section>
                <section className={styles.sect4}>
                        {video.map((item, index) => (
                        <div className={styles.blocks}>
                            <div className={styles.block}>
                                <div className={styles.video} style={{ backgroundImage: `url(${item.img})` }}>
                                    <div>
                                        <button><img src={im.play} alt="" /></button>
                                        <p>{item.time}</p>
                                    </div>
                                </div>
                                <h2>{item.name}</h2>
                                <p>{item.text}</p>
                            </div>    
                        </div>))}
                </section>
            </main>
        </>
    )
}
export default Page2