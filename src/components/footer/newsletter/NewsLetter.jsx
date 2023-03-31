import "./newsletter.scss"

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const NewsLetter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email address" />
                    <button>Subscribe</button>
                </div>
                <div className="text">
                    Will be used in accordance with your privacy policy
                </div>
                <div className="social-icons">
                    <div className="icon">
                        <FacebookIcon />
                    </div>
                    <div className="icon">
                        <TwitterIcon />
                    </div>
                    <div className="icon">
                        <LinkedInIcon />
                    </div>
                    <div className="icon">
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter