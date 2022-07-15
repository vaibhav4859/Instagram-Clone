import classes from './OrContainer.module.css';

const OrContainer = () => {
    return (
        <div className={classes['or-container']}>
            <div className={classes.line}></div>
            <div className={classes.or}>OR</div>
            <div className={classes.line}></div>
        </div>
    );
};

export default OrContainer;