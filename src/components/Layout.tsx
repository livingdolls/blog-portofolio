import { Box, Container, styled } from "@mui/material";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

const Layout = () => {
	return (
		<>
			<Container maxWidth="xl">
				<Navbar />
			</Container>
			<NavbarMobile />
		</>
	);
};

export default Layout;
