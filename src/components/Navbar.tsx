import { AppBar, Box, Link, styled, Typography } from "@mui/material";
import ColorLens from "@mui/icons-material/ColorLens";

const menu = [
	{ menu: "Home", link: "hero" },
	{ menu: "About", link: "about" },
	{ menu: "Skills", link: "skill" },
	{ menu: "Portofolio", link: "portofolio" },
	{ menu: "Contact", link: "contact" },
];

const Header = styled(AppBar)(({ theme }) => ({
	position: "sticky",
	backgroundColor: [theme.palette.background.default],
}));

const Nav = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("xs")]: {
		display: "none",
	},
	[theme.breakpoints.up("md")]: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "80px",
	},
}));

const Menu = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: 40,
	fontWeight: 500,
	fontSize: "20px",
}));

const LinkMenu = styled(Link)(({ theme }) => ({
	cursor: "pointer",
	padding: 5,
	"&:hover": {
		backgroundColor: [theme.palette.primary.main],
		color: "#fff",
		borderRadius: 5,
	},
}));

const ColorIcon = styled(ColorLens)(({ theme }) => ({
	fontSize: 25,
}));

export type propsNavbar = {
	sendLink: (comp: string) => void;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<propsNavbar> = ({ sendLink, setOpen }) => {
	return (
		<Header elevation={0} color="secondary">
			<Nav>
				<Box>
					<Typography variant="h5" fontWeight={500} color={"primary"}>
						Setiawan Nanang
					</Typography>
				</Box>

				<Menu>
					{menu.map((e) => {
						return (
							<LinkMenu
								onClick={() => sendLink(e.link)}
								underline="none"
								key={e.link}
							>
								{e.menu}
							</LinkMenu>
						);
					})}
					<LinkMenu
						onClick={() => setOpen(true)}
						underline="none"
						key={"modal"}
						sx={{ mt: 1 }}
					>
						<ColorIcon />
					</LinkMenu>
				</Menu>
			</Nav>
		</Header>
	);
};

export default Navbar;
