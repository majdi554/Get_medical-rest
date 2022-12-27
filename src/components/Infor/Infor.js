import React, { useContext } from "react";
import { vi, en } from "../Data/Data";
import {Page} from "../Store/ClickContext";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Infor = () => {
    const context = useContext(Page);
    let type;
    context.translate === 0 ? type = vi : type = en;
    return (
        <div>
            <div className="bgg w-100 d-flex justify-content-center align-items-center text-center">
                <blockquote className="blockquote ">
                    <p className="mb-0 font-weight-bold color">{type.info.title}</p>
                    <small className="text">{type.info.sub_title}</small>
                </blockquote>
            </div>

        </div>
    )
}

export default Infor;