import { Close } from "@mui/icons-material";
import { Box, Dialog, styled, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { themeProps } from "../Layout";

const MainBox = styled(Box)(({ theme }) => ({
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
		<Dialog
			open={open}
			disableScrollLock
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<MainBox>
				<Box
					sx={{
						position: "stinky",
						top: 0,
						left: 0,
						display: "inline",
					}}
				>
					<Tooltip title="close" onClick={() => setOpen(false)}>
						<CloseIcon />
					</Tooltip>
				</Box>
				<Typography variant="h6" textAlign="center" fontWeight={500}>
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
							sx={{ backgroundColor: "#B87FB1" }}
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
		</Dialog>
	);
};

export default ModalTheme;
