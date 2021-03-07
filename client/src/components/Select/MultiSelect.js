import React from "react";
import Select, { createFilter } from "react-select";
import ThemeContext from "../../context/ThemeContext";

const MultiSelect = (props) => {
  const theme = React.useContext(ThemeContext);

  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      width: theme.width.full,
      color: theme.colors.white,
      maxWidth: theme.width["105"],
      "&:hover": {
        borderColor: theme.colors.gray["800"],
      },
    }),
    control: (provided, state) => ({
      ...provided,
      fontFamily: theme.fontFamily.sans.join(","),
      fontSize: theme.fontSize.base,
      backgroundColor: theme.colors.gray["800"],
      borderColor: state.isFocused
        ? theme.colors.gray["700"]
        : theme.colors.gray["800"],
      borderWidth: theme.borderWidth["2"],
      outline: "none",
      boxShadow: theme.boxShadow["lg"],
      "&:hover": {
        borderColor: state.isFocused
          ? theme.colors.gray["800"]
          : theme.colors.gray["700"],
      },
    }),
    input: (provided) => ({
      ...provided,
      color: theme.colors.white,
    }),
    menu: (provided) => ({
      ...provided,
      fontFamily: theme.fontFamily.sans.join(","),
      fontSize: theme.fontSize["text-base"],
      width: theme.width.full,
      backgroundColor: theme.colors.gray["800"],
      paddingTop: "0",
      paddingBottom: "0",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: theme.fontSize.sm,
      color: theme.colors.gray["300"],
      backgroundColor: state.isSelected
        ? theme.colors.gray["500"]
        : theme.colors.gray["800"],
      "&:hover": {
        ...provided["&:hover"],
        backgroundColor: theme.colors.gray["700"],
        color: theme.colors.white,
      },
    }),
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: theme.colors.darkGray["400"],
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: theme.colors.gray["300"],
    }),
    multiValueRemove: (provided, satate) => ({
      ...provided,
      "&:hover": {
        ...provided["&:hover"],
        backgroundColor: theme.colors.red["400"],
        color: theme.colors.white,
      },
    }),
  };
  return (
    <Select
      options={props.options}
      styles={customStyles}
      classNamePrefix="select"
      filterOption={createFilter({
        ignoreAccents: false,
        ignoreCase: true,
      })}
      menuShouldScrollIntoView={true}
      tabSelectsValue={false}
      isMulti
      closeMenuOnSelect={false}
      closeMenuOnScroll={false}
      {...props}
    />
  );
};

export default MultiSelect;
