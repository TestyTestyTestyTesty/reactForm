import { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  StyledForm,
  StyledRow,
  StyledLabel,
  StyledInput,
  StyledSubmit,
  StyledError
} from "./styles/form";
import { yupResolver } from "@hookform/resolvers/yup";

let schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  pesel: yup.string().required('PESEL is required').test('len', 'PESEL must be exactly 11 characters', val => val.length === 11),
  password: yup.string().min(6).max(20).required('Password is required'),
});

export default function Form() {

  const { register, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

/*   useEffect(() => {
    console.log( formState);
  },[formState]); */
  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <StyledRow>
        <StyledLabel htmlFor="firstName">First name:</StyledLabel>
        <StyledInput
          type="text"
          name="firstName"
          id="first-name"
          placeholder="First name"
          error={formState.errors.firstName}
          {...register("firstName", {
            required: "Required",
          })}
          />
          {formState.errors.firstName?.message && <StyledError>{formState.errors.firstName?.message}</StyledError>}
      </StyledRow>
      <StyledRow>
        <StyledLabel htmlFor="lastName">Last name:</StyledLabel>
        <StyledInput
          type="text"
          name="lastName"
          id="last-name"
          placeholder="Last name"
          error={formState.errors.lastName}
          {...register("lastName", {
            required: "Required",
          })}
          />
          {formState.errors.lastName?.message && <StyledError>{formState.errors.lastName?.message}</StyledError>}
      </StyledRow>
      <StyledRow>
        <StyledLabel htmlFor="pesel">Last name:</StyledLabel>
        <StyledInput
          type="number"
          name="pesel"
          id="pesel"
          placeholder="PESEL"
          error={formState.errors.lastName}
          {...register("pesel", {
            required: "Required",
          })}
          />
          {formState.errors.pesel?.message && <StyledError>{formState.errors.pesel?.message}</StyledError>}
      </StyledRow>
      <StyledRow>
        <StyledLabel htmlFor="password">Last name:</StyledLabel>
        <StyledInput
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          error={formState.errors.lastName}
          {...register("password", {
            required: "Required",
          })}
          />
          {formState.errors.password?.message && <StyledError>{formState.errors.password?.message}</StyledError>}
      </StyledRow>
      <StyledRow>
        <StyledSubmit type="submit" value="Submit" />
      </StyledRow>
    </StyledForm>
  );
}
