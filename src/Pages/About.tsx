import { Box, Button, styled, Typography } from "@mui/material";
import aimyon from "../assets/Aimyon.jpeg";
import MainButton from "../components/Button";
import CloudDownload from "@mui/icons-material/CloudDownload";
import PsychologyAlt from "@mui/icons-material/PsychologyAlt";
import Coffee from "@mui/icons-material/Coffee";
import Folder from "@mui/icons-material/FolderCopy";

const BoxMain = styled(Box)(({ theme }) => ({
	minHeight: "80vh",
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
		gap: 40,
	},

	[theme.breakpoints.between("xs", "md")]: {
		marginTop: 20,
		gap: 40,
		paddingLeft: 20,
		paddingRight: 20,
	},
}));

const BoxSubInfo = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	[theme.breakpoints.up("md")]: {
		gap: 25,
	},

	[theme.breakpoints.between("xs", "md")]: {
		gap: 10,
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
}));

const PsychologyIcon = styled(PsychologyAlt)(({ theme }) => ({
	color: [theme.palette.primary.main],
	[theme.breakpoints.up("md")]: {
		fontSize: 50,
	},

	[theme.breakpoints.between("xs", "md")]: {
		fontSize: 40,
	},
}));

const CoffeIcon = styled(Coffee)(({ theme }) => ({
	color: [theme.palette.primary.main],
	[theme.breakpoints.up("md")]: {
		fontSize: 50,
	},

	[theme.breakpoints.between("xs", "md")]: {
		fontSize: 40,
	},
}));

const FolderIcon = styled(Folder)(({ theme }) => ({
	color: [theme.palette.primary.main],
	[theme.breakpoints.up("md")]: {
		fontSize: 50,
	},

	[theme.breakpoints.between("xs", "md")]: {
		fontSize: 40,
	},
}));

const About = () => {
	return (
		<BoxMain id="about">
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				About Me
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				Introduce Myself
			</Typography>

			<SubBox>
				<ImageBorder>
					<Box
						component="img"
						alt="profil"
						src={aimyon}
						sx={{
							borderRadius: "30px",
							height: { xs: "300px", lg: "500px" },
							width: { xs: "300px", lg: "500px" },
						}}
					/>
				</ImageBorder>

				<BoxInfo>
					<BoxSubInfo>
						<BoxIcon>
							<FolderIcon />

							<Typography fontSize={20} fontWeight={500}>
								20+
							</Typography>
							<Typography fontSize={15} fontWeight={500}>
								Procject
							</Typography>
						</BoxIcon>

						<BoxIcon>
							<CoffeIcon />
							<Typography fontSize={20} fontWeight={500}>
								100+
							</Typography>
							<Typography fontSize={15} fontWeight={500}>
								Cup Coffe
							</Typography>
						</BoxIcon>
						<BoxIcon>
							<PsychologyIcon />

							<Typography fontSize={20} fontWeight={500}>
								24/7
							</Typography>
							<Typography fontSize={15} fontWeight={500}>
								Learning
							</Typography>
						</BoxIcon>
					</BoxSubInfo>
					<Typography
						variant="body1"
						textAlign={"justify"}
						fontSize={20}
					>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
					</Typography>
					<MainButton icon={<CloudDownload />}>
						Download CV
					</MainButton>
				</BoxInfo>
			</SubBox>
		</BoxMain>
	);
};

export default About;
