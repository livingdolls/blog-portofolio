import { Box, styled, Typography } from "@mui/material";

const MainBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	justifyContent: "space-around",
	height: "30vh",
	padding: "25px",
	border: "1px solid red",
}));

const Footer = () => {
	return (
		<MainBox>
			<Typography variant="h5" fontWeight={500}>
				Setiawan Nanang
			</Typography>
			<Box>
				<>Facebook</>
				<>Facebook</>
				<>Facebook</>
			</Box>

			<Typography>@Nanang Setiawan Copyright</Typography>
		</MainBox>
	);
};

export default Footer;
