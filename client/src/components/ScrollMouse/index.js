import { Box } from '@chakra-ui/layout';
import { Tooltip } from "@chakra-ui/react"
import { useEffect, useState } from 'react';
let portrait = window.innerWidth < window.innerHeight;

export function Scroll() {
    const [mouseVisible, setMouseVisible] = useState(!portrait) // hides if portrait
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => { window.removeEventListener('scroll', handleScroll) }
    })
    function handleScroll() {
        if (!mouseVisible) return
        if (window.scrollY > window.screen.availHeight) setMouseVisible(false)
    }
    return mouseVisible ? <Tooltip label="Scroll to generate list" placement="left-start" offset={[8, 5]} bg='gray.700' color='white'>
        <Box position='absolute' right='2rem' top='calc(100vh - 7rem)' sx={css}>
            <div className="scrolldown-wrapper">
                <div className="scrolldown">
                    <svg height="30" width="10">
                        <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
                        <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
                    </svg>
                </div>
            </div>
        </Box>
    </Tooltip>
    : <> </>
}

const css = {
    ".scrolldown": {
        border: "2px solid #CBD5E0",
        borderRadius: "30px",
        height: "40px",
        margin: "0 auto 8px",
        textAlign: "center",
        width: "25px",
        justifyContent: "center",
        display: "flex"
    },
    ".scrolldown-p1,\n.scrolldown-p2": {
        animationDuration: "2s",
        animationName: "scrollwheelAnimation",
        animationIterationCount: "infinite",
        fill: "#FFFFFF"
    },
    ".scrolldown-p2": { animationDelay: "1s" },
    "@keyframes scrollwheelAnimation": {
        "0%": { opacity: 0, transform: "translate(0, -8px)" },
        "50%": { opacity: 1, transform: "translate(0, 0)" },
        "100%": { opacity: 0, transform: "translate(0, 8px)" }
    }
}

