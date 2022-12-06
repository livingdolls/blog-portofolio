import { Box, styled, Typography } from "@mui/material";
import CardPorto from "../components/CardPorto";

const MainPorto = styled(Box)(({ theme }) => ({
	padding: "50px",
}));

const Portofolio = () => {
	return (
		<MainPorto id="portofolio">
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Portofolio
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				My Best Project
			</Typography>

			<Box
				display="flex"
				flexDirection={"row"}
				flexWrap={"wrap"}
				justifyContent={"center"}
				gap={5}
				marginTop={10}
			>
				<CardPorto />
			</Box>
		</MainPorto>
	);
};

export default Portofolio;
