import { Box, Container, styled } from "@mui/material";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Portofolio from "./Portofolio";
import Skill from "./Skill";

const Layout = () => {
	return (
		<>
			<Container maxWidth="xl">
				<Navbar />
				<Hero />
				<About />
				<Skill />
				<Portofolio />
				<Contact />
				<Footer />
			</Container>
			<NavbarMobile />
		</>
	);
};

export default Layout;
