import GeneratorForm from "../components/GeneratorForm";
import { Box } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
export function Generator(props) {
    return <Box mt={"32"}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Randomanga - Generator </title>
            <meta name="description" content="Choose what genres you like/dislike to get a filtered random list.  " />
            <link rel="canonical" href="https://randomanga.net/generator" />
        </Helmet>
        <GeneratorForm />
    </Box>
}