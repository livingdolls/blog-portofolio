import Close from "@mui/icons-material/Close";
import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Modal,
	styled,
	Tooltip,
	Typography,
	Zoom,
} from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircleOutlineTwoTone";
import { TDesc } from "../config/Porto";

const MainBox = styled(Box)(({ theme }) => ({
	position: "relative",
	borderRadius: "7px",
	padding: "40px",
	backgroundColor: "#fff",
	[theme.breakpoints.up("md")]: {
		width: "40%",
	},

	[theme.breakpoints.between("xs", "md")]: {
		width: "95%",
	},
}));

const CloseIcon = styled(Close)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontWeight: 700,
}));

const Check = styled(CheckCircle)(({ theme }) => ({
	color: [theme.palette.primary.main],
	fontWeight: 700,
}));

type propsModal = {
	modal: boolean;
	setModal: React.Dispatch<React.SetStateAction<boolean>>;
	info: TDesc;
};

const ModalMain: React.FC<propsModal> = ({ modal, setModal, info }) => {
	return (
		<Modal
			open={modal}
			disableScrollLock
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Zoom in={modal}>
				<MainBox>
					<Box
						sx={{
							position: "absolute",
							top: 15,
							right: 15,
						}}
					>
						<Tooltip title="close" onClick={() => setModal(false)}>
							<CloseIcon />
						</Tooltip>
					</Box>

					<Box p={1}>
						<Typography textAlign={"justify"} sx={{ mb: 1 }}>
							{info?.info}
						</Typography>
						<List>
							{info.nice?.map((e: string) => {
								return (
									<ListItem disablePadding key={e}>
										<ListItemIcon>
											<Check />
										</ListItemIcon>
										<ListItemText>
											<Typography>{e}</Typography>
										</ListItemText>
									</ListItem>
								);
							})}
						</List>
					</Box>
				</MainBox>
			</Zoom>
		</Modal>
	);
};

export default ModalMain;
