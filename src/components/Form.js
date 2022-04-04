import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  StyledForm,
  StyledRow,
  StyledLabel,
  StyledInput,
  StyledSubmit,
  StyledError,
} from "./styles/form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import SelectCountry from "./SelectCountry";

let schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  nationality: yup.string().required("Nationality is required"),
  pesel: yup
    .string()
    .required("PESEL is required")
    .test(
      "len",
      "PESEL must be exactly 11 characters",
      (val) => val.length === 11
    ),
  password: yup.string().min(6).max(20).required("Password is required"),
});

export default function Form() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const result = await axios(`https://restcountries.com/v3.1/all`);
        const matches = result.data;
        setSuggestions(matches);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <StyledRow>
        <SelectCountry
          suggestions={suggestions}
          loading={loading}
          error={formState.errors.nationality}
          fetchError={error}
          validation={register}
        />
        {formState.errors.nationality?.message && (
          <StyledError>{formState.errors.nationality?.message}</StyledError>
        )}
      </StyledRow>
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
        {formState.errors.firstName?.message && (
          <StyledError>{formState.errors.firstName?.message}</StyledError>
        )}
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
        {formState.errors.lastName?.message && (
          <StyledError>{formState.errors.lastName?.message}</StyledError>
        )}
      </StyledRow>
      <StyledRow>
        <StyledLabel htmlFor="pesel">PESEL:</StyledLabel>
        <StyledInput
          type="number"
          name="pesel"
          id="pesel"
          placeholder="PESEL"
          error={formState.errors.pesel}
          {...register("pesel", {
            required: "Required",
          })}
        />
        {formState.errors.pesel?.message && (
          <StyledError>{formState.errors.pesel?.message}</StyledError>
        )}
      </StyledRow>

      <StyledRow>
        <StyledLabel htmlFor="password">Password:</StyledLabel>
        <StyledInput
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          error={formState.errors.password}
          {...register("password", {
            required: "Required",
          })}
        />
        {formState.errors.password?.message && (
          <StyledError>{formState.errors.password?.message}</StyledError>
        )}
      </StyledRow>
      <StyledRow>
        <StyledSubmit type="submit" value="Submit" />
      </StyledRow>
    </StyledForm>
  );
}
