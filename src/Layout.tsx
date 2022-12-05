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
	const getData = (comp: string) => {
		const element = document.getElementById(comp);
		element?.scrollIntoView({
			behavior: "smooth",
			block: "end",
			inline: "nearest",
		});
	};
	return (
		<>
			<Container maxWidth="xl">
				<Navbar sendLink={getData} />
				<Hero sendLink={getData} />
				<About />
				<Skill />
				<Portofolio />
				<Contact />
				<Footer />
			</Container>
			<NavbarMobile sendLink={getData} />
		</>
	);
};

export default Layout;
