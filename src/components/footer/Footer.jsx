import "./footer.scss"
import payment from "../../assets/payment.png"
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi in voluptatibus odit nemo magni, sunt eaque et exercitationem, modi aliquid,
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <AddLocationIcon />
                        <div className="text">
                            chattogram bangladesh
                        </div>
                    </div>
                    <div className="c-item">
                        <PhoneAndroidIcon />
                        <div className="text">
                            Phone: 11111110223
                        </div>
                    </div>
                    <div className="c-item">
                        <EmailIcon />
                        <div className="text">
                            Email: mdaiman@gmail.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">Headpone</div>
                    <div className="text">Headpone</div>
                    <div className="text">Headpone</div>
                    <div className="text">Headpone</div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Contact</div>
                    <div className="text">Privacy</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, alias?
                    </div>
                    <img src={payment} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer