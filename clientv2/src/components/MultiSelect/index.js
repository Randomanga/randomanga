/* eslint-disable no-underscore-dangle */
import React from 'react'
import Select, { components as selectComponents } from 'react-select'
import {
  Flex,
  Tag,
  TagCloseButton,
  TagLabel,
  Divider,
  CloseButton,
  Center,
  Box,
  Portal,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  useTheme,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const chakraStyles = {
  input: (provided) => ({
    ...provided,
    color: 'inherit',
    lineHeight: 1,
  }),
  menu: (provided) => ({
    ...provided,
    boxShadow: 'none',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0.125rem 1rem',
  }),
  control: () => {},
  menuList: () => {},
  option: () => {},
  multiValue: () => {},
  multiValueLabel: () => {},
  multiValueRemove: () => {},
  group: () => {},
}

const chakraComponents = {
  // Control components
  Control: ({ children, innerRef, innerProps, isDisabled, isFocused }) => {
    const inputStyles = useMultiStyleConfig('Input')
    return (
      <StylesProvider value={inputStyles}>
        <Flex
          ref={innerRef}
          sx={{
            ...inputStyles.field,
            p: 0,
            overflow: 'hidden',
            h: 'auto',
            minH: 10,
          }}
          {...innerProps}
          {...(isFocused && { 'data-focus': true })}
          {...(isDisabled && { disabled: true })}
        >
          {children}
        </Flex>
      </StylesProvider>
    )
  },
  MultiValueContainer: ({
    children,
    innerRef,
    innerProps,
    data: { isFixed },
  }) => (
    <Tag
      ref={innerRef}
      {...innerProps}
      m="0.125rem"
      variant={isFixed ? 'solid' : 'subtle'}
    >
      {children}
    </Tag>
  ),
  MultiValueLabel: ({ children, innerRef, innerProps }) => (
    <TagLabel ref={innerRef} {...innerProps}>
      {children}
    </TagLabel>
  ),
  MultiValueRemove: ({ children, innerRef, innerProps, data: { isFixed } }) => {
    if (isFixed) {
      return null
    }

    return (
      <TagCloseButton ref={innerRef} {...innerProps}>
        {children}
      </TagCloseButton>
    )
  },
  IndicatorSeparator: ({ innerRef, innerProps }) => (
    <Divider
      ref={innerRef}
      {...innerProps}
      orientation="vertical"
      opacity="1"
    />
  ),
  ClearIndicator: ({ innerRef, innerProps }) => (
    <CloseButton ref={innerRef} {...innerProps} size="sm" mx={2} />
  ),
  DropdownIndicator: ({ innerRef, innerProps }) => {
    const { addon } = useStyles()

    return (
      <Center
        ref={innerRef}
        {...innerProps}
        sx={{
          ...addon,
          h: '100%',
          borderRadius: 0,
          borderWidth: 0,
          cursor: 'pointer',
        }}
      >
        <ChevronDownIcon h={5} w={5} />
      </Center>
    )
  },
  // Menu components
  MenuPortal: ({ innerRef, innerProps, children }) => (
    <Portal ref={innerRef} {...innerProps}>
      {children}
    </Portal>
  ),
  Menu: ({ children, ...props }) => {
    const menuStyles = useMultiStyleConfig('Menu')
    return (
      <selectComponents.Menu {...props}>
        <StylesProvider value={menuStyles}>{children}</StylesProvider>
      </selectComponents.Menu>
    )
  },
  MenuList: ({ innerRef, innerProps, children, maxHeight }) => {
    const { list } = useStyles()
    return (
      <Box
        sx={{
          ...list,
          maxH: `${maxHeight}px`,
          overflowY: 'auto',
        }}
        ref={innerRef}
        {...innerProps}
      >
        {children}
      </Box>
    )
  },
  GroupHeading: ({ innerProps, children }) => {
    const { groupTitle } = useStyles()
    return (
      <Box sx={groupTitle} {...innerProps}>
        {children}
      </Box>
    )
  },
  Option: ({ innerRef, innerProps, children, isFocused, isDisabled }) => {
    const { item } = useStyles()
    return (
      <Box
        as="button"
        sx={{
          ...item,
          w: '100%',
          textAlign: 'left',
          bg: isFocused ? item._focus.bg : 'transparent',
          ...(isDisabled && item._disabled),
        }}
        ref={innerRef}
        {...innerProps}
        {...(isDisabled && { disabled: true })}
      >
        {children}
      </Box>
    )
  },
}

const MultiSelect = ({
  name = '',
  styles = {},
  components = {},
  theme = {},
  ...props
}) => {
  const chakraTheme = useTheme()

  const placeholderColor = useColorModeValue(
    chakraTheme.colors.gray[400],
    chakraTheme.colors.whiteAlpha[400]
  )

  return (
    <Select
      name={name}
      components={{
        ...chakraComponents,
        ...components,
      }}
      styles={{
        ...chakraStyles,
        ...styles,
      }}
      theme={(baseTheme) => ({
        ...baseTheme,
        borderRadius: chakraTheme.radii.md,
        colors: {
          ...baseTheme.colors,
          neutral50: placeholderColor, // placeholder text color
          neutral40: placeholderColor, // noOptionsMessage color
          ...theme.colors,
        },
        spacing: {
          ...baseTheme.spacing,
          ...theme.spacing,
        },
      })}
      {...props}
    />
  )
}

export default MultiSelect

/*import { useTheme } from '@chakra-ui/system'
import React, { useEffect, useState } from 'react'
import Select, { createFilter } from 'react-select'
import { MenuList } from './MenuList'
import options from './options'
const VirtualSelect = (props) => {
  const theme = useTheme()
  console.log(theme)
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      width: '100%',
      color: theme.colors.white,
      maxWidth: theme.sizes['xl'],
      '&:hover': {
        borderColor: theme.colors.gray['800'],
      },
    }),
    control: (provided, state) => ({
      ...provided,
      fontFamily: theme.fonts.body,
      fontSize: theme.fontSizes['md'],
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
    input: (provided) => ({
      ...provided,
      color: theme.colors.white,
    }),
    menu: (provided) => ({
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
  }

  return (
    <Select
      filterOption={createFilter({ ignoreAccents: false })}
      components={{ MenuList }}
      styles={customStyles}
      openMenuOnFocus={true}
      options={options}
      closeMenuOnSelect={false}
      isMulti
      isSearchable={true}
    />
  )
}
export default VirtualSelect 
*/
