import classes from './Header.module.css';
import Logo from '../../images/logo.png'

function Header() {
    return (
        <div className={classes.header}>
            <img alt='Error Loading' src={Logo} />
        </div>
    )
}

export default Header