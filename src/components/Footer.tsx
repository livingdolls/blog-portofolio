import { Box, Divider, Link, styled, Tooltip, Typography } from "@mui/material";
import Github from "@mui/icons-material/GitHub";
import Facebook from "@mui/icons-material/Facebook";
import Linkedin from "@mui/icons-material/LinkedIn";

const MainBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	justifyContent: "space-between",
	height: "20vh",
	padding: "25px",
	[theme.breakpoints.between("xs", "md")]: {
		marginBottom: 10,
	},
}));

const GithubIcon = styled(Github)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 50,
}));

const FacebookIcon = styled(Facebook)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 50,
}));

const LinkedinIcon = styled(Linkedin)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontSize: 50,
}));

const Footer = () => {
	return (
		<MainBox>
			<Typography variant="h5" fontWeight={500}>
				Setiawan Nanang
			</Typography>
			<Box display="flex" flexDirection={"row"} gap={5}>
				<Link href="https://github.com/livingdolls" target={"_blank"}>
					<Tooltip title="Github" arrow placement="bottom">
						<GithubIcon />
					</Tooltip>
				</Link>

				<Link
					href="https://web.facebook.com/profile.php?id=100007789293041"
					target={"_blank"}
				>
					<Tooltip title="Facebook" arrow placement="bottom">
						<FacebookIcon />
					</Tooltip>
				</Link>

				<Link
					href="https://www.linkedin.com/in/nanang-setiawaan/"
					target={"_blank"}
				>
					<Tooltip title="Linkedin" arrow placement="bottom">
						<LinkedinIcon />
					</Tooltip>
				</Link>
			</Box>

			<Box sx={{ width: "100%" }}>
				<Divider />

				<Typography textAlign={"center"} sx={{ mt: 2 }}>
					Copyright @ 2022. Setiawan Nanang. All right reserved.
				</Typography>
			</Box>
		</MainBox>
	);
};

export default Footer;
