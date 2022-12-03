import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./Layout";

const materialRed = createTheme({
	palette: {
		background: {
			default: "#fcf4f1",
		},
		primary: {
			main: "#b8352b",
		},
	},
	typography: {
		fontFamily: "Poppins",
	},
});

function App() {
	return (
		<ThemeProvider theme={materialRed}>
			<CssBaseline />
			<Layout />
		</ThemeProvider>
	);
}

export default App;
