import styles from './footer.module.scss'
import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import {im} from '../img/img.js';
import axios from "axios";


function Footer(){
    return(
     <>
        <footer>
            <div className={styles.end}>
                <div className={styles.company}>
                    <img src={im.logo2} alt="" />
                    <div>
                        <button>Learn, Connect, and Innovate</button>
                        <h5>Be Part of the Future Tech Revolution</h5>
                        <p>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
                    </div>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <div>
                            <h2>Resource Access</h2>
                            <img src={im.link} alt="" />
                        </div>
                        <p>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                    </div>
                    <div className={styles.block}>
                        <div>
                            <h2>Community Forum</h2>
                            <img src={im.link} alt="" />
                        </div>
                        <p>Join our active community forum to discuss industry trends, share insights, and collaborate with peers.</p>
                    </div>
                    <div className={styles.block}>
                        <div>
                            <h2>Tech Events</h2>
                            <img src={im.link} alt="" />
                        </div>
                        <p>Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.top}>
                    <div className={styles.content}>
                        <NavLink to={'/page1'} >Home</NavLink>
                        <p>Features</p>
                        <p>Blogs</p>
                        <div>
                            <p>Resources</p>
                            <button>New</button>
                        </div>
                        <p>Testimonials</p>
                        <p>Contact Us</p>
                        <p>Newsletter</p>
                    </div>
                    <div className={styles.content}>
                        <NavLink to={'/page2'} >News</NavLink>
                            <p>Trending Stories</p>
                            <p>Featured Videos</p>
                            <p>Technology</p>
                            <p>Health</p>
                            <p>Politics</p>
                            <p>Environment</p>
                    </div>
                    <div className={styles.content}>
                        <NavLink to={'/page3'} >Blogs</NavLink>
                            <p>Quantum Computing</p>
                            <p>AI Ethics</p>
                            <p>Space Exploration</p>
                            <div>
                                <p>Biotechnology</p>
                                <button>New</button>
                            </div>
                            <p>Renewable Energy</p>
                            <p>Biohacking</p>
                    </div>
                    <div className={styles.content}>
                        <NavLink to={'/page4'} >Podcasts</NavLink>
                            <p>AI Revolution</p>
                            <div>
                                <p>AI Revolution</p>
                                <button>New</button>
                            </div>
                            <p>TechTalk AI</p>
                            <p>AI Conversations</p>
                    </div>
                    <div className={styles.content}>
                        <NavLink to={'/page5'} >Resources</NavLink>
                            <button className={styles.butt}>Whitepapers<span>↗</span></button>
                            <button className={styles.butt}>Ebooks<span>↗</span></button>
                            <button className={styles.butt}>Reports<span>↗</span></button>
                            <button className={styles.butt}>Research Papers<span>↗</span></button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>Terms & Conditions<span></span>Privacy Policy</p>
                    <div>
                        <a href=""><img src={im.social1} alt="" /></a>
                        <a href=""><img src={im.social2} alt="" /></a>
                        <a href=""><img src={im.social3} alt="" /></a>
                    </div>
                    <p>© 2024 FutureTech. All rights reserved.</p>
                </div>
            </div>
        </footer>
     </>
    )
}

export default Footer