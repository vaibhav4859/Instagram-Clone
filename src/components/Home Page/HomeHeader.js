
import SearchBar from './SearchBar';
import Logo from '../../images/logo.png'
import classes from './HomeHeader.module.css';

const HomeHeader = () => {
    return (
        <nav className={classes.header}>
            <img alt='Error Loading' src={Logo} className={classes.logo} />
            <SearchBar />
        </nav>
    )
}

export default HomeHeader;