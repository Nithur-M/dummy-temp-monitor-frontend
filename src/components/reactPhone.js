import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import SignUp from './signup.component';

import 'react-phone-number-input/style.css';
import './reactPhone.style.css';

const ReactPhone = () => {
    const [value, setValue] = useState()
        return (
            <div>
            <PhoneInput
            placeholder="Enter phone number"
            className="form-control"
            name="mobile"
            
            defaultCountry="LK"
            value={value}
            onChange={setValue}
            />
            </div>
        );
        };

export default ReactPhone;