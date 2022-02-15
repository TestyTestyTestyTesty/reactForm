import { useState } from "react";
import {StyledForm,StyledRow, StyledLabel, StyledInput, StyledSubmit} from './styles/form'
export default function Form() {
    const [form,setForm] = useState({
        firstName: '',
        lastName: '',
        pesel: '',
        phone: '',
        password:'',
    });

    
    const handleFormChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = () => {
        console.log(form);
    }
  return (
    <StyledForm onSubmit={handleSubmit}>
        <StyledRow>
            <StyledLabel htmlFor="firstName">First name:</StyledLabel>
            <StyledInput type="text" name="firstName" id="first-name" placeholder="First name" onChange={handleFormChange} value={form.firstName}/>
        </StyledRow>
        <StyledRow>
            <StyledLabel htmlFor="lastName">Last name:</StyledLabel>
            <StyledInput type="text" name="lastName" id="last-name" placeholder="Last name" onChange={handleFormChange} value={form.lastName}/>
        </StyledRow>
        <StyledRow>
            <StyledLabel htmlFor="pesel">Last name:</StyledLabel>
            <StyledInput type="number" name="pesel" id="pesel" placeholder="PESEL" onChange={handleFormChange} value={form.pesel}/>
        </StyledRow>
        <StyledRow>
            <StyledLabel htmlFor="password">Last name:</StyledLabel>
            <StyledInput type="password" name="password" id="password" placeholder="Password" onChange={handleFormChange} value={form.pesel}/>
        </StyledRow>
        <StyledRow>
            <StyledSubmit class="form__submit" type="submit" value="Submit"/>
        </StyledRow>
    </StyledForm>
  );
}
