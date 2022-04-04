import React from "react";
import { StyledLabel } from "./styles/form";
import { StyledSelect } from "./styles/select";

export default function SelectCountry({
  suggestions,
  loading,
  fetchError,
  error,
  validation: register,
}) {
  const sorter = (a, b) =>
    a.name.common.toLowerCase() > b.name.common.toLowerCase() ? 1 : -1;
  const sortedArr = suggestions.sort(sorter);
  return (
    <>
      <StyledLabel htmlFor="nationality">Nationality:</StyledLabel>
      <StyledSelect
        type="select"
        name="nationality"
        id="nationality"
        placeholder="Nationality"
        error={error}
        {...register("nationality", {
          required: "Required",
        })}
      >
        {!fetchError && (
          <option key="default" value="">
            Select Country
          </option>
        )}
        {fetchError && (
          <option key="error" value="">
            Error, please reload website
          </option>
        )}
        {loading && (
          <option key="loading" value="">
            Loading...
          </option>
        )}
        {suggestions.length > 0 &&
          !loading &&
          sortedArr.map((item) => {
            if (item.name.common === "Poland") {
              return <option key={item.cca3}>{item.name.common}</option>;
            } else {
              return <option key={item.cca3}>{item.name.common}</option>;
            }
          })}
      </StyledSelect>
    </>
  );
}
