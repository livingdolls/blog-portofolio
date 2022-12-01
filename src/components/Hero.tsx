import { Box, styled } from "@mui/material";

const MainHero = styled(Box)(({ theme }) => ({
	// [theme.breakpoints.up("lg")]: {
	backgroundColor: "red",
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	// },
}));

const BoxAbout = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		backgroundColor: "blue",
		flex: "0 0 100%",
		order: 2,
	},
}));

const BoxMedia = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		backgroundColor: "yellow",
		flex: "0 0 20%",
	},
}));

const BoxPhoto = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		backgroundColor: "green",
		flex: "0 0 80%",
	},
}));

const Hero = () => {
	return (
		<MainHero>
			<BoxMedia sx={{ width: "10%" }}>Social Media</BoxMedia>
			<BoxAbout sx={{ width: "60%" }}>About</BoxAbout>
			<BoxPhoto sx={{ width: "30%" }}>Photo</BoxPhoto>
		</MainHero>
	);
};

export default Hero;
