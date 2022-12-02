import { Box, Button, styled, Typography } from "@mui/material";
import aimyon from "../assets/Aimyon.jpeg";

const BoxMain = styled(Box)(({ theme }) => ({}));

const SubBox = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	padding: "100px",
	border: "1px solid red",
	gap: 70,
}));

const About = () => {
	return (
		<BoxMain>
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				About Me
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				Perkenalkan Diri Saya
			</Typography>

			<SubBox>
				<Box
					sx={{
						width: "40%",
					}}
				>
					<Box
						component="img"
						height={500}
						width={500}
						alt="profil"
						src={aimyon}
						sx={{ borderRadius: "30px" }}
					/>
				</Box>

				<Box
					display="flex"
					flexDirection={"column"}
					justifyContent={"space-between"}
					sx={{ width: "50%", padding: 5 }}
				>
					<Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
						<Box
							sx={{
								width: "150px",
								height: "150px",
								padding: "10px",
								backgroundColor: "#fff",
							}}
						>
							20+ Procject
						</Box>
						<Box
							sx={{
								width: "150px",
								height: "150px",
								padding: "10px",
								backgroundColor: "#fff",
							}}
						>
							100+ Cup Coffe
						</Box>
						<Box
							sx={{
								width: "150px",
								height: "150px",
								padding: "10px",
								backgroundColor: "#fff",
							}}
						>
							24/7 Learning
						</Box>
					</Box>
					<Typography variant="body1" textAlign={"justify"}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</Typography>
					<Button
						variant="contained"
						color="primary"
						sx={{ height: "70px", width: "200px" }}
					>
						Download CV
					</Button>
				</Box>
			</SubBox>
		</BoxMain>
	);
};

export default About;
