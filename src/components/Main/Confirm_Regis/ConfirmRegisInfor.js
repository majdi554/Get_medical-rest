import React from "react";
import {useContext} from "react";
import {Page} from "../../Store/ClickContext";
import { vi, en } from '../../Data/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';

const ConfirmRegisInfor = ({formData, setFormData}) => {
    const context = useContext(Page);
    let type;
    context.translate === 0 ? type = vi : type = en;

    const prePage = () => {
        context.page_1();
    }
    const nextPage = () => {
        context.page_3();
    }
    return (
        <div className="shadow-sm d-flex justify-content-center align-items-center flex-column w-100 pb-5">
            <div className="d-flex justify-content-center align-items-center mt-3">
                <p className="font_title">{type.form.form_3.form_title}</p>
            </div>
            <div className="w-100 row sub_form text-13 mt-2">

                <div className="col-sm-12 col-lg-6 col-md-12 border-r">
                    <div className="w-100">
                        <p className="ml-3 font_title">{type.form.form_2.form_title}</p>
                    </div>

                    <div className="w-100">
                        <p className="ml-3">{type.form.form_2.name}: <span className="text-color text-button">{formData.name}</span>
                        </p>

                    </div>
                    <div className="w-100">
                        <p className="ml-3">{type.form.form_2.birthday}: <span
                            className="text-color text-button">{formData.dateOfBirth}</span></p>

                    </div>
                    <div className="w-100">
                        <p className="ml-3">{type.form.form_2.phone}: <span
                            className="text-color text-button">{formData.numberPhone}</span></p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">{type.form.form_2.gender}: <span className="text-color text-button">{formData.gender}</span>
                        </p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">{type.form.form_2.address}: <span className="text-color text-button">{formData.address}</span>
                        </p>
                    </div>

                </div>
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-100">
                        <p className="ml-3 font_title">{type.form.form_1.form_title}</p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">{type.form.form_1.service}: <span
                            className="text-color text-button">{formData.valueButtonService}</span></p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">{type.form.form_1.examination_service}: <span
                            className="text-color text-button">{formData.optionSelected}</span></p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">{type.form.form_1.examination_date}: <span
                            className="text-color text-button">{formData.input}</span></p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">{type.form.form_1.examination_time}: <span
                            className="text-color text-button">{formData.validInputTime.map(item => (<li>{item}</li>))}</span></p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">{type.form.form_1.id_person}: <span
                            className="text-color text-button">{formData.validInputId}</span></p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">{type.form.form_1.id_person}: <span
                            className="text-color text-button">{formData.validInputSymptom}</span></p>
                    </div>
                </div>

            </div>
            <div className="row justify-content-center main mt-none mb-4 w-100 mt-5">
                <button onClick={prePage}
                        className="col-sm-4 bg-color btn p-2 text-button border-success bt mr-2 margin">
                    {type.form.form_3.button_pre}
                </button>
                <button onClick={nextPage}
                        className="col-sm-4 btn bg-color-active p-2 text-button bt margin text-white">
                    {type.form.form_3.button_confirm}
                </button>
            </div>

        </div>
    )
}
export default ConfirmRegisInfor;