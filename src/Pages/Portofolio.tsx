import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	styled,
	Typography,
} from "@mui/material";
import aimyon from "../assets/Aimyon.jpeg";
import Js from "../assets/svg/js.svg";
import Ts from "../assets/svg/ts.svg";
import React from "../assets/svg/React.svg";
import Php from "../assets/svg/Php.svg";
import Ejs from "../assets/svg/Ejs.svg";
import Bs from "../assets/svg/Bs.svg";
import Rest from "../assets/svg/Rest.svg";
import Lr from "../assets/svg/Lr.svg";
import My from "../assets/svg/My.svg";
import Mui from "../assets/svg/Mui.svg";

const MainPorto = styled(Box)(({ theme }) => ({
	padding: "50px",
}));

const Portofolio = () => {
	return (
		<MainPorto id="portofolio">
			<Typography variant="h2" fontWeight={500} textAlign={"center"}>
				Portofolio
			</Typography>
			<Typography variant="h6" fontWeight={300} textAlign={"center"}>
				My Best Project
			</Typography>

			<Box
				display="flex"
				flexDirection={"row"}
				flexWrap={"wrap"}
				justifyContent={"center"}
				gap={5}
				marginTop={10}
			>
				<Card sx={{ width: 250 }}>
					<CardMedia src={aimyon} component="img" height={200} />
					<CardContent>
						<Typography fontWeight={500}>E Commerce</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: 2,
								mt: 1,
							}}
						>
							<Box
								component="img"
								height={25}
								width={25}
								src={Php}
							/>

							<Box
								component="img"
								height={25}
								width={25}
								src={My}
							/>

							<Box
								component="img"
								height={25}
								width={25}
								src={Bs}
							/>
						</Box>
					</CardContent>
					<CardActions>
						<Button variant="contained" size="small">
							Code
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ width: 300 }}>
					<CardMedia src={aimyon} component="img" height={200} />
					<CardContent>
						<Typography fontWeight={500}>Point Of Sale</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: 2,
								mt: 1,
							}}
						>
							<Box
								component="img"
								height={25}
								width={25}
								src={Ejs}
							/>

							<Box
								component="img"
								height={25}
								width={25}
								src={React}
							/>

							<Box
								component="img"
								height={25}
								width={25}
								src={My}
							/>
						</Box>
					</CardContent>
					<CardActions>
						<Button variant="contained" size="small">
							Code
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ width: 300 }}>
					<CardMedia src={aimyon} component="img" height={200} />
					<CardContent>
						<Typography fontWeight={500}>
							Information Retrieval
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: 2,
								mt: 1,
							}}
						>
							<Box
								component="img"
								height={25}
								width={25}
								src={Php}
							/>

							<Box
								component="img"
								height={25}
								width={25}
								src={My}
							/>

							<Box
								component="img"
								height={25}
								width={25}
								src={React}
							/>

							<Box
								component="img"
								height={25}
								width={25}
								src={Mui}
							/>
						</Box>
					</CardContent>
					<CardActions>
						<Button variant="contained" size="small">
							Code
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ width: 300 }}>
					<CardMedia src={aimyon} component="img" height={200} />
					<CardContent>
						<Typography fontWeight={500}>
							Express JWT Auth
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: 2,
								mt: 1,
							}}
						>
							<Box
								component="img"
								height={25}
								width={25}
								src={Ejs}
							/>

							<Box
								component="img"
								height={25}
								width={25}
								src={My}
							/>
						</Box>
					</CardContent>
					<CardActions>
						<Button variant="contained" size="small">
							Code
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ width: 300 }}>
					<CardMedia src={aimyon} component="img" height={200} />
					<CardContent>
						<Typography fontWeight={500}>ToDo App</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: 2,
								mt: 1,
							}}
						>
							<Box
								component="img"
								height={25}
								width={25}
								src={React}
							/>

							<Box
								component="img"
								height={25}
								width={25}
								src={Mui}
							/>
						</Box>
					</CardContent>
					<CardActions>
						<Button variant="contained" size="small">
							Code
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ width: 300 }}>
					<CardMedia src={aimyon} component="img" height={200} />
					<CardContent>
						<Typography fontWeight={500}>
							Youtube UI Clone
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: 2,
								mt: 1,
							}}
						>
							<Box
								component="img"
								height={25}
								width={25}
								src={React}
							/>

							<Box
								component="img"
								height={25}
								width={25}
								src={Mui}
							/>
						</Box>
					</CardContent>
					<CardActions>
						<Button variant="contained" size="small">
							Code
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ width: 300 }}>
					<CardMedia src={aimyon} component="img" height={200} />
					<CardContent>
						<Typography fontWeight={500}>
							Twitter UI Clone
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: 2,
								mt: 1,
							}}
						>
							<Box
								component="img"
								height={25}
								width={25}
								src={React}
							/>

							<Box
								component="img"
								height={25}
								width={25}
								src={Mui}
							/>
						</Box>
					</CardContent>

					<CardActions>
						<Button variant="contained" size="small">
							Code
						</Button>
					</CardActions>
				</Card>
			</Box>
		</MainPorto>
	);
};

export default Portofolio;
