import { Box, Button, styled, TextField, Typography } from "@mui/material";

const MainBox = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	gap: 20,
	padding: "50px",
	border: "1px solid black",
	marginTop: "100px",
	justifyContent: "center",
}));

const SuBox = styled(Box)(({ theme }) => ({
	border: "1px solid red",
	display: "flex",
	flexDirection: "column",
	padding: "20px",
}));

const SearchBox = styled(TextField)(() => ({
	"& input": {
		paddingLeft: "30px",
	},
	"& fieldset": {
		borderRadius: "10px",
	},
}));

const Contact = () => {
	return (
		<Box
			minHeight={"80vh"}
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignContent={"center"}
			marginTop={10}
			sx={{ border: "1px solid cyan" }}
		>
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Contact Me
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				Send Me Message
			</Typography>

			<MainBox>
				<SuBox sx={{ width: "40%" }}></SuBox>

				<SuBox gap={3} sx={{ width: "40%" }}>
					<Typography
						variant="h6"
						fontWeight={500}
						textAlign={"center"}
					>
						Send Me Message
					</Typography>
					<SearchBox label="Your name" />
					<TextField size="medium" label="Your Email" />
					<TextField label="Your message" multiline rows={5} />
					<Button
						variant="contained"
						color="primary"
						sx={{
							height: "70px",
							width: "200px",
							borderRadius: "15px",
						}}
					>
						Send Message
					</Button>
				</SuBox>
			</MainBox>
		</Box>
	);
};

export default Contact;
