import { Fragment, useEffect, useState } from "react"

import Img1 from '../../images/img1.png';
import Img2 from '../../images/img2.png';
import Img3 from '../../images/img3.png';
import Img4 from '../../images/img4.png';
import classes from './SlidingImage.module.css';

const IMAGE_URL = [Img1, Img2, Img3, Img4];

const SlidingImage = () => {
    const [iamgeNo, setImageNo] = useState(0);
    const length = IMAGE_URL.length;

    useEffect(() => {
        const timer = setInterval(() => {
            if (iamgeNo + 1 === length) setImageNo(0);
            else setImageNo(iamgeNo + 1);
        }, 2000);
        return (() => clearInterval(timer))
    }, [length, iamgeNo]);

    return (
        <Fragment>
            <div className={classes['background-image']}>
                <img alt="Error Loading" src={IMAGE_URL[iamgeNo]} className={classes.image} />
            </div>
        </Fragment>
    );
};

export default SlidingImage;