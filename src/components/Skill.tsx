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
	height: "80vh",
	border: "1px solid yellow",
	padding: "100px",

	[theme.breakpoints.down("sm")]: {
		marginTop: 150,
		padding: "10px",
	},
}));

const BoxSkill = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("lg")]: {
		display: "flex",
		flexDirection: "column",
		border: "1px solid orange",
		alignItems: "center",
		justifyContent: "space-around",
		height: "50vh",
		gap: 10,
	},

	[theme.breakpoints.up("lg")]: {
		display: "flex",
		flexDirection: "row",
		border: "1px solid cyan",
		alignItems: "center",
		justifyContent: "space-around",
		height: "50vh",
		gap: 10,
	},

	[theme.breakpoints.down("sm")]: {
		display: "flex",
		flexDirection: "column",
		border: "1px solid blue",
		alignItems: "center",
		height: "50vh",
		justifyContent: "center",
		gap: 10,
	},
}));

const BoxSub = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("lg")]: {
		border: "1px solid red",
		backgroundColor: "#fff",
		padding: "10px",
		width: "100%",
	},

	[theme.breakpoints.up("lg")]: {
		width: "40%",
		border: "1px solid green",
		backgroundColor: "#fff",
		padding: "20px",
	},
}));

const Skill = () => {
	return (
		<BoxMain>
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Skill
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
