import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import config from '../config/config';

const Footer = () => {
    useEffect(() => {
    }, [])

    return (
        <>
            <div className="footer">
                <div className="copyright">
                    <p>Copyright © Designed &amp; Developed by <a href="https://themeforest.net/user/quixlab">Quixlab</a> 2018</p>
                </div>
            </div>
        </>
    );
}

export default Footer;




