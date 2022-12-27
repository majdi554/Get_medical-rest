import React, { useContext } from "react";
import { vi, en } from "../../Data/Data";
import {Page} from "../../Store/ClickContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';

const HeaderForm = () => {
    const context = useContext(Page);
    let type;
    context.translate === 0 ? type = vi : type = en;
    return (
        <div className="w-100">
            <nav className="navbar navbar-expand-sm bg-color-active navbar-light w-100 mt-4 pb-0">
                <p className="text-white">{type.form.form_title_header}</p>
            </nav>
        </div>
    )
}

export default HeaderForm;