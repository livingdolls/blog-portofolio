import { Box, Button, styled, TextField, Typography } from "@mui/material";
import MainButton from "../components/Button";

const MainBox = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	gap: 20,
	padding: "50px",
	marginTop: "100px",
	justifyContent: "center",

	[theme.breakpoints.down("sm")]: {
		display: "flex",
		flexDirection: "column",
		padding: 0,
	},
}));

const SuBox = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	padding: "20px",
	[theme.breakpoints.up("lg")]: {
		width: "40%",
	},
	[theme.breakpoints.down("sm")]: {
		widht: "100%",
	},
}));

const SearchBox = styled(TextField)(() => ({
	"& input": {
		paddingLeft: "30px",
	},
	"& fieldset": {
		borderRadius: "10px",
	},
}));

const SubBox = styled(Box)(({ theme }) => ({
	minHeight: "80vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignContent: "center",
	marginTop: 10,
}));

const Contact = () => {
	return (
		<SubBox>
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Contact Me
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				Send Me Message
			</Typography>

			<MainBox>
				<SuBox></SuBox>

				<SuBox gap={3}>
					<Typography
						variant="h6"
						fontWeight={500}
						textAlign={"center"}
					>
						Send Me Message
					</Typography>
					<SearchBox label="Your name" />
					<SearchBox size="medium" label="Your Email" />
					<SearchBox label="Your message" multiline rows={5} />
					<MainButton>Send Message</MainButton>
				</SuBox>
			</MainBox>
		</SubBox>
	);
};

export default Contact;
