import {
	Alert,
	Box,
	Button,
	CircularProgress,
	Snackbar,
	styled,
	TextField,
	Typography,
} from "@mui/material";
import MainButton from "../components/Button";
import Send from "@mui/icons-material/Send";
import Email from "@mui/icons-material/Email";
import Telegram from "@mui/icons-material/Telegram";
import WhatsApp from "@mui/icons-material/WhatsApp";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
	const form = useRef<HTMLFormElement | null>(null);
	const [open, setOpen] = useState(false);
	const [alert, setAlert] = useState("");
	const [loading, setLoading] = useState(false);

	const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		e.preventDefault();
		const data: any = form.current;
		emailjs
			.sendForm(
				"service_3ovadk9",
				"template_g2xhspi",
				data,
				"gnmk6z7JRwYdHBxSh"
			)
			.then(
				(result) => {
					(e.target as any).reset();
					setOpen(true);
					setAlert("Sukses mengirim pesan!");
					setLoading(false);
				},
				(error) => {
					setOpen(true);
					setAlert("Gagal mengirim pesan!");
					setLoading(false);
				}
			);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<SubBox id="contact">
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Contact Me
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				No matter what, Just do it
			</Typography>

			<form ref={form} onSubmit={sendMail}>
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
							color={"primary"}
						>
							Send Me Message
						</Typography>
						<SearchBox
							name="user_name"
							required
							label="Your name"
						/>
						<SearchBox
							name="user_email"
							required
							label="Your Email"
						/>
						<SearchBox
							required
							name="message"
							label="Your message"
							multiline
							rows={5}
						/>
						<ButtonMain
							variant="contained"
							type="submit"
							color="primary"
							disabled={loading}
							endIcon={loading ? "" : <Send />}
						>
							{loading ? <CircularProgress /> : "Send Message"}
						</ButtonMain>
					</SuBox>
				</MainBox>
				<Snackbar
					open={open}
					key={"top" + "center"}
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
					autoHideDuration={5000}
					onClose={handleClose}
					sx={{ color: "white" }}
				>
					<Alert
						onClose={handleClose}
						severity="success"
						variant="filled"
						sx={{
							width: "100%",
							color: "white",
							backgroundColor: (theme) =>
								theme.palette.primary.main,
						}}
					>
						{alert}
					</Alert>
				</Snackbar>
			</form>
		</SubBox>
	);
};

export default Contact;

const ButtonMain = styled(Button)(({ theme }) => ({
	borderRadius: "7px",
	[theme.breakpoints.up("md")]: {
		height: 65,
		width: 200,
		fontSize: 18,
	},

	[theme.breakpoints.between("xs", "md")]: {
		height: 50,
		width: 170,
		fontSize: 15,
	},
}));

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
		marginLeft: "30%",
	},
	[theme.breakpoints.down("sm")]: {
		margin: "auto",
	},
}));
