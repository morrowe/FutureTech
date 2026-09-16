import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {im} from '../img/img.js';
import axios from "axios"
import styles from './page1.module.scss'


function Page1() {

    return (
        <>
            <main>
                <section className={styles.sect1}>

                </section>
                <section className={styles.light}>
                    <button className={styles.size1}>Unlock the Power of</button>
                    <h5>FutureTech Features</h5>
                </section>
                <section className={styles.sect2}>
                    <div>
                        <div className={styles.left}>
                            <img src="" alt="" />
                            <h4>Future Technology Blog</h4>
                            <p>Stay informed with our blog section dedicated to future technology.</p>
                        </div>
                        <div className={styles.right}>
                            <div>
                                <h2>Quantity</h2>
                                <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                            </div>
                            <div>
                                <h2>Variety</h2>
                                <p>Articles cover fields like AI, robotics, biotechnology, and more.</p>
                            </div>
                            <div>
                                <h2>Frequency</h2>
                                <p>Fresh content added daily to keep you up to date.</p>
                            </div>
                            <div>
                                <h2>Authoritative</h2>
                                <p>Written by our team of tech experts and industry professionals.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div>
                        <div className={styles.left}>
                            <img src="" alt="" />
                            <h4>Research Insights Blogs</h4>
                            <p>Dive deep into future technology concepts with our research section.</p>
                        </div>
                        <div className={styles.right}>
                            <div>
                                <h2>Depth</h2>
                                <p>500+ research articles for in-depth understanding.</p>
                            </div>
                            <div>
                                <h2>Graphics</h2>
                                <p>Visual aids and infographics to enhance comprehension.</p>
                            </div>
                            <div>
                                <h2>Contributors</h2>
                                <p>Contributions from tech researchers and academics.</p>
                            </div>
                            <div>
                                <h2>Trends</h2>
                                <p>Explore emerging trends in future technology research.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.lightv2}>
                    <div>
                        <button className={styles.size1}>A Knowledge Treasure Trove</button>
                        <h5>Explore FutureTech's In-Depth Blog Posts</h5> 
                    </div>
                    <button>View All News <span>↗</span></button>
                </section>
                <section className={styles.sect3}>
                    <div>
                        <button>All</button>
                        <button>Quantum Computing</button>
                        <button>AI Ethics</button>
                        <button>Space Exploration</button>
                        <button>Biotechnology</button>
                        <button>Renewable Energy</button>
                    </div>
                    <div>
                        <div>

                        </div>
                    </div>
                </section>
                <section className={styles.lightv2}>
                    <div>
                        <button className={styles.size1}>Your Gateway to In-Depth Information</button>
                        <h5>Unlock Valuable Knowledge with FutureTech's Resources</h5> 
                    </div>
                    <button>View All News <span>↗</span></button>
                </section>
                <section className={styles.sect4}>
                    <div className={styles.block}>
                        <div className={styles.left}>
                            <div>
                                <img src="" alt="" />
                                <h4>Ebooks</h4>
                                <p>Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
                                <button>Download Ebooks Now <span>↗</span></button>
                            </div>
                            <div>
                                <div>
                                    <p className={styles.grey}>Downloaded By</p>
                                    <p>10k + Users</p>
                                </div>
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div>
                                <h2>Variety of Topics</h2>
                                <p>Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
                            </div>
                            <div className={styles.bg}></div>
                            <div>
                                <div>
                                    <p className={styles.grey}>Total Ebooks</p>
                                    <p>Over 100 ebooks</p>
                                </div>
                                <div>
                                    <p className={styles.grey}>Download Formats</p>
                                    <p>PDF format for access.</p>
                                </div>
                                <div>
                                    <button>Preview <img src="" alt="" /></button>
                                </div>
                            </div>
                            <div>
                                <p className={styles.grey}>Average Author Expertise</p>
                                <p>Ebooks are authored by renowned experts with an average of 15 years of experience</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect4}>
                    <div className={styles.block}>
                        <div className={styles.left}>
                            <div>
                                <img src="" alt="" />
                                <h4>Whitepapers</h4>
                                <p>Dive into comprehensive reports and analyses with our collection of whitepapers. </p>
                                <button>Download Ebooks Now <span>↗</span></button>
                            </div>
                            <div>
                                <div>
                                    <p className={styles.grey}>Downloaded By</p>
                                    <p>10k + Users</p>
                                </div>
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div>
                                <h2>Topics Coverage</h2>
                                <p>Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).</p>
                            </div>
                            <div className={styles.bg}></div>
                            <div>
                                <div>
                                    <p className={styles.grey}>Total Whitepapers</p>
                                    <p>Over 50 whitepapers</p>
                                </div>
                                <div>
                                    <p className={styles.grey}>Download Formats</p>
                                    <p>PDF format for access.</p>
                                </div>
                                <div>
                                    <button>Preview <img src="" alt="" /></button>
                                </div>
                            </div>
                            <div>
                                <p className={styles.grey}>Average Author Expertise</p>
                                <p>Whitepapers are authored by subject matter experts with an average of 20 years of experience.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.lightv2}>
                    <div>
                        <button className={styles.size1}>What Our Readers Say</button>
                        <h5>Real Words from Real Readers</h5> 
                    </div>
                    <button>View All Testimonials <span>↗</span></button>
                </section>
                <section>
                    <div>
                        
                    </div>
                </section>
            </main>
        </>
    )
}
export default Page1