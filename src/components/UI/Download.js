import classes from './Download.module.css';
import AppStore from '../../images/app-store.png';
import PlayStore from '../../images/play-store.png';

const Download = () => {
    return (
        <div className={classes.box}>
            <p>Get the app.</p>
            <div className={classes.images}>
                <a href='https://apps.apple.com/app/instagram/id389801252?vt=lo'>
                    <img alt='Error' src={AppStore} />
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&gl=US'>
                    <img alt='Error' src={PlayStore} style={{marginLeft: '1rem'}} />
                </a>
            </div>
        </div>
    )
};

export default Download;