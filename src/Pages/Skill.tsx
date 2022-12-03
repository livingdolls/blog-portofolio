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
					<Typography variant={"h4"} textAlign={"center"}>
						FrontEnd
					</Typography>

					<List>
						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"HTML"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"HTML"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"HTML"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"HTML"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"HTML"} />
						</ListItem>
					</List>
				</BoxSub>

				<BoxSub>
					<Typography variant={"h4"} textAlign={"center"}>
						BackEnd
					</Typography>

					<List>
						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"HTML"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"HTML"} />
						</ListItem>

						<ListItem>
							<ListItemIcon>C</ListItemIcon>
							<ListItemText primary={"HTML"} />
						</ListItem>
					</List>
				</BoxSub>
			</BoxSkill>
		</BoxMain>
	);
};

export default Skill;
