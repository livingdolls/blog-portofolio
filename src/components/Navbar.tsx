import { Box, Link, styled } from "@mui/material";

const menu = [
	{ menu: "Home", link: "/home" },
	{ menu: "About", link: "/home" },
	{ menu: "Skills", link: "/home" },
	{ menu: "Portofolio", link: "/home" },
	{ menu: "Contact", link: "/home" },
];

const Header = styled(Box)(({ theme }) => ({
	position: "sticky",
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
		border: "1px solid red",
	},
}));

const Menu = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: 20,
}));

const Navbar = () => {
	return (
		<Header>
			<Nav>
				<Box>Nanang Setiawan</Box>

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
