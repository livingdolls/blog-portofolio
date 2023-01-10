import { Info } from "@mui/icons-material";
import GitHub from "@mui/icons-material/GitHub";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Link,
	styled,
	Tooltip,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { dataPorto, TDesc } from "../config/Porto";
import { motion } from "framer-motion";

type propsCard = {
	infoHandler: (data: TDesc) => void;
};

const boxMotion = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.5,
			duration: 1,
			staggerChildren: 0.3,
		},
	},
};

const framerCard = {
	hidden: {
		x: -10,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
	},
};

const CardPorto: React.FC<propsCard> = ({ infoHandler }) => {
	return (
		<motion.div
			variants={boxMotion}
			initial={"hidden"}
			whileInView={"visible"}
		>
			<Box
				display="flex"
				flexDirection={"row"}
				flexWrap={"wrap"}
				justifyContent={"center"}
				alignItems={"flex-start"}
				gap={5}
				marginTop={10}
			>
				{dataPorto.map((d) => {
					return (
						<motion.div variants={framerCard}>
							<Card
								sx={{ width: 350 }}
								elevation={3}
								key={d.porto}
							>
								<CardMedia
									src={d.thumb}
									component="img"
									height={200}
								/>
								<CardContent>
									<Typography fontWeight={500}>
										{d.porto}
									</Typography>
									<Box
										sx={{
											display: "flex",
											flexDirection: "row",
											flexWrap: "wrap",
											gap: 1,
											mt: 1,
										}}
									>
										{d.tech.map((t) => {
											return (
												<TechTypo key={t}>{t}</TechTypo>
											);
										})}
									</Box>
								</CardContent>
								<CardActions
									sx={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
									}}
								>
									<Tooltip title="view on github">
										<Link href={d.link} target="_blank">
											<Button variant="text" size="small">
												<GitHub />
											</Button>
										</Link>
									</Tooltip>

									<Tooltip title="info project">
										<Button
											variant="text"
											size="small"
											onClick={() => infoHandler(d.desc)}
										>
											<Info />
										</Button>
									</Tooltip>
								</CardActions>
							</Card>
						</motion.div>
					);
				})}
			</Box>
		</motion.div>
	);
};

export default CardPorto;

const TechTypo = styled(Typography)(({ theme }) => ({
	backgroundColor: [theme.palette.primary.main],
	padding: 2,
	paddingRight: 5,
	paddingLeft: 5,
	borderRadius: 8,
	fontSize: "15px",
	color: "#fff",
	[theme.breakpoints.up("xs")]: {},
	[theme.breakpoints.up("md")]: {},
}));
