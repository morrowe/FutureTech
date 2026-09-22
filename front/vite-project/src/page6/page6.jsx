import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {im} from '../img/img.js';
import axios from "axios"
import styles from './page6.module.scss'


function Page6() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [messageText, setMessageText] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/api/contact', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                message: messageText
            })
            setFirstName('')
            setLastName('')
            setEmail('')
            setPhone('')
            setMessageText('')
            alert('Данные успешно отправлены')
        } catch (error) {
            console.error(error)
            alert('Ошибка при отправке данных')
        }
    }

    const [faqq, setFaqq] = useState([]);
    const [openId, setOpenId] = useState(null);
    useEffect(() => {
        axios
        .get("http://localhost:3000/api/faqq")
        .then((res) => setFaqq(res.data))
        .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <main>
                <section className={styles.sect1}>
                    <div className={styles.size}>
                        <div className={styles.div}>
                            <h2>General Inquiries</h2>
                            <div>
                                <button className={styles.burron}>contact@ai-podcasts.com<span>↗</span></button>
                                <button className={styles.burron}>+1 (123) 456-7890<span>↗</span></button>
                            </div>    
                        </div>
                        <div className={styles.div}>
                            <h2>Technical Support</h2>
                            <div>
                                <button className={styles.burron}>contact@ai-podcasts.com<span>↗</span></button>
                                <button className={styles.burron}>+1 (123) 456-7890<span>↗</span></button>
                            </div>
                        </div>
                        <div className={styles.div}>
                            <h2>Our Office</h2>
                            <div>
                                <p>Address: 123 AI Tech Avenue, Techville, 54321</p>
                                <button className={styles.burron}>Get Directions<span>↗</span></button>
                            </div>
                        </div>
                        <div className={styles.div}>
                            <h2>Connect with Us</h2>
                            <div>
                                <button><img src={im.social1} alt="" /></button>
                                <button><img src={im.social2} alt="" /></button>
                                <button><img src={im.social3} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect2}>
                        <div className={styles.left}>
                            <div>
                                <img src={im.icon5} alt="" />
                                <h5>Get in Touch with AI Podcasts</h5>
                            </div>    
                        </div>
                        <div className={styles.right}> 
                            <div className={styles.size}> 
                                <form onSubmit={handleSubmit}>
                                    <div className={styles.cont}> 
                                        <p>First Name</p> 
                                        <input 
                                            type="text" 
                                            placeholder="Enter First Name" 
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        /> 
                                    </div> 
                                    <div className={styles.cont}> 
                                        <p>Last Name</p> 
                                        <input 
                                            type="text" 
                                            placeholder="Enter Last Name" 
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                        /> 
                                    </div> 
                                    <div className={styles.cont}> 
                                        <p>Email</p> 
                                        <input 
                                            type="email" 
                                            placeholder="Enter your Email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        /> 
                                    </div> 
                                    <div className={styles.cont2}> 
                                        <p>Phone Number</p> 
                                        <div> 
                                            <button type="button"></button> 
                                            <input 
                                                type="text" 
                                                placeholder="Enter Phone Number" 
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                            /> 
                                        </div> 
                                    </div> 
                                    <div className={styles.cont3}> 
                                        <p>Message</p> 
                                        <input 
                                            type="text"
                                            value={messageText}
                                            onChange={(e) => setMessageText(e.target.value)}
                                            required
                                        /> 
                                    </div> 
                                    <div className={styles.cont4}> 
                                        <div> 
                                            <input type="checkbox" required /> 
                                            <p>I agree with Terms of Use and Privacy Policy</p> 
                                        </div>  
                                        <button type="submit">Send</button> 
                                    </div> 
                                </form>
                            </div> 
                        </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.left}>
                        <div>
                            <img src={im.icon6} alt="" />
                            <div>
                                <h4>Asked question</h4>
                                <p>If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts. </p>
                            </div>
                            <button>Ask Qustion<span>↗</span></button>
                        </div>
                    </div>
                    <div className={styles.ask}>
                        <div className={styles.info}>
                        {faqq.map((item) => (
                            <div key={item.id} className={styles.faq} onClick={() => setOpenId(openId === item.id ? null : item.id)}>
                                <div className={styles.top}>
                                    <p className={styles.twotwo}>{item.question}</p>
                                    <img
                                    src={
                                        openId === item.id
                                        ? im.minus
                                        : im.plus
                                    }/>
                                </div>
                                {openId === item.id && (
                                <div className={styles.answer}>
                                    <p>{item.answer}</p>
                                </div>
                                )}
                            </div>
                        ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Page6