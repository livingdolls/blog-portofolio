import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Link,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
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

const data = [
	{
		porto: "E Commerce",
		thumb: "http://",
		tech: [Php, My, Bs],
		link: "https://github.com/livingdolls/ecomercenative-projek",
	},
	{
		porto: "Point Of Sale",
		thumb: "http://",
		tech: [Ejs, Ts, React, Mui, My, Rest],
		link: "https://github.com/livingdolls/react-typescript-pos",
	},
	{
		porto: "Information Retrieval",
		thumb: "http://",
		tech: [Php, My, React, Mui, Rest],
		link: "https://github.com/livingdolls/frontend-information-retrieval",
	},
	{
		porto: "Express JWT Auth",
		thumb: "http://",
		tech: [Ejs, My, Rest],
		link: "https://github.com/livingdolls/express-jwt-auth",
	},
	{
		porto: "ToDo App",
		thumb: "https://raw.githubusercontent.com/livingdolls/todoApp/main/src/img/Desain%20tanpa%20judul.png",
		tech: [React, Mui],
		link: "https://github.com/livingdolls/todoApp",
	},
	{
		porto: "Youtube Clone UI",
		thumb: "https://raw.githubusercontent.com/livingdolls/youtube-material/main/src/img/Screenshoot/Light%20large.png",
		tech: [React, Mui],
		link: "https://github.com/livingdolls/youtube-material",
	},
	{
		porto: "Twitter Clone UI",
		thumb: "https://raw.githubusercontent.com/livingdolls/twitter-material/main/src/assets/Screenshoot/Twitter%20Large.png",
		tech: [React, Mui],
		link: "https://github.com/livingdolls/twitter-material",
	},
];

const CardPorto: any = () => {
	return data.map((d) => {
		return (
			<Card sx={{ width: 350 }} elevation={3}>
				<CardMedia src={d.thumb} component="img" height={200} />
				<CardContent>
					<Typography fontWeight={500}>{d.porto}</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							gap: 2,
							mt: 1,
						}}
					>
						{d.tech.map((t) => {
							return (
								<Box
									component="img"
									height={25}
									width={25}
									src={t}
								/>
							);
						})}
					</Box>
				</CardContent>
				<CardActions>
					<Link href={d.link} target="_blank">
						<Button variant="contained" size="small">
							Code
						</Button>
					</Link>
				</CardActions>
			</Card>
		);
	});
};

export default CardPorto;
