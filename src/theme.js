import { extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway";
import "@fontsource/raleway/700.css";

const theme = extendTheme({
    fonts: {
        heading: "'Raleway', sans-serif", // Applies to Heading components
        body: "'Raleway', sans-serif", // Applies to text and most elements
    },
    styles: {
        global: {
            "html, body": {
                fontFamily: "'Raleway', sans-serif",
                color: "gray.600",
                lineHeight: "tall",
            },
        }
    }
});

export default theme;
