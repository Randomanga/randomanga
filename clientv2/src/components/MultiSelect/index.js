/* eslint-disable no-underscore-dangle */
import React from 'react';
import Select, { createFilter } from 'react-select';
import { Text, Box } from '@chakra-ui/react';
import theme from '../../theme';
const selectStyles = {
  container: (provided, state) => ({
    ...provided,
    color: theme.colors.white,
    width: '100%',
    maxWidth: theme.sizes['xl'],
    backgroundColor: theme.colors.gray['800'],
    '&:hover': {
      borderColor: theme.colors.gray['800'],
    },
  }),
  control: (provided, state) => ({
    ...provided,
    fontFamily: theme.fonts.body,
    fontSize: [theme.fontSizes['md']],
    backgroundColor: theme.colors.gray['800'],
    borderColor: state.isFocused
      ? theme.colors.gray['700']
      : theme.colors.gray['800'],
    borderWidth: theme.sizes['0.5'],
    outline: 'none',
    boxShadow: theme.shadows['lg'],

    '&:hover': {
      borderColor: state.isFocused
        ? theme.colors.gray['800']
        : theme.colors.gray['700'],
    },
  }),
  input: provided => ({
    ...provided,
    color: theme.colors.white,
  }),
  menu: provided => ({
    ...provided,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes['md'],
    backgroundColor: theme.colors.gray['800'],
    paddingTop: '0',
    paddingBottom: '0',
    marginTop: '5px',
    alignText: 'left',
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray['300'],
    backgroundColor: state.isSelected
      ? theme.colors.gray['500']
      : theme.colors.gray['800'],
    '&:hover': {
      ...provided['&:hover'],
      backgroundColor: theme.colors.gray['700'],
      color: theme.colors.white,
    },
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: theme.colors.gray['700'],
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: theme.colors.gray['300'],
  }),
  multiValueRemove: (provided, satate) => ({
    ...provided,
    '&:hover': {
      ...provided['&:hover'],
      backgroundColor: theme.colors.red['500'],
      color: theme.colors.white,
    },
  }),
  dropdownIndicator: provided => ({
    ...provided,
    '&:hover': { color: theme.colors.white },
  }),
  clearIndicator: provided => ({
    ...provided,
    '&:hover': {
      color: theme.colors.white,
    },
  }),
};

const MultiSelect = ({ name = '', styles = {}, ...props }) => {
  return (
    <Box w={'full'} maxW="md">
      <Text as="h5" color="gray.300" fontSize={['sm', 'md']} py={1}>
        {name}
      </Text>
      <Select
        name={name}
        filterOption={createFilter({
          ignoreAccents: false,
          ignoreCase: true,
          matchFrom: 'any',
        })}
        styles={{
          ...selectStyles,
          ...styles,
        }}
        isMulti
        blurInputOnSelect={false}
        closeMenuOnSelect={false}
        {...props}
      />
    </Box>
  );
};

export default MultiSelect;
