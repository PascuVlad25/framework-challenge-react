import './Presentation.scss';
import { Logo } from '..';

export default function Presentation() {
    return (
        <div className="main-container">
            <Logo />
            <span class="glow-1"></span>
            <span class="glow-2"></span>
        </div>
    )
}