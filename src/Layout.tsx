import { Container } from "@mui/material";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Portofolio from "./Pages/Portofolio";
import Skill from "./Pages/Skill";

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
