import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	styled,
	Typography,
} from "@mui/material";
import Js from "../assets/svg/js.svg";
import Ts from "../assets/svg/ts.svg";
import React from "../assets/svg/React.svg";
import Php from "../assets/svg/Php.svg";
import Ejs from "../assets/svg/Ejs.svg";
import Bs from "../assets/svg/Bs.svg";
import Rest from "../assets/svg/Rest.svg";
import Lr from "../assets/svg/Lr.svg";
import My from "../assets/svg/My.svg";
import Mui from "../assets/svg/Mui.svg";

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
		<BoxMain id="skill">
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Skills
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				My Best Skill
			</Typography>

			<BoxSkill>
				<BoxSub>
					<SkillTypo variant={"h6"}>FRONT-END</SkillTypo>

					<List>
						<ListItem>
							<ListItemIcon>
								<Box
									component="img"
									height={20}
									width={20}
									src={Js}
								/>
							</ListItemIcon>
							<ListItemText primary={"Javascript"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>
								<Box
									component="img"
									height={20}
									width={20}
									src={React}
								/>
							</ListItemIcon>
							<ListItemText primary={"React JS / Next JS"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>
								<Box
									component="img"
									height={20}
									width={20}
									src={Ts}
								/>
							</ListItemIcon>
							<ListItemText primary={"Typescript"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>
								<Box
									component="img"
									height={20}
									width={20}
									src={Mui}
								/>
							</ListItemIcon>
							<ListItemText primary={"Material UI"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>
								<Box
									component="img"
									height={20}
									width={20}
									src={Bs}
								/>
							</ListItemIcon>
							<ListItemText primary={"Boostrap"} />
						</ListItem>
					</List>
				</BoxSub>

				<BoxSub>
					<SkillTypo variant={"h6"}>BACK-END</SkillTypo>

					<List>
						<ListItem>
							<ListItemIcon>
								<Box
									component="img"
									height={20}
									width={20}
									src={Php}
								/>
							</ListItemIcon>
							<ListItemText primary={"PHP Native"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>
								<Box
									component="img"
									height={20}
									width={20}
									src={Ejs}
								/>
							</ListItemIcon>
							<ListItemText primary={"Express JS"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>
								<Box
									component="img"
									height={20}
									width={20}
									src={Lr}
								/>
							</ListItemIcon>
							<ListItemText primary={"Laravel"} />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<Box
									component="img"
									height={20}
									width={20}
									src={Rest}
								/>
							</ListItemIcon>
							<ListItemText primary={"REST API"} />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<Box
									component="img"
									height={20}
									width={20}
									src={My}
								/>
							</ListItemIcon>
							<ListItemText primary={"MySql"} />
						</ListItem>
					</List>
				</BoxSub>
			</BoxSkill>
		</BoxMain>
	);
};

export default Skill;
