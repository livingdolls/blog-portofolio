import { AppBar, Box, Link, styled, Typography } from "@mui/material";

const menu = [
	{ menu: "Home", link: "/home" },
	{ menu: "About", link: "/home" },
	{ menu: "Skills", link: "/home" },
	{ menu: "Portofolio", link: "/home" },
	{ menu: "Contact", link: "/home" },
];

const Header = styled(AppBar)(({ theme }) => ({
	position: "sticky",
	backgroundColor: "rgba(0%, 0%, 0%, 0)",
}));

const Nav = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("xs")]: {
		display: "none",
	},
	[theme.breakpoints.up("sm")]: {
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

const Navbar = () => {
	return (
		<Header elevation={0} color="secondary">
			<Nav>
				<Box>
					<Typography variant="h5" fontWeight={500} color={"primary"}>
						Nanang Setiawan
					</Typography>
				</Box>

				<Menu>
					{menu.map((e) => {
						return (
							<Link href="#" underline="none">
								{e.menu}
							</Link>
						);
					})}
				</Menu>
			</Nav>
		</Header>
	);
};

export default Navbar;
