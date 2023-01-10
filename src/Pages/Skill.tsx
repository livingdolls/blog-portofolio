import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	styled,
	Typography,
} from "@mui/material";
import { SkillBackend, SkillFrontend } from "../config/Skill";
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

const cardOne = {
	hidden: {
		x: -200,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.5,
			duration: 1,
		},
	},
};

const cardTwo = {
	hidden: {
		y: -200,
		opacity: 0,
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

const Skill = () => {
	return (
		<BoxMain id="skill">
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Skills
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				My Best Skill
			</Typography>

			<motion.div
				variants={boxMotion}
				initial={"hidden"}
				whileInView={"visible"}
			>
				<BoxSkill>
					<BoxSub>
						<motion.div variants={cardOne}>
							<SkillTypo variant={"h6"}>FRONT-END</SkillTypo>

							<List>
								{SkillFrontend.map((e, i) => {
									return (
										<ListItem key={i}>
											<ListItemIcon>
												<Box
													component="img"
													height={20}
													width={20}
													src={e.icon}
												/>
											</ListItemIcon>
											<ListItemText primary={e.nama} />
										</ListItem>
									);
								})}
							</List>
						</motion.div>
					</BoxSub>
					<BoxSub>
						<motion.div variants={cardTwo}>
							<SkillTypo variant={"h6"}>BACK-END</SkillTypo>

							<List>
								{SkillBackend.map((e, i) => {
									return (
										<ListItem key={i}>
											<ListItemIcon>
												<Box
													component="img"
													height={20}
													width={20}
													src={e.icon}
												/>
											</ListItemIcon>
											<ListItemText primary={e.nama} />
										</ListItem>
									);
								})}
							</List>
						</motion.div>
					</BoxSub>
				</BoxSkill>
			</motion.div>
		</BoxMain>
	);
};

export default Skill;

const BoxMain = styled(Box)(({ theme }) => ({
	padding: "100px",
	paddingTop: "100px",
	minHeight: "95vh",

	[theme.breakpoints.down("lg")]: {
		marginTop: 100,
		padding: "10px",
	},
}));

const BoxSkill = styled(Box)(({ theme }) => ({
	display: "flex",
	marginTop: 50,
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		gap: 10,
	},

	[theme.breakpoints.up("md")]: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: "50px",
		gap: 10,
	},
}));

const BoxSub = styled(Box)(({ theme }) => ({
	boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
	[theme.breakpoints.down("lg")]: {
		backgroundColor: "#fff",
		padding: "10px",
		width: "100%",
	},

	[theme.breakpoints.up("lg")]: {
		width: "40%",
		backgroundColor: "#fff",
		padding: "20px",
	},
}));

const SkillTypo = styled(Typography)(({ theme }) => ({
	fontSize: "20px",
	fontWeight: 600,
	textAlign: "center",
	color: [theme.palette.primary.main],
	[theme.breakpoints.down("lg")]: {},

	[theme.breakpoints.up("lg")]: {},
}));
