import Close from "@mui/icons-material/Close";
import { Box, Modal, styled, Tooltip, Typography, Zoom } from "@mui/material";

type modalTheme = {
	theme: any;
	setTheme: any;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
};

const ModalTheme: React.FC<modalTheme> = ({
	theme,
	setTheme,
	open,
	setOpen,
}) => {
	return (
		<Modal
			open={open}
			disableScrollLock
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Zoom in={open}>
				<MainBox>
					<Box
						sx={{
							position: "absolute",
							top: 15,
							right: 15,
							display: "inline",
						}}
					>
						<Tooltip title="close" onClick={() => setOpen(false)}>
							<CloseIcon />
						</Tooltip>
					</Box>
					<Typography
						variant="h6"
						textAlign="center"
						fontWeight={500}
					>
						Select Theme
						<Box
							display="flex"
							flexDirection="row"
							justifyContent={"center"}
							mt={5}
							gap={5}
						>
							<BoxColor
								onClick={() => setTheme("mred")}
								sx={{ backgroundColor: "#b8352b" }}
							></BoxColor>
							<BoxColor
								onClick={() => setTheme("mpurple")}
								sx={{ backgroundColor: "#a968cd" }}
							></BoxColor>
							<BoxColor
								onClick={() => setTheme("mbrown")}
								sx={{ backgroundColor: "#322C2C" }}
							></BoxColor>
							<BoxColor
								onClick={() => setTheme("mblue")}
								sx={{ backgroundColor: "#287094" }}
							></BoxColor>
						</Box>
					</Typography>
				</MainBox>
			</Zoom>
		</Modal>
	);
};

export default ModalTheme;

const MainBox = styled(Box)(({ theme }) => ({
	position: "relative",
	borderRadius: "7px",
	padding: "40px",
	backgroundColor: "#fff",
	[theme.breakpoints.up("md")]: {
		height: "200px",
		width: "600px",
	},

	[theme.breakpoints.between("xs", "md")]: {
		height: "200px",
	},
}));

const BoxColor = styled(Box)(({ theme }) => ({
	borderRadius: "100%",
	height: "40px",
	width: "40px",
	// [theme.breakpoints.up("md")]: {},

	[theme.breakpoints.down("md")]: {
		height: "40px",
		width: "40px",
	},
}));

const CloseIcon = styled(Close)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontWeight: 700,
}));
