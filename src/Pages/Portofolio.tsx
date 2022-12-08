import { Box, styled, Typography } from "@mui/material";
import { useState } from "react";
import CardPorto from "../components/CardPorto";
import ModalMain from "../components/ModalMain";
import { TDesc } from "../config/Porto";

const Portofolio = () => {
	const [modal, setModal] = useState<boolean>(false);
	const [info, setInfo] = useState<TDesc>({ info: "", nice: [] });

	const infoHandler = (data: TDesc) => {
		setInfo(data);
		setModal(true);
	};
	return (
		<MainPorto id="portofolio">
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Portofolio
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				My Best Project
			</Typography>

			<CardPorto infoHandler={infoHandler} />
			<ModalMain modal={modal} setModal={setModal} info={info} />
		</MainPorto>
	);
};

export default Portofolio;

const MainPorto = styled(Box)(({ theme }) => ({
	padding: "50px",
}));
