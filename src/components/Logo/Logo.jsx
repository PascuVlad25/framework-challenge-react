import logo from '../../logo.svg';
import './Logo.scss';

export default function Logo() {
    return (
        <div className="framework-name-container">
            <div className="react-title">
                <div className="letter">R</div>
                <div className="letter">E</div>
                <div className="letter">A</div>
                <div className="letter">C</div>
                <div className="letter">T</div>
            </div>
            <div className="logo">
                <div class="bottom-fade"></div>
                <img src={logo} className="react-logo" alt="logo" />
            </div>
        </div>
    )
}