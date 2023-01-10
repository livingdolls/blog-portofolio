import {
	Box,
	Button,
	Divider,
	Link,
	styled,
	Tooltip,
	Typography,
} from "@mui/material";
import MainButton from "../components/Button";
import Phone from "@mui/icons-material/Phone";
import Github from "@mui/icons-material/GitHub";
import Facebook from "@mui/icons-material/Facebook";
import Linkedin from "@mui/icons-material/LinkedIn";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { motion } from "framer-motion";

type propsNavbar = {
	sendLink: (comp: string) => void;
};

const pageMotion = {
	hidden: {
		opacity: 0,
		x: -200,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.5,
			duration: 1,
			staggerChildren: 0.2,
		},
	},
};

const cardSocialMedia = {
	hidden: {
		opacity: 0,
		y: -200,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.5,
			duration: 1,
		},
	},
};

const Hero: React.FC<propsNavbar> = ({ sendLink }) => {
	return (
		<motion.div
			variants={pageMotion}
			whileInView={"visible"}
			initial={"hidden"}
			viewport={{ once: false, amount: 0.5 }}
		>
			<MainHero id="hero">
				<BoxMedia sx={{ width: "10%" }}>
					<SuBoxMedia>
						<motion.div variants={cardSocialMedia}>
							<Link
								href="https://github.com/livingdolls"
								target={"_blank"}
								sx={{ textDecoration: "none" }}
							>
								<Tooltip title="Github" arrow placement="right">
									<GithubIcon />
								</Tooltip>
							</Link>
						</motion.div>

						<motion.div variants={cardSocialMedia}>
							<Link
								href="https://web.facebook.com/profile.php?id=100007789293041"
								target={"_blank"}
								sx={{ textDecoration: "none" }}
							>
								<Tooltip
									title="Facebook"
									arrow
									placement="right"
								>
									<FacebookIcon />
								</Tooltip>
							</Link>
						</motion.div>

						<motion.div variants={cardSocialMedia}>
							<Link
								href="https://www.linkedin.com/in/nanang-setiawaan/"
								target={"_blank"}
								sx={{ textDecoration: "none" }}
							>
								<Tooltip
									title="Linkedin"
									arrow
									placement="right"
								>
									<LinkedinIcon />
								</Tooltip>
							</Link>
						</motion.div>
					</SuBoxMedia>
				</BoxMedia>

				{/* About Me */}
				<BoxAbout sx={{ width: "55%" }}>
					<Box display={"flex"} flexDirection="column" gap={4}>
						<Box>
							<NamaTypo>Hi,</NamaTypo>
							<NamaTypo sx={{ display: "inline-block" }}>
								I'm Setiawan
							</NamaTypo>
							<NamaTypo
								sx={{
									display: "inline-block",
									ml: { sm: ".5rem" },
								}}
								color="primary"
							>
								Nanang
							</NamaTypo>
						</Box>

						<Divider textAlign="right" sx={{ width: "50%" }}>
							<Typography variant="h5">
								FULLSTACK WEB DEVELOPER
							</Typography>
						</Divider>

						<Typography variant="h6" fontWeight={400}>
							I'm from Semarang and i'm a fullstack web developer
							with a passion for solving problems and learning new
							things. I've been freelancing for the last 2 years,
							and right now i am looking forward to working with
							you!.
						</Typography>

						<Link
							onClick={() => sendLink("contact")}
							sx={{ textDecoration: "none" }}
						>
							<MainButton icon={<Phone />}>Contact Me</MainButton>
						</Link>
					</Box>
				</BoxAbout>

				{/* Photo */}
				<BoxPhoto>
					<Box display="flex" justifyContent={"center"}>
						<BorderImg>
							<CodeOffIcon sx={{ height: 400, width: 300 }} />
						</BorderImg>
					</Box>
				</BoxPhoto>
			</MainHero>
		</motion.div>
	);
};

export default Hero;

const MainHero = styled(Box)(({ theme }) => ({
	minHeight: "95vh",
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	alignContent: "center",

	[theme.breakpoints.down("md")]: {
		marginTop: 50,
		justifyContent: "center",
	},
}));

const BoxAbout = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		flex: "0 0 100%",
		order: 2,
	},

	padding: "25px",
}));

const BoxMedia = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		flex: "0 0 100%",
		order: 1,
		paddingRight: 20,
		paddingLeft: 20,
	},

	[theme.breakpoints.up("sm")]: {
		flex: "0 0 10%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
}));

const SuBoxMedia = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},

	[theme.breakpoints.up("sm")]: {
		display: "flex",
		flexDirection: "column",
		height: "40%",
		justifyContent: "space-around",
	},
}));

const BoxPhoto = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		flex: "0 0 90%",
	},
	[theme.breakpoints.up("md")]: {
		width: "35%",
	},
	padding: "25px",
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

const NamaTypo = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		fontSize: "40px",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "65px",
		fontWeight: 600,
	},
}));

const GithubIcon = styled(Github)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 50,
}));

const FacebookIcon = styled(Facebook)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 50,
}));

const LinkedinIcon = styled(Linkedin)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 50,
}));
