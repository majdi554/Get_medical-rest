import React, {useState} from "react";
import {useContext} from "react";
import { vi, en } from '../../Data/Data';
import {Page} from "../../Store/ClickContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';

const FormPatientInfor = ({formData, setFormData}) => {
    const context = useContext(Page);
    let type;
    context.translate === 0 ? type = vi : type = en;

    const [nameError, setNameError] = useState('');
    const [dateOfBirthError, setDateOfBirthError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [addressError, setAddressError] = useState('');

    const handleNameChange = (e) => {
        setNameError('');
        setFormData({...formData, name: e.target.value})
    }

    const handleDateOfBirthChange = (e) => {
        setDateOfBirthError('');
        setFormData({...formData, dateOfBirth: e.target.value})
    }

    const handlePhoneChange = (e) => {
        setPhoneError('');
        setFormData({...formData, numberPhone: e.target.value})
    }

    const handleAddressChange = (e) => {
        setAddressError('');
        setFormData({...formData, address: e.target.value})
    }

    const handleChangeOptionGender = (e) => {
        setFormData({...formData, gender: e.target.value})
    }

    const prePage = () => {
        context.page_0();
    }

    const handleFormPatientInforSubmit = () => {
        if (formData.name === '' || formData.dateOfBirth === '' || formData.numberPhone === '' || formData.address === '') {
            if (formData.name !== '') {

            } else {
                context.translate === 0 ? setNameError('Vui lòng nhập họ và tên!') : setNameError('Please enter your full name!');
            }

            if (formData.dateOfBirth !== '') {

            } else {
                context.translate === 0 ? setDateOfBirthError('Vui lòng chọn ngày sinh!') : setDateOfBirthError('Please select your date of birth!');
            }

            if (formData.numberPhone !== '') {

            } else {
               context.translate === 0 ? setPhoneError('Vui lòng nhập số điện thoại!') : setPhoneError('Please enter the phone number!');
            }

            if (formData.address !== '') {

            } else {
                context.translate === 0 ? setAddressError('Vui lòng nhập địa chỉ!') : setAddressError('Please enter your address!');
            }
        } else {
            context.page_2();

        }

    }

    return (
        <div className="shadow-sm d-flex justify-content-center flex-column w-100 pb-5">
            <div className="d-flex justify-content-center mt-3 w-100">
                <div className="w-95 bg_color_1">

                    <p className="font_announce m-2 text-success p-1">{type.form.warning_left}<span
                        className="text-danger">*</span>{type.form.warning_right}</p>

                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3">
                <p className="font_title">{type.form.form_2.form_title}</p>
            </div>

            <div className="row sub_form mt-2">
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-95 ml-3">
                        <p className="text-14">{type.form.form_2.name}<span className="text-danger">*</span></p>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <form className="w-100">
                                <div className="form-group">
                                    <input value={formData.name} onChange={handleNameChange}
                                           className="form-control text-button" type="text" placeholder={type.form.form_2.placeholder_name}/>
                                    {nameError && <div className="error-msg">{nameError}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-95">
                        <p className="margin text-14">{type.form.form_2.birthday}<span className="text-danger">*</span></p>
                        <div className="d-flex justify-content-center align-items-center w-100 margin">
                            <form className="w-100">
                                <div className="form-group">
                                    <input value={formData.dateOfBirth} onChange={handleDateOfBirthChange}
                                           className="form-control text-button" type="date"/>
                                    {dateOfBirthError && <div className="error-msg">{dateOfBirthError}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub_form row">
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-95 ml-3">
                        <p className="text-14">{type.form.form_2.phone}<span className="text-danger">*</span></p>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <form className="w-100">
                                <div className="form-group">
                                    <input value={formData.numberPhone} onChange={handlePhoneChange}
                                           className="form-control text-button" type="text"
                                           placeholder={type.form.form_2.placeholder_phone}/>
                                    {phoneError && <div className="error-msg">{phoneError}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-95">
                        <p className="margin text-14">{type.form.form_2.gender}<span className="text-danger">*</span></p>
                        <div className="d-flex justify-content-center align-items-center w-100 margin">
                            <form className="w-100">
                                <div className="form-group">
                                    <select value={formData.gender} onChange={handleChangeOptionGender}
                                            className="form-control text-button" id="exampleFormControlSelect1">
                                        <option>{type.form.form_2.choose_gender}</option>
                                        <option value={type.form.form_2.male}>{type.form.form_2.male}</option>
                                        <option value={type.form.form_2.female}>{type.form.form_2.female}</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 mt-none ml-3 mt-2">
                <p className="text-14">{type.form.form_2.address}<span className="text-danger">*</span></p>
                <div className="d-flex justify-content-center align-items-center w-95">
                    <form className="w-100">
                        <div className="form-group">
                            <input value={formData.address} onChange={handleAddressChange}
                                   className="form-control text-button" type="text" placeholder={type.form.form_2.placeholder_address}/>
                            {addressError && <div className="error-msg">{addressError}</div>}
                        </div>
                    </form>
                </div>
            </div>
            <div className="row justify-content-center main mt-3">
                <button onClick={prePage}
                        className="col-sm-4 bg-color btn p-2 text-button border-success bt mr-2 margin">
                    {type.form.form_2.button_pre}
                </button>
                <button onClick={handleFormPatientInforSubmit}
                        className="col-sm-4 btn bg-color-active p-2 text-button bt margin text-white">
                    {type.form.form_2.button_check_registration}
                </button>
            </div>

        </div>
    )
}
export default FormPatientInfor;
