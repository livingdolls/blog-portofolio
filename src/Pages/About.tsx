import { Box, Link, styled, Typography } from "@mui/material";
import foto from "../assets/foto.jpg";
import MainButton from "../components/Button";
import CloudDownload from "@mui/icons-material/CloudDownload";
import PsychologyAlt from "@mui/icons-material/PsychologyAlt";
import Coffee from "@mui/icons-material/Coffee";
import Folder from "@mui/icons-material/FolderCopy";
import { motion } from "framer-motion";

const boxMotion = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.5,
			duration: 1,
			staggerChildren: 0.3,
		},
	},
};

const framerCard = {
	hidden: {
		x: -10,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
	},
};

const About = () => {
	return (
		<BoxMain id="about">
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				About Me
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				Introduce Myself
			</Typography>

			<motion.div
				variants={boxMotion}
				initial={"hidden"}
				whileInView={"visible"}
			>
				<SubBox>
					<ImageBorder>
						<Box
							component="img"
							alt="profil"
							src={foto}
							sx={{
								borderRadius: "30px",
								height: { xs: "300px", lg: "500px" },
								width: { xs: "300px", lg: "500px" },
							}}
						/>
					</ImageBorder>

					<BoxInfo>
						<BoxSubInfo>
							<motion.div variants={framerCard}>
								<BoxIcon>
									<FolderIcon />

									<TypoIcon fontSize={20} fontWeight={500}>
										20+
									</TypoIcon>
									<Typography fontSize={15} fontWeight={500}>
										Procject
									</Typography>
								</BoxIcon>
							</motion.div>

							<motion.div variants={framerCard}>
								<BoxIcon>
									<CoffeIcon />
									<TypoIcon fontSize={20} fontWeight={500}>
										100+
									</TypoIcon>
									<Typography fontSize={15} fontWeight={500}>
										Cup Coffe
									</Typography>
								</BoxIcon>
							</motion.div>

							<motion.div variants={framerCard}>
								<BoxIcon>
									<PsychologyIcon />

									<TypoIcon variant="body1" fontWeight={500}>
										12/7
									</TypoIcon>
									<Typography fontSize={15} fontWeight={500}>
										Learning
									</Typography>
								</BoxIcon>
							</motion.div>
						</BoxSubInfo>

						<Box>
							<motion.div variants={framerCard}>
								<Typography
									variant="body1"
									textAlign={"justify"}
									fontSize={18}
								>
									You can call me Awan or Nanang as
									comfortable as you like. I am 21 years old
									and a Final Semester Informatics Engineering
									Student from Unisbank Semarang. I have
									experience in creating websites more than 3
									year & completed more than 20 projects using
									modern technology. I specialize in building
									mobile responsive front-end UI applications
									that connect with API's and PHP/Express
									backend technologies.
								</Typography>
								<Typography
									variant="body1"
									textAlign={"justify"}
									fontSize={18}
									mt={1}
								>
									I m quick learner, can pick up new tech
									stacks as needed, always upgrading my new
									skills and learning up-to-date new tech
									stack.
								</Typography>
							</motion.div>
						</Box>
						<motion.div variants={framerCard}>
							<Link
								href={
									"https://drive.google.com/file/d/16NHwUP8QJPV8sVjuDZXU_kefBOM3iP82/view"
								}
								target={"_blank"}
								sx={{ textDecoration: "none" }}
							>
								<MainButton icon={<CloudDownload />}>
									Download CV
								</MainButton>
							</Link>
						</motion.div>
					</BoxInfo>
				</SubBox>
			</motion.div>
		</BoxMain>
	);
};

export default About;

const BoxMain = styled(Box)(({ theme }) => ({
	minHeight: "95vh",
	paddingTop: "100px",
	[theme.breakpoints.down("sm")]: {
		marginTop: "50px",
	},
}));

const SubBox = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		display: "flex",
		flexDirection: "row",
		padding: "100px",
		gap: 70,
	},

	[theme.breakpoints.down("sm")]: {
		display: "flex",
		flexDirection: "column",
	},
}));

const ImageBorder = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		width: "40%",
		marginTop: 0,
	},

	[theme.breakpoints.between("xs", "md")]: {
		display: "flex",
		justifyContent: "center",
		marginTop: 80,
	},
}));

const BoxInfo = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	[theme.breakpoints.up("md")]: {
		justifyContent: "space-between",
		gap: 20,
	},

	[theme.breakpoints.between("xs", "md")]: {
		marginTop: 20,
		gap: 20,
		paddingLeft: 20,
		paddingRight: 20,
	},
}));

const BoxSubInfo = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	[theme.breakpoints.up("md")]: {
		justifyContent: "start",
		gap: 25,
	},

	[theme.breakpoints.between("xs", "md")]: {
		gap: 10,
		flexWrap: "wrap",
	},
}));

const BoxIcon = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	alignContent: "center",
	height: "150px",
	width: "150px",
	padding: 10,
	backgroundColor: "#fff",
	boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
	borderRadius: 5,
	[theme.breakpoints.down("md")]: {
		padding: 3,
		height: "100px",
	},
}));

const PsychologyIcon = styled(PsychologyAlt)(({ theme }) => ({
	color: [theme.palette.primary.main],
	[theme.breakpoints.up("md")]: {
		fontSize: 50,
	},

	[theme.breakpoints.between("xs", "md")]: {
		fontSize: 30,
	},
}));

const CoffeIcon = styled(Coffee)(({ theme }) => ({
	color: [theme.palette.primary.main],
	[theme.breakpoints.up("md")]: {
		fontSize: 50,
	},

	[theme.breakpoints.between("xs", "md")]: {
		fontSize: 30,
	},
}));

const TypoIcon = styled(Typography)(({ theme }) => ({
	fontSize: 18,

	[theme.breakpoints.between("xs", "md")]: {
		fontSize: 15,
	},
}));

const FolderIcon = styled(Folder)(({ theme }) => ({
	color: [theme.palette.primary.main],
	[theme.breakpoints.up("md")]: {
		fontSize: 50,
	},

	[theme.breakpoints.between("xs", "md")]: {
		fontSize: 30,
	},
}));
