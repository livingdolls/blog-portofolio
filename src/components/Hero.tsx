import { Box, Button, Divider, styled, Typography } from "@mui/material";
import aimyon from "../assets/Aimyon.jpeg";
import facebook from "../assets/home.svg";

const MainHero = styled(Box)(({ theme }) => ({
	height: "90vh",
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	alignContent: "center",
}));

const BoxAbout = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		flex: "0 0 100%",
		order: 2,
	},
	padding: "25px",
}));

const BoxMedia = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		flex: "0 0 10%",
		paddingLeft: "25px",
	},
}));

const BoxPhoto = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		flex: "0 0 90%",
	},
	padding: "25px",
}));

const ACButton = styled(Button)(({ theme }) => ({
	height: "100px",
	width: "200px",
	borderRadius: 8,
}));

const BorderImg = styled(Button)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		borderBottom: `10px solid ${theme.palette.primary.main}`,
		borderLeft: "none",
	},
	[theme.breakpoints.down("lg")]: {
		borderLeft: "none",
	},
	borderLeft: `10px solid ${theme.palette.primary.main}`,
}));

const Hero = () => {
	return (
		<MainHero>
			<BoxMedia sx={{ width: "10%" }}>
				<Box
					display="flex"
					flexDirection={"column"}
					justifyContent={"center"}
					gap={2}
					sx={{ height: "100%" }}
				>
					<Box>
						<img
							src={facebook}
							alt={"facebook"}
							height={30}
							width={30}
						/>
					</Box>

					<Box>
						<img
							src={facebook}
							alt={"facebook"}
							height={30}
							width={30}
						/>
					</Box>

					<Box>
						<img
							src={facebook}
							alt={"facebook"}
							height={30}
							width={30}
						/>
					</Box>
				</Box>
			</BoxMedia>

			{/* About Me */}
			<BoxAbout sx={{ width: "55%" }}>
				<Box display={"flex"} flexDirection="column" gap={4}>
					<Typography variant="h2" fontWeight={600}>
						Setiawan Nanang
					</Typography>

					<Divider textAlign="right" sx={{ width: "50%" }}>
						<Typography variant="h5">WEB DEVELOPER</Typography>
					</Divider>

					<Typography variant="h6" fontWeight={400}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
					</Typography>
					<ACButton
						variant="contained"
						color="primary"
						sx={{ height: "70px", weight: "150px" }}
					>
						Contact Me
					</ACButton>
				</Box>
			</BoxAbout>

			{/* Photo */}
			<BoxPhoto sx={{ width: "35%" }}>
				<Box display="flex" justifyContent={"center"}>
					<BorderImg>
						<img
							src={aimyon}
							alt={"photo"}
							height={400}
							width={300}
						/>
					</BorderImg>
				</Box>
			</BoxPhoto>
		</MainHero>
	);
};

export default Hero;
