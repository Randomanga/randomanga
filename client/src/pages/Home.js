import React from 'react'
import { FeatureDisplay } from '../components/Feature'
import { Daily } from '../components/DailyManga'
import { Box } from '@chakra-ui/layout'
import GeneratorForm from '../components/GeneratorForm'

export const Home = (props) => {
  return (
    <Box>
      <Daily />
      <FeatureDisplay />
      <GeneratorForm />
    </Box>
  )
}
