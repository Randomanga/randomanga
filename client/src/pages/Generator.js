import GeneratorForm from "../components/GeneratorForm";
import { Box } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
export function Generator(props) {
    return <Box mt={"32"}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Randomanga - Generator </title>
            <meta name="keywords" content="random manga list, manga generator, manga list, user preffered lsit, manga recommendations, synced with anilist" />
            <meta name="description" content="Choose what genres you like/dislike to get a filtered random list.  " />
            <link rel="canonical" href="https://randomanga.net/generator" />
            <link rel="icon" type="image/png" sizes="32x32" href="/logo192.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
            <meta name="author" content="Wiz" />
            <link rel="apple-touch-icon" sizes="192x192" href="/logo192.png" />
        </Helmet>
        <GeneratorForm />
    </Box>
}