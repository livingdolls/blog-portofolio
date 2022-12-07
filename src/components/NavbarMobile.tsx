import {
	Box,
	Button,
	Grid,
	Link,
	Slide,
	styled,
	Tooltip,
	Typography,
} from "@mui/material";
import { useState } from "react";
import Home from "@mui/icons-material/Home";
import Close from "@mui/icons-material/Close";
import Person from "@mui/icons-material/Person4";
import Code from "@mui/icons-material/Code";
import Folder from "@mui/icons-material/FolderCopy";
import Contact from "@mui/icons-material/ContactPage";
import Menu from "@mui/icons-material/Menu";
import ColorLens from "@mui/icons-material/ColorLens";
import { propsNavbar } from "./Navbar";

const MainBottom = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("xs")]: {
		position: "fixed",
		bottom: 0,
		right: 0,
		left: 0,
	},
	[theme.breakpoints.up("md")]: {
		display: "none",
	},
}));

const MenuIcon = styled(Menu)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 25,
	fontWeight: 700,
}));

const HomeIcon = styled(Home)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 30,
}));

const CloseIcon = styled(Close)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 30,
	fontWeight: 700,
}));

const PersonIcon = styled(Person)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 30,
}));

const CodeIcon = styled(Code)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 30,
}));

const FolderIcon = styled(Folder)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 30,
}));

const ContactIcon = styled(Contact)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 30,
}));

const BottomNav = styled(Box)(({ theme }) => ({
	height: "40px",
	display: "flex",
	padding: "10px",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	backgroundColor: [theme.palette.background.default],
}));

const ModalBottom = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("xs")]: {
		position: "fixed",
		bottom: 0,
		left: 0,
		right: 0,
		borderRadius: "20px 20px 0 0",
		backgroundColor: "#fff",
		height: "280px",
		padding: "25px",
		paddingTop: "50px",
	},
	[theme.breakpoints.up("md")]: {
		display: "none",
	},
}));

const MenuItem = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("xs")]: {
		display: "flex",
		gap: 15,
		flexDirection: "column",
		alignItems: "center",
		alignConten: "center",
	},
	[theme.breakpoints.up("md")]: {
		display: "none",
	},
}));

const ColorIcon = styled(ColorLens)(({ theme }) => ({
	fontSize: 30,
}));

const menu = [
	{ menu: "Home", link: "hero", icon: <HomeIcon /> },
	{ menu: "About", link: "about", icon: <PersonIcon /> },
	{ menu: "Skills", link: "skill", icon: <CodeIcon /> },
	{ menu: "Portofolio", link: "portofolio", icon: <FolderIcon /> },
	{ menu: "Contact", link: "contact", icon: <ContactIcon /> },
];

const NavbarMobile: React.FC<propsNavbar> = ({ sendLink, setOpen }) => {
	const [opens, setOpens] = useState(false);
	return (
		<MainBottom>
			<BottomNav>
				<Typography variant="body1" fontWeight={500} fontSize={20}>
					Setiawan
				</Typography>
				<Button
					onClick={() => {
						setOpens(true);
					}}
				>
					<Tooltip title="Open Menu">
						<MenuIcon />
					</Tooltip>
				</Button>
			</BottomNav>
			<Slide direction="up" in={opens}>
				<ModalBottom>
					<Grid container spacing={3} alignItems="center">
						{menu.map((e) => {
							return (
								<Grid key={e.link} item xs={4}>
									<Link
										onClick={() => sendLink(e.link)}
										underline="none"
									>
										<MenuItem>
											{e.icon}
											<Typography
												fontWeight={600}
												color={"text.secondary"}
											>
												{e.menu}
											</Typography>
										</MenuItem>
									</Link>
								</Grid>
							);
						})}

						<Grid key={"modal"} item xs={4}>
							<Link
								underline="none"
								onClick={() => setOpen(true)}
							>
								<MenuItem>
									<ColorIcon />
									<Typography
										fontWeight={600}
										color={"text.secondary"}
									>
										Theme
									</Typography>
								</MenuItem>
							</Link>
						</Grid>
					</Grid>
					<Box
						sx={{ position: "fixed", bottom: 25, right: 40 }}
						onClick={() => {
							setOpens(false);
						}}
					>
						<Tooltip title="Close">
							<CloseIcon />
						</Tooltip>
					</Box>
				</ModalBottom>
			</Slide>
		</MainBottom>
	);
};

export default NavbarMobile;
