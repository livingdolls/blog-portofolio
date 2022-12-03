import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	styled,
	Typography,
} from "@mui/material";

const BoxMain = styled(Box)(({ theme }) => ({
	padding: "100px",
	paddingTop: 0,

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

const Skill = () => {
	return (
		<BoxMain>
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Skills
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				Best Skill Me
			</Typography>

			<BoxSkill>
				<BoxSub>
					<SkillTypo variant={"h6"}>FRONT-END</SkillTypo>

					<List>
						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"HTML"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"CSS"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"Javascript"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"React JS"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"Material UI"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"Boostrap"} />
						</ListItem>
					</List>
				</BoxSub>

				<BoxSub>
					<SkillTypo variant={"h6"}>BACK-END</SkillTypo>

					<List>
						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"PHP Native"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"Express JS"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"Laravel"} />
						</ListItem>
						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"REST API"} />
						</ListItem>
						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"MySql"} />
						</ListItem>
					</List>
				</BoxSub>
			</BoxSkill>
		</BoxMain>
	);
};

export default Skill;
