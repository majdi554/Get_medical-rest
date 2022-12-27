import React from "react";
import {useState, useContext} from "react";
import FormSelect from "./FormSelect/FormSelect";
import FormSelectFree from "./FormSelectFree/FormSelectFree";
import {Page} from "../../Store/ClickContext";
import {date, timeRow2, vi, en, time } from "../../Data/Data";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';


const Form = ({formData, setFormData}) => {
    const context = useContext(Page);
    let type;
    context.translate === 0 ? type = vi : type = en;

    const [timeError, setTimeError] = useState('');
    const [idError, setIdError] = useState('');
    const [symptomError, setSymptomError] = useState('');
    const [dateError, setDateError] = useState('');
    const classActive = 'col-sm-12 col-lg-6 col-md-12 bg-color-active bt p-2 text-button text-white';
    const classNonActive = 'col-sm-12 col-lg-6 col-md-12 bt bg-color p-2 text-button';
    const classButtonActive = 'col-lg-2 col-md-4 col-sm-3 rounded bt bg-color-active text-white text-button p-2 ml-2';
    const classButtonNonActive = 'col-lg-2 col-md-4 col-sm-3 rounded bt bg-color text-button p-2 ml-2';

    const handleInputChange = (e) => {
        setDateError('');
        setFormData({...formData, input: e.target.value})
    }
    const handleTimeChange = (e) => {
        setTimeError('');
        if (!formData.validInputTime.includes(e.target.value)) {
            formData.validInputTime = formData.validInputTime.concat(e.target.value);
            setFormData({...formData});
        } else {
            for (let i = 0; i < formData.validInputTime.length; i++) {
                if (formData.validInputTime[i] === e.target.value) {
                    let temp = formData.validInputTime[i];
                    formData.validInputTime[i] = formData.validInputTime[formData.validInputTime.length - 1];
                    formData.validInputTime[formData.validInputTime.length - 1] = temp;
                }
                formData.validInputTime.pop();
            }
            setFormData({...formData});

        }


    }

    const handleIdChange = (e) => {
        setIdError('');
        setFormData({...formData, validInputId: e.target.value})
    }
    const handleSymptomChange = (e) => {
        setSymptomError('');
        setFormData({...formData, validInputSymptom: e.target.value})
    }

    const checkButtonClicked = (array) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === true) {
                return false;
            }
        }
        return true;
    }

    const handleFormSubmit = () => {
        if (formData.input === '' || (checkButtonClicked(formData.toggleArray) === true && checkButtonClicked(formData.toggleArrayRow2) === true) || formData.validInputId === '' || formData.validInputSymptom === '') {
            if (formData.input !== '') {

            } else {
                context.translate === 0 ? setDateError( 'Vui lòng chọn ngày đăng ký khám!') : setDateError('Please select your registration date!');
            }

            if (checkButtonClicked(formData.toggleArray) === true && checkButtonClicked(formData.toggleArrayRow2) === true) {
                context.translate === 0 ? setTimeError('Vui lòng chọn thời gian đăng ký khám!') : setTimeError('Please choose a time to register!');
            } else {
                setTimeError('');
            }

            if (formData.validInputId !== '') {

            } else {
               context.translate === 0 ? setIdError('Vui lòng nhập mã bệnh nhân!') : setIdError('Please enter patient code!');
            }

            if (formData.validInputSymptom !== '') {

            } else {
                context.translate === 0 ? setSymptomError('Vui lòng nhập triệu chứng lý do khám!') : setSymptomError('Please enter symptoms, reason for examination!');
            }



        }else {
            context.page_1();
        }

    }


    const handleClick = (i) => {
        const temp = [...formData.toggleArray];
        temp[i] = !temp[i];
        formData.toggleArray = temp;
        setFormData({...formData});
    }


    const handleClickRow2 = (i) => {
        const temp = [...formData.toggleArrayRow2];
        temp[i] = !temp[i];

        formData.toggleArrayRow2 = temp;
        setFormData({...formData});
    }

    function changeService(type) {
        formData.service = type
        setFormData({...formData});
    }


    function getStatus(day) {
        for (let i = 0; i < date.length; i++) {
            if (day === date[i].date) {
                return date[i].status;
            }
        }
        return -1;
    }

    function handleSubmitButton(event) {
        event.preventDefault();
    }

    const changeValueService = (e) => {
        formData.valueButtonService = e.target.value
        setFormData({...formData})

        console.log(formData);
    }
    console.log(type.form.warning_right)
    return (

        <div className="shadow-sm d-flex justify-content-center flex-column w-100 pb-5">
            <div className="d-flex justify-content-center mt-3 w-100">
                <div className="w-95 bg_color_1">
                    <p className="font_announce m-2 text-success p-1">{type.form.warning_left} <span
                        className="text-danger"> * </span>{type.form.warning_right}</p>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3">
                <p className="font_title">{type.form.form_1.form_title}</p>
            </div>
            <div className="w-100 mt-none">
                <p className="ml-3 text-14">{type.form.form_1.service}<span className="text-danger"> * </span></p>
                <div className="d-flex justify-content-center align-items-center w-100">
                    <div className="w-95 row">
                        <input type="button" value={type.form.form_1.paid_service} onClick={(e) => {
                            changeService(0);
                            changeValueService(e)
                        }}
                               className={formData.service === 0 ? classActive : classNonActive}/>

                        <input type="button" value={type.form.form_1.free_service} onClick={(e) => {
                            changeService(1);
                            changeValueService(e)
                        }}
                               className={formData.service === 0 ? classNonActive : classActive}/>

                    </div>

                </div>
            </div>
            <div className="row sub_form mt-2">
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-95 ml-3">
                        <p className="text-14">{type.form.form_1.examination_service}<span className="text-danger">*</span></p>
                        {
                            formData.service === 0 ? <FormSelect formData={formData} setFormData={setFormData}/> :
                                <FormSelectFree formData={formData} setFormData={setFormData}/>
                        }
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-95">
                        <p className="margin text-14">{type.form.form_1.examination_date}<span className="text-danger">*</span></p>
                        <div className="d-flex justify-content-center align-items-center w-100 margin">
                            <form className="w-100">
                                <div className="form-group">
                                    <input name="date" value={formData.input} id="date" onChange={handleInputChange}
                                           className="form-control text-button" type="date"/>
                                    {dateError && <div className="error-msg">{dateError}</div>}

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub_form row">
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-95 ml-3">
                        <p className="text-14">{type.form.form_1.examination_time}<span className="text-danger">*</span></p>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <form className="w-100" onSubmit={handleSubmitButton}>

                                <div className="form-group">
                                    {
                                        getStatus(formData.input) === -1 ? <div
                                                className="form-control text-button bg-color border-success text-center">
                                            {type.form.form_1.select_date}
                                            </div> :
                                            getStatus(formData.input) === 1 ?
                                                <>
                                                    <div className="form-group ml-1">
                                                        <div className="row">

                                                            {formData.toggleArray.map((item, i) => (
                                                                <input type="button" value={time[i]} onClick={(e) => {
                                                                    handleClick(i);
                                                                    handleTimeChange(e)
                                                                }}
                                                                       className={item ? classButtonActive : classButtonNonActive}/>

                                                            ))}


                                                        </div>
                                                        <div className="row mt-1">
                                                            {formData.toggleArrayRow2.map((item, i) => (
                                                                <input type="button" value={timeRow2[i]}
                                                                       onClick={(e) => {
                                                                           handleClickRow2(i);
                                                                           handleTimeChange(e)
                                                                       }}
                                                                       className={item ? classButtonActive : classButtonNonActive}/>

                                                            ))}
                                                        </div>
                                                        {timeError && checkButtonClicked(formData.toggleArray) === false || checkButtonClicked(formData.toggleArrayRow2) === false ? <></> :
                                                            <div className="error-msg">{timeError}</div>}
                                                    </div>
                                                </> :
                                                <p className="form-control text-button text-button bg-red text-center text-white">{type.form.form_1.non_date}</p>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-95">
                        <p className="margin text-14">{type.form.form_1.id_person}<span className="text-danger"> * </span></p>
                        <div className="d-flex justify-content-center align-items-center w-100 margin">
                            <form className="w-100">
                                <div className="form-group">
                                    <input value={formData.validInputId} onChange={handleIdChange}
                                           className="form-control text-button" type="text"
                                           placeholder={type.form.form_1.placeholder_id_patient}/>
                                    {idError && <div className="error-msg">{idError}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 mt-none ml-3 mt-2">
                <p className="text-14">{type.form.form_1.description}<span className="text-danger">*</span></p>
                <div className="d-flex justify-content-center align-items-center w-95">
                    <form className="w-100">
                        <div className="form-group">
                                    <textarea value={formData.validInputSymptom} onChange={handleSymptomChange}
                                              className="form-control text-button" id="exampleFormControlTextarea1"
                                              rows="2" placeholder={type.form.form_1.placeholder_description}></textarea>
                            {symptomError && <div className="error-msg">{symptomError}</div>}
                        </div>
                    </form>
                </div>
            </div>
            <div className="row justify-content-center main mt-4">
                <button className="col-sm-4 bg-color btn p-2 text-button border-success bt mr-2 margin">
                    {type.form.form_1.button_attach_documents}
                </button>
                <button onClick={handleFormSubmit}
                        className="col-sm-4 btn bg-color-active p-2 text-button bt margin text-white">
                    {type.form.form_1.button_continue}
                </button>
            </div>

        </div>

    )
}
export default Form;
