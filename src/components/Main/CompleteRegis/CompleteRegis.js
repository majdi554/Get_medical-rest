import React from "react";
import {useContext} from "react";
import {Page} from "../../Store/ClickContext";
import {bankInfor, vi, en } from "../../Data/Data";
import icon from '../../../img/791955-middle-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';

const CompleteRegis = ({formData, setFormData}) => {
    const context = useContext(Page);
    let type;
    context.translate === 0 ? type = vi : type = en;
    const initialSate = {
        input: '',
        valueButtonService: '',
        service: 0,
        validInputTime: [],
        toggleArray: [false, false, false, false, false],
        toggleArrayRow2: [false, false, false, false, false],
        validInputId: '',
        validInputSymptom: '',
        optionSelected: 'Chọn dịch vụ khám',
        name: '',
        dateOfBirth: '',
        numberPhone: '',
        gender: 'Chọn giới tính',
        address: ''
    }

    const clearState = () => {
        setFormData({...initialSate});
    }
    const home = () => {
        context.page_0();
        clearState();
    }
    return (
        <div className="shadow-sm d-flex justify-content-center align-items-center flex-column w-100 pb-5">
            <img className="img-fluid mt-5" src={icon} width="144px" height="69.2px"/>
            <div className="align-items-center d-flex justify-content-center flex-column mt-2 text_p h-auto">
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <p className="font_title">{type.form.form_4.successful_registration}</p>
                </div>
                {formData.valueButtonService === "Dịch vụ có thu phí" || formData.valueButtonService === "Paid service" ? <>
                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <p>{type.form.form_4.fee_confirmation.fee}: <strong>&#8363;200,000</strong></p>
                    </div>
                    {type.form.form_4.fee_confirmation.bankInfor.map(item => (
                        <>
                            <p><strong>{item.number}</strong><span className="text-color">{item.accountNumber}</span>
                            </p>
                            <p>{item.label}<span className="text-color">{item.name}</span></p>
                            <p>{item.labelBank}<span className="text-color">{item.nameBank}</span></p>
                        </>

                    ))}
                    <p>{type.form.form_4.fee_confirmation.content_bank}:<strong> {type.form.form_4.label_1} {formData.name} - {type.form.form_4.label_2} </strong></p>
                </> : <p>{type.form.form_4.label}:<strong> {type.form.form_4.label_1} {formData.name} - {type.form.form_4.label_2} </strong></p>}
                <div className="d-flex justify-content-center align-items-center flex-column mt-3 h-100">
                    <p>{type.form.form_4.notification}</p>
                    <p className="mt-none">{type.form.form_4.notification_1}</p>
                </div>

                <button onClick={home} className="btn btn-success text-white h-100">{type.form.form_4.button}</button>

            </div>
        </div>

    )
}
export default CompleteRegis;