import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {im} from '../img/img.js';
import axios from "axios"
import styles from './page1.module.scss'


function Page1() {
    const [people, setPeople] = useState([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/people")
        .then(res => setPeople(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <>
            <main>
                <section className={styles.sect1}>
                    <div className={styles.left}>
                        <div className={styles.info}>
                            <p className={styles.subtitle}>Your Journey to Tomorrow Begins Here</p>
                            <h1>Explore the Frontiers of<br />Artificial Intelligence</h1>
                            <p className={styles.text}> Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
                        </div>
                        <div className={styles.stats}>
                            <div>
                                <h2>300<span>+</span></h2>
                                <p>Resources available</p>
                            </div>
                            <div>
                                <h2>12k<span>+</span></h2>
                                <p>Total Downloads</p>
                            </div>
                            <div>
                                <h2>10k<span>+</span></h2>
                                <p>Active Users</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.resources}>
                            <div className={styles.people}>
                                {/* сюда твоя картинка */}
                                <img src="" alt="" />
                            </div>
                            <h3>Explore 1000+ resources</h3>
                            <p> Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                            <button>Explore Resources<span>↗</span></button>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                {/* твоя картинка */}
                                <img src="" alt="" />
                            </div>
                            <div className={styles.cardinfo}>
                                <h3>Latest News Updates</h3>
                                <p>Stay Current</p>
                                <span>Over 1,000 articles published monthly</span>
                            </div>
                            <button>↗</button>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                {/* твоя картинка */}
                                <img src="" alt="" />
                            </div>
                            <div className={styles.cardinfo}>
                                <h3>Expert Contributors</h3>
                                <p>Trusted Insights</p>
                                <span>50+ renowned AI experts on our team</span>
                            </div>
                            <button>↗</button>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                {/* твоя картинка */}
                                <img src="" alt="" />
                            </div>
                            <div className={styles.cardinfo}>
                                <h3>Global Readership</h3>
                                <p>Worldwide Impact</p>
                                <span>2 million monthly readers</span>
                            </div>
                            <button>↗</button>
                        </div>
                    </div>
                </section>
                <section className={styles.light}>
                    <div>
                        <button className={styles.size1}>Unlock the Power of</button>
                        <h5>FutureTech Features</h5>
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.size}>
                        <div className={styles.left}>
                            <img src={im.icon7} alt="" />
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
                    <div className={styles.size}>
                        <div className={styles.left}>
                            <img src={im.icon8} alt="" />
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
                        <button>A Knowledge Treasure Trove</button>
                        <h5>Explore FutureTech's In-Depth Blog Posts</h5> 
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
                <section className={styles.lightv3}>
                    <div>
                        <button className={styles.size1}>Your Gateway to In-Depth Information</button>
                        <h5>Unlock Valuable Knowledge with FutureTech's Resources</h5> 
                    </div>
                    <button>View All News <span>↗</span></button>
                </section>
                <section className={styles.sect4}>
                    <div className={styles.block}>
                        <div className={styles.left}>
                            <img src={im.icon9} alt="" />
                            <h4>Ebooks</h4>
                            <p>Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
                            <button>Download Ebooks Now <span>↗</span></button>
                            <div>
                                <p className={styles.grey}>Downloaded By</p>
                                <p>10k + Users</p>
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.top}>
                                <h2>Variety of Topics</h2>
                                <p>Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
                            </div>
                            <div className={styles.bg1}></div>
                            <div>
                                <div>
                                    <p className={styles.grey}>Total Ebooks</p>
                                    <p>Over 100 ebooks</p>
                                </div>
                                <div>
                                    <div>
                                        <p className={styles.grey}>Download Formats</p>
                                        <p>PDF format for access.</p>
                                    </div>
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
                                <img src={im.icon10} alt="" />
                                <h4>Whitepapers</h4>
                                <p>Dive into comprehensive reports and analyses with our collection of whitepapers. </p>
                                <button>Download Ebooks Now <span>↗</span></button>
                                <div>
                                    <p className={styles.grey}>Downloaded By</p>
                                    <p>10k + Users</p>
                                </div>
                                <img src="" alt="" />
                        </div>
                        <div className={styles.right}>
                            <div>
                                <h2>Topics Coverage</h2>
                                <p>Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).</p>
                            </div>
                            <div className={styles.bg2}></div>
                            <div>
                                <div>
                                    <p className={styles.grey}>Total Whitepapers</p>
                                    <p>Over 50 whitepapers</p>
                                </div>
                                <div>
                                    <div>
                                        <p className={styles.grey}>Download Formats</p>
                                        <p>PDF format for access.</p>
                                    </div>    
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
                        <button className={styles.size2}>What Our Readers Say</button>
                        <h5>Real Words from Real Readers</h5> 
                    </div>
                    <button>View All <span>↗</span></button>
                </section>
                <section className={styles.sect5}>
                    <div className={styles.size}>
                        <div className={styles.block}>
                            <div className={styles.prof}>
                                <img src={im.Profile1} alt="" />
                                <p>Sarah Thompson</p>
                                <p className={styles.grey}>San Francisco, USA</p>
                            </div>
                            <img src={im.star} alt="" className={styles.star}/>
                            <div className={styles.text}>
                                <p>The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.prof}>
                                <img src={im.Profile2} alt="" />
                                <p>Raj Patel</p>
                                <p className={styles.grey}>Mumbai, India</p>
                            </div>
                            <img src={im.star} alt="" className={styles.star}/>
                            <div className={styles.text}>
                                <p>The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.prof}>
                                <img src={im.Profile3} alt="" />
                                <p>Emily Adams</p>
                                <p className={styles.grey}>London, UK</p>
                            </div>
                            <img src={im.star} alt="" className={styles.star}/>
                            <div className={styles.text}>
                                <p>The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect5}>
                    <div className={styles.size}>
                        <div className={styles.block}>
                            <div className={styles.prof}>
                                <img src={im.Profile4} alt="" />
                                <p>Alan Jackson</p>
                                <p className={styles.grey}>Houston, USA</p>
                            </div>
                            <img src={im.star} alt="" className={styles.star}/>
                            <div className={styles.text}>
                                <p>The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.prof}>
                                <img src={im.Profile5} alt="" />
                                <p>Jessica Miller</p>
                                <p className={styles.grey}>Boston, USA</p>
                            </div>
                            <img src={im.star} alt="" className={styles.star}/>
                            <div className={styles.text}>
                                <p>The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.prof}>
                                <img src={im.Profile6} alt="" />
                                <p>Diego Lopez</p>
                                <p className={styles.grey}>Barcelona, Spain</p>
                            </div>
                            <img src={im.star} alt="" className={styles.star}/>
                            <div className={styles.text}>
                                <p>The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Page1