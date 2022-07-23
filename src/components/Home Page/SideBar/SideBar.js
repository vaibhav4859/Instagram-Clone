
import ProfilePhoto from '../../../images/vbv.jpg';
import classes from './SideBar.module.css';

const account = <div className={classes.accounts}>
  <div className={classes.account}>
    <img alt='vbv' src={ProfilePhoto} />
    <div className={classes.detail2}>
      <span className={classes.username}>vaibhav_4859</span>
      <span className={classes.followed}>Vaibhav</span>
    </div>
    <span className={classes.follow}>Follow</span>
  </div>
</div>


const SideBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.switch}>
        <img alt='vbv' src={ProfilePhoto} />
        <div className={classes.detail}>
          <span className={classes.username}>vaibhav_4859</span>
          <span className={classes.name}>Vaibhav</span>
        </div>
        <span className={classes.switchtxt}>Switch</span>
      </div>
      <div className={classes.suggestions}>
        <span className={classes.txt}>Suggestions For You <a href='/explore/people'>See All</a></span>
        {account}
        {account}
        {account}
        {account}
        {account}
      </div>
      <div className={classes.footer}>
        <ul className={classes.links}>
        <li><a href='https://about.instagram.com/'>About</a></li>
        <li><a href='https://help.instagram.com/'>Help</a></li>
        <li><a href='https://about.instagram.com/en_US/blog'>Press</a></li>
        <li><a href='https://developers.facebook.com/docs/instagram'>API</a></li>
        <li><a href='https://about.instagram.com/about-us/careers'>Jobs</a></li>
        <li><a href='https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect'>Privacy</a></li>
        <li><a href='https://help.instagram.com/581066165581870'>Terms</a></li>
        <li><a href='https://www.instagram.com/explore/locations/'>Locations</a></li>
      </ul>
      <span>© 2022 INSTAGRAM FROM META</span>
    </div>
    </div >
  );
};

export default SideBar;