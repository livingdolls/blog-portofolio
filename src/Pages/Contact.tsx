import { Box, styled, TextField, Typography } from "@mui/material";
import MainButton from "../components/Button";
import Send from "@mui/icons-material/Send";
import Email from "@mui/icons-material/Email";
import Telegram from "@mui/icons-material/Telegram";
import WhatsApp from "@mui/icons-material/WhatsApp";

const EmailIcon = styled(Email)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 50,
}));

const WhatsappIcon = styled(WhatsApp)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 50,
}));

const TelegramIcon = styled(Telegram)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 50,
}));

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

const ContactMe = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-around",
	alignItems: "center",
	width: "50%",
	height: "30%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: "50%",
	},
	[theme.breakpoints.down("sm")]: {
		margin: "auto",
	},
}));

const Contact = () => {
	return (
		<SubBox id="contact">
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Contact Me
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				No matter what, Just do it
			</Typography>

			<MainBox>
				<SuBox gap={3}>
					<ContactMe>
						<EmailIcon />
						<Typography fontSize={20} fontWeight={500}>
							Email
						</Typography>

						<Typography variant={"body1"}>
							nanangsetiawaan@yahoo.com
						</Typography>
					</ContactMe>

					<ContactMe>
						<WhatsappIcon />
						<Typography fontSize={20} fontWeight={500}>
							WhatsApp
						</Typography>

						<Typography variant={"body1"}>
							+6285729577985
						</Typography>
					</ContactMe>

					<ContactMe>
						<TelegramIcon />
						<Typography fontSize={20} fontWeight={500}>
							Telegram
						</Typography>

						<Typography variant={"body1"}>
							+6285729577985
						</Typography>
					</ContactMe>
				</SuBox>

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
					<MainButton icon={<Send />}>Send Message</MainButton>
				</SuBox>
			</MainBox>
		</SubBox>
	);
};

export default Contact;
