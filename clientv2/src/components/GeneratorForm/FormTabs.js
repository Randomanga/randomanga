import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
const FormTabs = ({ children }) => {
  return (
    <FormTabs
      py={'5'}
      variant="soft-rounded"
      colorScheme="whiteAlpha"
      w={'full'}
      align="center"
      size="sm"
    >
      <TabList>
        <Tab fontSize={'xs'}>Simple</Tab>
        <Tab fontSize={'xs'}>Advanced</Tab>
      </TabList>
      <TabPanels>{children}</TabPanels>
    </FormTabs>
  )
}
export default FormTabs
