import "./Banner.scss"
import bannerImg from '../../../assets/banner.png'
const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Delectus, atque velit!
                        Facilis omnis itaque rerum
                        fugiat harum quia tenetur aperiam?
                    </p>
                    <div className="cts">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={bannerImg} alt="" />
            </div>
        </div>
    )
}

export default Banner