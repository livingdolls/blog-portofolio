import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
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
		allVariants: {
			color: "rgb(31 41 55)",
		},
	},
});

const materialPurple = createTheme({
	palette: {
		background: {
			default: "rgb(249 250 251)",
		},
		primary: {
			main: "#a968cd",
		},
	},
	typography: {
		fontFamily: "Poppins",
		allVariants: {
			color: "rgb(31 41 55)",
		},
	},
});

const materialBrown = createTheme({
	palette: {
		background: {
			default: "#ECE8E8",
		},
		primary: {
			main: "#322C2C",
		},
	},
	typography: {
		fontFamily: "Poppins",
		allVariants: {
			color: "rgb(31 41 55)",
		},
	},
});

const materialBlue = createTheme({
	palette: {
		background: {
			default: "#D4D4CE",
		},
		primary: {
			main: "#287094",
		},
	},
	typography: {
		fontFamily: "Poppins",
		allVariants: {
			color: "rgb(31 41 55)",
		},
	},
});

function App() {
	const [theme, setTheme] = useState(materialRed);

	const setThemes = (th: string) => {
		if (th === "mred") {
			return setTheme(materialRed);
		}
		if (th === "mblue") {
			return setTheme(materialBlue);
		}
		if (th === "mbrown") {
			return setTheme(materialBrown);
		}
		if (th === "mpurple") {
			return setTheme(materialPurple);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Layout theme={theme} setTheme={setThemes} />
		</ThemeProvider>
	);
}

export default App;
