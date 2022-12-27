import React, { useContext } from "react";
import logo from '../../img/logo.png';
import icon_vn from '../../img/Vietnam_26405.png';
import icon_us from '../../img/Usa_26407.png';
import { vi, en } from "../Data/Data";
import {Page} from "../Store/ClickContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import '../../App.css';

const Header = () => {
    const context = useContext(Page);
    let type;
    context.translate === 0 ? type = vi : type = en;
    const classNonActiveLanguage = "mr-1 cursor";
    const classActiveLanguage = "mr-1 border_bottom pb-1 cursor";
    const vi_translate = () => {
        context.vi_page();
    }
    const en_translate = () => {
        context.en_page();
    }
    function handleSubmitButton(event) {
        event.preventDefault();
    }
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-light shadow-lg justify-content-between">
                <img className="img-fluid" width="149px" height="36.5px" src={logo}/>
                <div className="d-flex">
                    <p><FontAwesomeIcon icon={faCircleUser} />{type.header.cskh}</p>
                    <div className="language ml-3">
                        <form onSubmit={handleSubmitButton} className="d-flex">
                            <div className={context.translate === 0 ? classActiveLanguage : classNonActiveLanguage}>
                                <img width="18px" height="18px" src={icon_vn} onClick={vi_translate}/>
                            </div>
                            <div className={context.translate === 1 ? classActiveLanguage : classNonActiveLanguage}>
                                <img  width="18px" height="18px" src={icon_us} onClick={en_translate}/>
                            </div>




                        </form>
                    </div>

                </div>

            </nav>
        </div>

    )
}
export default Header;