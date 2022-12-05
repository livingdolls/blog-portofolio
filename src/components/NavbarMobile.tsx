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

const menu = [
	{ menu: "Home", link: "hero", icon: <HomeIcon /> },
	{ menu: "About", link: "about", icon: <PersonIcon /> },
	{ menu: "Skills", link: "skill", icon: <CodeIcon /> },
	{ menu: "Portofolio", link: "portofolio", icon: <FolderIcon /> },
	{ menu: "Contact", link: "contact", icon: <ContactIcon /> },
];

const NavbarMobile: React.FC<propsNavbar> = ({ sendLink }) => {
	const [open, setOpen] = useState(false);
	return (
		<MainBottom>
			<BottomNav>
				<Typography variant="body1" fontWeight={500} fontSize={20}>
					Setiawan
				</Typography>
				<Button
					onClick={() => {
						setOpen(true);
					}}
				>
					<Tooltip title="Open Menu">
						<MenuIcon />
					</Tooltip>
				</Button>
			</BottomNav>
			<Slide direction="up" in={open}>
				<ModalBottom>
					<Grid container spacing={3} alignItems="center">
						{menu.map((e) => {
							return (
								<Grid key={e.link} item xs={4}>
									<MenuItem>
										{e.icon}
										<Link
											onClick={() => sendLink(e.link)}
											underline="none"
											color={"text.secondary"}
										>
											{e.menu}
										</Link>
									</MenuItem>
								</Grid>
							);
						})}
					</Grid>
					<Box
						sx={{ position: "fixed", bottom: 30, right: 40 }}
						onClick={() => {
							setOpen(false);
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
