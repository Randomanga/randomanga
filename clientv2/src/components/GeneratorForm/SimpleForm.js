import { Text } from '@chakra-ui/react'
import React from 'react'
import MultiSelect from '../MultiSelect'
import options from '../MultiSelect/options'
const SimpleForm = (props) => {
  return (
    <React.Fragment>
      <MultiSelect
        name="Included tags and genres"
        options={options}
        placeholder="Included(All)"
        isSearchable={true}
        closeMenuOnSelect={false}
        isMulti
      />
    </React.Fragment>
  )
}
export default SimpleForm
