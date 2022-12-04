import { Button, styled } from "@mui/material";

const ButtonMain = styled(Button)(({ theme }) => ({
	borderRadius: "7px",
	[theme.breakpoints.up("md")]: {
		height: 70,
		width: 200,
		fontSize: 18,
	},

	[theme.breakpoints.between("xs", "md")]: {
		height: 50,
		width: 170,
		fontSize: 15,
	},
}));

type propsButton = {
	children: string;
	icon: any;
};

const MainButton: React.FC<propsButton> = ({ children, icon }) => {
	return (
		<ButtonMain variant="contained" color="primary" endIcon={icon}>
			{children}
		</ButtonMain>
	);
};

export default MainButton;
