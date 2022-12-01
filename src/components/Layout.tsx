import { Box, Container, styled } from "@mui/material";
import Hero from "./Hero";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

const Layout = () => {
	return (
		<>
			<Container maxWidth="xl">
				<Navbar />
				<Hero />
			</Container>
			<NavbarMobile />
		</>
	);
};

export default Layout;
