
import classes from './Footer.module.css';

const Footer = () => {

    return(
        <div className={classes.footer}>
            <div className={classes.line1}>
                <a href='https://about.facebook.com/'>Meta</a>
                <a href='https://about.instagram.com/'>About</a>
                <a href='https://about.instagram.com/en_US/blog'>Blog</a>
                <a href='https://about.instagram.com/about-us/careers'>Jobs</a>
                <a href='https://help.instagram.com/'>Help</a>
                <a href='https://developers.facebook.com/docs/instagram'>API</a>
                <a href='https://help.instagram.com/519522125107875/?maybe_redirect_pol=0'>Privacy</a>
                <a href='https://help.instagram.com/581066165581870'>Terms</a>
                <a href='https://www.instagram.com/directory/profiles/'>Top Accounts</a>
                <a href='https://www.instagram.com/directory/hashtags/'>Hashtags</a>
                <a href='https://www.instagram.com/explore/locations/'>Locations</a>
                <a href='https://www.instagram.com/web/lite/'>Instagram Lite</a>
                <a href='https://www.facebook.com/help/instagram/261704639352628'>Contact Uploading & Non-Users</a>
            </div>
            <div className={classes.line2}>
                <a href='https://www.instagram.com/topics/dance-and-performance/'>Dance</a>
                <a href='https://www.instagram.com/topics/food-and-drink/'>Food & Drink</a>
                <a href='https://www.instagram.com/topics/home-and-garden/'>Home & Garden</a>
                <a href='https://www.instagram.com/topics/music/'>Music</a>
                <a href='https://www.instagram.com/topics/visual-arts/'>Visual Arts</a>
            </div>
            <div className={classes.line3}>
                <span>English</span>
                <span>© 2022 Instagram from Meta</span>
            </div>
        </div>
    );
};

export default Footer;