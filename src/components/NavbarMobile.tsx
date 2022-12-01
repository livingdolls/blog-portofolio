import {
	Box,
	Button,
	Grid,
	Link,
	Slide,
	styled,
	Typography,
} from "@mui/material";
import { useState } from "react";
import home from "../assets/home.svg";
import close from "../assets/close.svg";
import manu from "../assets/manu.svg";

const menu = [
	{ menu: "Home", link: "/home" },
	{ menu: "About", link: "/home" },
	{ menu: "Skills", link: "/home" },
	{ menu: "Portofolio", link: "/home" },
	{ menu: "Contact", link: "/home" },
];

const MainBottom = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("xs")]: {
		position: "fixed",
		bottom: 0,
		right: 0,
		left: 0,
	},
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const BottomNav = styled(Box)(({ theme }) => ({
	height: "40px",
	display: "flex",
	padding: "10px",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
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
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const MenuItem = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("xs")]: {
		display: "flex",
		gap: 5,
		flexDirection: "column",
		alignItems: "center",
		alignConten: "center",
	},
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const NavbarMobile = () => {
	const [open, setOpen] = useState(false);
	return (
		<MainBottom>
			<BottomNav>
				<Typography variant="body1">Nanang Setiawan</Typography>
				<Button
					onClick={() => {
						setOpen(true);
					}}
				>
					<img src={manu} alt="menu" height={"20px"} width="20px" />
				</Button>
			</BottomNav>
			<Slide direction="up" in={open}>
				<ModalBottom>
					<Grid container spacing={3} alignItems="center">
						{menu.map((e) => {
							return (
								<Grid item xs={4}>
									<MenuItem>
										<img
											src={home}
											width="30px"
											height="30px"
										/>
										<Link
											href="#"
											underline="none"
											color={"text.secondary"}
										>
											Menu
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
						<img
							src={close}
							alt="close"
							height="20px"
							width="20px"
						/>
					</Box>
				</ModalBottom>
			</Slide>
		</MainBottom>
	);
};

export default NavbarMobile;
