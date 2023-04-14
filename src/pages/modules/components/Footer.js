import '../../../style/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
    return (
        <footer>
            <div className='footer-wrapper'>
                <div className='app-wrapper'>
                    <div className='footer-contact-details'>
                        <div className="footer-logo">
                            <h5 className='footer-title'>ELECTRONICS</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum facilis distinctio.</p>
                        </div>
                        <div className='footer-delivery'>
                            <h5 className='footer-title'>Contact</h5>
                            <div className='delivery-time'>
                                <p>Location: ZindaBazar, Sylher-3100, Bangladesh</p>
                                <p>Phone: 01712345678</p>
                                <p>Email: example@gmail.com</p>
                            </div>
                        </div>
                        <div className='footer-newsletter'>
                            <h5 className='footer-title'>Newsletter</h5>
                            <p>Subscribe our newsletter</p>
                            <div className='newsletter'>
                                <input className='newsletter-input' type='email' placeholder='Enter your email' />
                                <button className='btn-item-fulfilled newsletter-btn'><TelegramIcon /></button>
                            </div>
                        </div>
                    </div>
                    <div className='footer-contact-details'>
                        <p className='follow-title'>Pet project - 2023, website made by Sihetii Yuliia.</p>
                        <div className='follow-wrapper'>
                            <p>Follow :</p>
                            <span><InstagramIcon /></span>
                            <span><EmailOutlinedIcon /></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
