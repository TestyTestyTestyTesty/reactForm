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

let schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
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
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const result = await axios(
        `https://restcountries.com/v3.1/name/${query}`
      );
      setCountries(result.data);
    };
    fetchCountries();
  }, [query]);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const onChangeHandler = (value) => {
    let matches = [];
    setQuery(value);
    if (value.length) {
      matches = countries.filter(country => country.name.common.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
    setSuggestions(matches);
    console.log(value, value.length, matches);
  };
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <StyledRow>
        <StyledLabel htmlFor="pesel">Nationality:</StyledLabel>
        <StyledInput
          type="search"
          name="nationaly"
          id="mationality"
          placeholder="Nationality"
          value={query}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
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
          error={formState.errors.lastName}
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
          error={formState.errors.lastName}
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
