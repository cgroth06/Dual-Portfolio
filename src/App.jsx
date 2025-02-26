import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
    },
});

function App() {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Header />
                <Outlet />
                <Footer />
            </ChakraProvider>
        </>
    );
}

export default App;
