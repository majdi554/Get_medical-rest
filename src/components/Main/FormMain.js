import React, {useState} from "react";
import {useContext} from "react";
import HeaderForm from "./HeaderForm/HeaderForm";
import Form from "./Form/Form";
import {Page} from "../Store/ClickContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import FormPatientInfor from "./FormPatientInfor/FormPatientInfor";
import ConfirmRegisInfor from "./Confirm_Regis/ConfirmRegisInfor";
import CompleteRegis from "./CompleteRegis/CompleteRegis";


const FormMain = () => {


    const [formData, setFormData] = useState({
        input: '',
        valueButtonService: 'Dịch vụ có thu phí',
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
    });

    const context = useContext(Page);
    return (
        // <div>
            <div>
                <div className="main d-flex justify-content-center align-items-center col-sm-7 mt-0 ml-auto mr-auto ">
                    <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
                        <HeaderForm/>
                        {
                            (context.page === 0 && <Form formData={formData} setFormData={setFormData}/>)
                            || (context.page === 1 && <FormPatientInfor formData={formData} setFormData={setFormData}/>)
                            || (context.page === 2 &&
                                <ConfirmRegisInfor formData={formData} setFormData={setFormData}/>)
                            || (context.page === 3) && <CompleteRegis formData={formData} setFormData={setFormData}/>
                        }

                    </div>
                </div>
            </div>
        // </div>
    )
}
export default FormMain;