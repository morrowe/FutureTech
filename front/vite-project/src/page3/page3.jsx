import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {im} from '../img/img.js';
import axios from "axios"
import styles from './page3.module.scss'


function Page3() {
    const [news, setNews] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/news")
        .then(res => setNews(res.data))
        .catch(err => console.error(err));
    }, []);
    return (
        <>
            <main>
                <section className={styles.sect1}>
                    <div className={styles.bg}><h1>The Rise of Artificial Intelligence in Healthcare</h1></div>
                    <div className={styles.bott}>
                        <div className={styles.left}>
                            <div className={styles.top}>
                                <div>
                                    <h2>Introduction</h2>
                                    <p>Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.</p>
                                </div>
                            </div>
                            <div className={styles.text}>
                                <div>
                                    <h2>Artificial Intelligence (AI)</h2>
                                    <p>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p>
                                    <p>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p>
                                </div>
                                <div>
                                    <h2>Predictive Analytics and Disease Prevention</h2>
                                    <p>One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.</p>
                                </div>
                                <button>Read Full Blog ↓</button>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.react}>
                                <div className={styles.act}>
                                    <button><img src={im.like2} alt="" /> 24.5k</button>
                                    <button><img src={im.eyes} alt="" /> 50k</button>
                                    <button><img src={im.send2} alt="" /> 206k</button>
                                </div>    
                            </div>
                            <div className={styles.bottom}>
                                <div className={styles.razdel}>
                                    <div className={styles.info}>
                                        <div>
                                            <p className={styles.grey}>Publication Date</p>
                                            <p>October 15, 2023</p>
                                        </div>
                                        <div>
                                            <p className={styles.grey}>Category</p>
                                            <p>Healthcare</p>
                                        </div>
                                        <div>
                                            <p className={styles.grey}>Reading Time</p>
                                            <p>10 Min</p>
                                        </div>
                                        <div>
                                            <p className={styles.grey}>Author Name</p>
                                            <p>Dr. Emily Walker</p>
                                        </div>
                                    </div>
                                    <div className={styles.table}>
                                        <p className={styles.name}>Table of Contents</p>
                                        <div>
                                            <p>• Introduction</p>
                                            <p>• AI in Diagnostic Imaging</p>
                                            <p>• Predictive Analytics and Disease Prevention</p>
                                            <p>• Personalized Treatment Plans</p>
                                            <p>• Drug Discovery and Research</p>
                                            <p>• AI in Telemedicine</p>
                                            <p>• Ethical Considerations</p>
                                            <p>• The Future of AI in Healthcare</p>
                                            <p>• Conclusion</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.head}>
                        <h2>Similar News</h2>
                        <button>View All News <span>↗</span></button>
                    </div>
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
            </main>
        </>
    )
}
export default Page3