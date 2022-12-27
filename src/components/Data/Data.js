
export const date = [
    {
        id: 1,
        date: '2022-03-23',
        status: 0
    },
    {
        id: 2,
        date: '2022-03-17',
        status: 1
    }
];

export const time = [
    '7h-8h',
    '8h-9h',
    '9h-10h',
    '10h-11h',
    '11h-12h'
];
export const timeRow2 = [
    '12h-13h',
    '13h-14h',
    '14h-15h',
    '15h-16h',
    '16h-17h'
];

export const vi = {
    header: {
        cskh: ' Tổng đài hỗ trợ'
    },

    info: {
        title: 'Đăng ký khám chữa bệnh trực tuyến',
        sub_title: 'Bệnh nhân được thăm khám trực tuyến với đội ngũ bác sĩ chuyên khoa giỏi đang làm việc tại các bệnh viện lớn'
    },

    form: {
        form_title_header: 'Đăng ký thông tin khám trực tuyến',
        star: ' * ',
        warning_left: 'Các trường đánh dấu',
        warning_right: 'là các trường bắt buộc nhập. Thông tin bệnh nhân, thông tin đăng ký khám cần nhập chính xác',
        default_option: 'Chọn dịch vụ khám',
        form_1: {
            form_title: 'THÔNG TIN ĐĂNG KÝ KHÁM',
            service: 'Loại dịch vụ ',
            paid_service: 'Dịch vụ có thu phí',
            free_service: 'Tư vấn miễn phí',
            examination_service: 'Dịch vụ khám ',
            select_date: 'Chọn ngày đăng ký khám',
            non_date: 'Chưa có lịch khám vào ngày đã chọn',
            placeholder_id_patient: 'Nhập mã số bệnh nhân',
            placeholder_description: 'Nhập triệu chứng, lý do khám',
            service_option: [
                {

                    id: 1,
                    name: 'Sản phụ - khoa',
                    type: [
                        'Không yêu cầu bác sĩ chỉ định - ₫200,000',

                        'BSCKII Nguyễn Tuấn anh - ₫200,000'

                    ]
                },
                {
                    id: 2,
                    name: 'Khám nội',
                    type: [

                        'Không yêu cầu bác sĩ chỉ định - ₫200,000',

                        'BSCKII Nguyễn Thế Sơn - ₫200,000'

                    ]
                },
                {
                    id: 3,
                    name: 'Khoa nhi',
                    type: [
                        'Không yêu cầu bác sĩ chỉ định - ₫200,000',

                        'BSCKII Nguyễn Xuân giao - ₫200,0000'

                    ]
                }

            ],
            serviceFree_option: [
                {
                    id: 1,
                    name: 'Tư vấn sức khỏe',
                    type: [
                        'Không yêu cầu bác sĩ chỉ định',
                        'Bác sỹ Trần Lê Sơn',
                        'Bác sỹ Nguyễn Phương Thảo'
                    ]
                }
            ],
            examination_date: 'Ngày đăng ký khám ',
            examination_time: 'Thời gian đăng ký khám ',
            id_person: 'Nhập mã số bệnh nhân',
            description: 'Mô tả',
            button_attach_documents: 'Đính kèm tài liệu',
            button_continue: 'Tiếp theo'
        },
        form_2: {
            form_title: 'THÔNG TIN BỆNH NHÂN',
            name: 'Họ và tên ',
            birthday: 'Ngày sinh ',
            phone: 'Số điện thoại ',
            gender: 'Giới tính ',
            address: 'Địa chỉ ',
            button_pre: 'Quay lại',
            button_check_registration: 'Đăng ký khám',
            placeholder_name: 'Nhập họ tên',
            placeholder_phone: 'Nhập số điện thoại',
            choose_gender: 'Chọn giới tính',
            male: 'Nam',
            female: 'Nữ',
            placeholder_address: 'Nhập địa chỉ'
        },
        form_3: {
            form_title: 'XÁC NHẬN CÁC THÔNG TIN ĐĂNG KÝ',
            button_pre: 'Quay lại',
            button_confirm: 'Xác nhận đăng ký'
        },
        form_4: {
            successful_registration: 'ĐĂNG KÝ KHÁM THÀNH CÔNG',
            label: 'Đăng ký khám thành công',
            label_1: 'BN',
            label_2: 'Khám trực tuyến',
            fee_confirmation: {
                fee: 'Vui lòng nộp phí khám ',
                bankInfor: [
                    {
                        id: 1,
                        number: 'Tài khoản 1:',
                        accountNumber: ' 12910000153585',
                        label: 'Chủ tài khoản:',
                        name: ' Công ty TNHH tổ hợp y tế Phương Đông',
                        labelBank: 'Ngân hàng:',
                        nameBank: ' Ngân hàng BIDV. Chi nhánh Hoàng Mai Hà Nội'
                    },

                    {
                        id: 2,
                        number: 'Tài khoản 2:',
                        accountNumber: ' 0491000268686',
                        label: 'Chủ tài khoản:',
                        name: ' Công ty TNHH tổ hợp y tế Phương Đông',
                        labelBank: 'Ngân hàng:',
                        nameBank: ' Ngân hàng Vietcom bank'
                    },

                    {
                        id: 3,
                        number: 'Tài khoản 3:',
                        accountNumber: ' 1507201062383',
                        label: 'Chủ tài khoản:',
                        name: ' Công ty TNHH tổ hợp y tế Phương Đông',
                        labelBank: 'Ngân hàng:',
                        nameBank: ' Ngân hàng Agribank CN Cầu Giấy'
                    },
                    {
                        id: 4,
                        number: 'Tài khoản 4:',
                        accountNumber: ' 1903625172012',
                        label: 'Chủ tài khoản:',
                        name: ' Công ty TNHH tổ hợp y tế Phương Đông',
                        labelBank: 'Ngân hàng:',
                        nameBank: ' Ngân hàng Techcombank'
                    }
                ],
                content_bank: 'Nội dung chuyển khoản'
            },

            notification: 'Bộ phận hỗ trợ sẽ liên lạc để xác nhận thông tin đăng ký trong vòng 24h',
            notification_1: 'Mọi thắc mắc vui lòng liên hệ số điện thoại để được hỗ trợ xử lý',
            button: 'Quay về trang chủ'
        }

    }

};

export const en = {
    header: {
        cskh: ' Call center'
    },

    info: {
        title: 'Register for medical treatment online',
        sub_title: 'Patients can be examined online with a team of excellent specialists working in major hospitals'
    },

    form: {
        form_title_header: 'Register for examination information online',
        star: ' * ',
        warning_left: 'Marked fields ',
        warning_right: ' are required fields to enter. Patient information and registration information need to be entered correctly',
        default_option: 'Choose service',
        form_1: {
            form_title: 'EXAMINATION REGISTRATION INFORMATION',
            service: 'Type of service ',
            paid_service: 'Paid service',
            free_service: 'Free Consultation',
            examination_service: 'Examination service ',
            select_date: 'Select registration date',
            non_date: 'No appointment scheduled on the selected date',
            placeholder_id_patient: 'Enter patient code',
            placeholder_description: 'Enter symptoms and reason for examination',
            service_option: [
                {

                    id: 1,
                    name: 'Obstetrics and Gynecology ',
                    type: [
                        'No doctor required - ₫200,000',

                        'BSCKII Anh Nguyen Tuan- ₫200,000'

                    ]
                },
                {
                    id: 2,
                    name: 'Internal medicine ',
                    type: [

                        'No doctor required - ₫200,000',

                        'BSCKII Son Nguyen The - ₫200,000'

                    ]
                },
                {
                    id: 3,
                    name: 'Department of Pediatrics',
                    type: [
                        'No doctor required - ₫200,000',

                        'BSCKII Gia Nguyen Xuan - ₫200,0000'

                    ]
                }

            ],
            serviceFree_option: [
                {
                    id: 1,
                    name: 'Health consultation',
                    type: [
                        'No doctor required',
                        'Dr. Sơn The Tran',
                        'Dr.Thao Nguyen Phuong'
                    ]
                }
            ],
            examination_date: 'Date of registration ',
            examination_time: 'Time of registration ',
            id_person: 'Enter patient code',
            description: 'Description',
            button_attach_documents: 'Attach documents',
            button_continue: 'Next'
        },
        form_2: {
            form_title: 'PATIENT INFORMATION',
            name: 'Full Name ',
            birthday: 'Date of birth ',
            phone: 'Phone number ',
            gender: 'Gender ',
            address: 'Address ',
            button_pre: 'Back',
            button_check_registration: 'Check registration',
            placeholder_name: 'Enter full name',
            placeholder_phone: 'Enter phone number',
            choose_gender: 'Choose gender',
            male: 'Male',
            female: 'Female',
            placeholder_address: 'Enter address'
        },
        form_3: {
            form_title: 'CONFIRMATION OF REGISTRATION INFORMATION',
            button_pre: 'Back',
            button_confirm: 'Confirm'
        },
        form_4: {
            successful_registration: 'SUCCESSFUL',
            label: 'Successful',
            label_1: 'Patient',
            label_2: ' Examination online',
            fee_confirmation: {
                fee: 'Please pay the examination fee ',
                bankInfor: [
                    {
                        id: 1,
                        number: 'Account 1:',
                        accountNumber: ' 12910000153585',
                        label: 'Account holder:',
                        name: 'Phuong Dong Medical Complex Co., Ltd',
                        labelBank: 'Bank:',
                        nameBank: 'BIDV. Hoang Mai Hanoi Branch'
                    },

                    {
                        id: 2,
                        number: 'Account 2:',
                        accountNumber: ' 0491000268686',
                        label: 'Account holder:',
                        name: 'Phuong Dong Medical Complex Co., Ltd',
                        labelBank: 'Bank:',
                        nameBank: 'Vietcombank'
                    },

                    {
                        id: 3,
                        number: 'Account 3:',
                        accountNumber: ' 1507201062383',
                        label: 'Account holder:',
                        name: 'Phuong Dong Medical Complex Co., Ltd',
                        labelBank: 'Bank:',
                        nameBank: 'Agribank, Cau Giay Branch'
                    },
                    {
                        id: 4,
                        number: 'Account 4:',
                        accountNumber: ' 1903625172012',
                        label: 'Account holder:',
                        name: 'Phuong Dong Medical Complex Co., Ltd',
                        labelBank: 'Bank:',
                        nameBank: 'Techcombank'
                    }
                ],
                content_bank: 'Transaction Contents'

            },
            notification: 'Support will contact you to confirm registration information within 24 hours',
            notification_1: 'If you have any questions, please contact the phone number for support',
            button: 'Back to home page'
        }
    }


}