import { Button, styled } from "@mui/material";

const ButtonMain = styled(Button)(({ theme }) => ({
	borderRadius: "5px",
	[theme.breakpoints.up("md")]: {
		height: 70,
		width: 180,
	},

	[theme.breakpoints.between("xs", "md")]: {
		height: 50,
		width: 150,
	},
}));

type propsButton = {
	children: string;
};

const MainButton: React.FC<propsButton> = ({ children }) => {
	return (
		<ButtonMain variant="contained" color="primary">
			{children}
		</ButtonMain>
	);
};

export default MainButton;
