import React, { useContext } from "react";
import { vi, en } from "../../../Data/Data";
import { Page } from "../../../Store/ClickContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../App.css';

const FormSelectFree = ({formData, setFormData}) => {
    const context = useContext(Page);
    let type;
    context.translate === 0 ? type = vi : type = en;
    const handleChangeOption = (e) => {
        setFormData({...formData, optionSelected: e.target.value})
    }

    return (
        <div className=" w-100">
            <form className="w-100">
                <div className="form-group">
                    <select value={formData.optionSelected} onChange={handleChangeOption} name="serviceFree"
                            className="form-control text-button" id="exampleFormControlSelect1">
                        <option>{type.form.default_option}</option>
                        {type.form.form_1.serviceFree_option.map(otp => (
                                <optgroup key={otp.id} label={otp.name}>
                                    {
                                        otp.type.map(values => (
                                            <option value={values}>{values}</option>
                                        ))
                                    }
                                </optgroup>
                            )
                        )}
                    </select>
                </div>
            </form>
        </div>
    )
}
export default FormSelectFree;