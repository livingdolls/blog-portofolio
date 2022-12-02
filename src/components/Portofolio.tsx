import { Box, styled, Typography } from "@mui/material";
import aimyon from "../assets/Aimyon.jpeg";

const MainPorto = styled(Box)(({ theme }) => ({
	border: "1px solid red",
	padding: "25px",
}));

const Portofolio = () => {
	return (
		<MainPorto>
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Portofolio
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				Best Portofolio Me
			</Typography>

			<Box
				display="flex"
				flexDirection={"row"}
				flexWrap={"wrap"}
				justifyContent={"center"}
				gap={5}
				marginTop={10}
			>
				<Box src={aimyon} component="img" height={300} width={300} />
				<Box src={aimyon} component="img" height={300} width={300} />
				<Box src={aimyon} component="img" height={300} width={300} />
				<Box src={aimyon} component="img" height={300} width={300} />
				<Box src={aimyon} component="img" height={300} width={300} />
				<Box src={aimyon} component="img" height={300} width={300} />
				<Box src={aimyon} component="img" height={300} width={300} />
				<Box src={aimyon} component="img" height={300} width={300} />
				<Box src={aimyon} component="img" height={300} width={300} />
			</Box>
		</MainPorto>
	);
};

export default Portofolio;
