import { Container } from "@mui/material";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Portofolio from "./Pages/Portofolio";
import Skill from "./Pages/Skill";
import ModalTheme from "./components/ModalTheme";
import { useState } from "react";

export type themeProps = {
	theme: any;
	setTheme: any;
};

const Layout: React.FC<themeProps> = ({ theme, setTheme }) => {
	const getData = (comp: string) => {
		const element = document.getElementById(comp);
		element?.scrollIntoView({
			behavior: "smooth",
			block: "end",
			inline: "nearest",
		});
	};
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			<Container maxWidth="xl">
				<Navbar sendLink={getData} setOpen={setOpen} />
				<Hero sendLink={getData} />
				<About />
				<Skill />
				<Portofolio />
				<Contact />
				<Footer />
				<ModalTheme
					theme={theme}
					setTheme={setTheme}
					open={open}
					setOpen={setOpen}
				/>
			</Container>
			<NavbarMobile sendLink={getData} setOpen={setOpen} />
		</>
	);
};

export default Layout;
