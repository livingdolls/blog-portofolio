export type TDesc = {
	info: string;
	nice: string[];
};
export type TDataPorto = {
	porto: string;
	thumb: string;
	tech: string[];
	desc: TDesc[];
};

export const dataPorto = [
	{
		porto: "Point Of Sale",
		thumb: "https://raw.githubusercontent.com/livingdolls/react-typescript-pos/main/src/assets/Pont-of-sale.png",
		tech: [
			"express-js",
			"typescript",
			"react-js",
			"material-ui",
			"mysql",
			"rest-api",
		],
		link: "https://github.com/livingdolls/react-typescript-pos",
		desc: {
			info: "The point-of-sale system guides the customer through a series of steps that end with a purchase. First, the customer selects the goods. Second, the POS system will provide a price. Third, the customer pays and fourth, the POS system will complete the transaction.",
			nice: [
				"Multi role admin & super admin",
				"Single Page Application with React JS",
				"Typesafe with Typescript",
				"Calculation of daily, weekly and monthly income",
				"Item refund process feature available",
				"Inventory management features",
				"Complete and real time sales reports",
				"etc",
			],
		},
	},
	{
		porto: "Information Retrieval",
		thumb: "https://raw.githubusercontent.com/livingdolls/frontend-information-retrieval/main/src/img/Information-retrieval.png",
		tech: ["php", "mysql", "react-js", "material-ui", "rest-api"],
		link: "https://github.com/livingdolls/frontend-information-retrieval",
		desc: {
			info: "Information retrieval is a science that aims to study the stages and methods for retrieving stored information from various accurate sources or collections of information sources that are sought or needed. With the action of indexing, calling, and calling data back.",
			nice: [
				"Single page application with Next Js",
				"Multi role admin & user",
				"Text preprocessing",
				"Dictionary-based and rule-based stemming",
				"Word weighting using the TF-IDF algorithm",
				"Dokumen ranking using the cosine similarity method",
				"etc",
			],
		},
	},
	{
		porto: "Budget Management App",
		thumb: "https://raw.githubusercontent.com/livingdolls/react-budget-app/main/src/assets/screenshoot/Home%20Page.png",
		tech: [
			"react-js",
			"tailwind",
			"typescript",
			"express",
			"mysql",
			"prisma",
			"tan-query",
		],
		link: "https://github.com/livingdolls/react-budget-app",
		desc: {
			info: "Budget management app is an application to manage finances. You can record income, expense plans, expenses, and more.",
			nice: [
				"Responsive UI for mobile, tablet, and desktop",
				"JWT Auth",
				"Multi User",
				"Management Income",
				"Management Expense Plan",
				"Management Expense",
				"ETC",
			],
		},
	},
	{
		porto: "E Commerce",
		thumb: "https://raw.githubusercontent.com/livingdolls/ecomercenative-projek/master/img/ecommerce.png",
		tech: ["php", "mysql", "boostrap"],
		link: "https://github.com/livingdolls/ecomercenative-projek",
		desc: {
			info: "E-commerce is a process of transaction of goods or services through information systems that utilize information technology",
			nice: [
				"Responsive UI for desktop and mobile display",
				"Multi role admin & user",
				"Management product features",
				"Complete and real time sales reports",
				"Product search features",
				"Product detail features",
				"Shopping cart features",
				"etc",
			],
		},
	},
	{
		porto: "Express Auth Cron Job",
		thumb: "https://raw.githubusercontent.com/livingdolls/express-jwt-auth/main/Jwt.png",
		tech: ["express-js", "mysql", "rest-api"],
		link: "https://github.com/livingdolls/express-jwt-auth",
		desc: {
			info: "JWT is a token in the form of a string It consists of three parts: header, payload and signature used for the authentication process and	information exchange.",
			nice: [
				"Using JSON web token",
				"Using bcrypt hash password",
				"Node Mailer",
				"Cron Job Email Validation",
				"Cron Job Send OTP Activation",
				"Change Email",
			],
		},
	},
	{
		porto: "ToDo App",
		thumb: "https://raw.githubusercontent.com/livingdolls/todoApp/main/src/img/Desain%20tanpa%20judul.png",
		tech: ["react-js", "material-ui"],
		link: "https://github.com/livingdolls/todoApp",
		desc: {
			info: "todo app is a useful app to manage activities that need to be completed based on priority",
			nice: [
				"Create, update, delete ToDo",
				"UI for mobile",
				"Management todos for completed and incomplete todos",
				"Todos priority feature",
				"etc",
			],
		},
	},
	{
		porto: "Youtube Clone UI",
		thumb: "https://raw.githubusercontent.com/livingdolls/youtube-material/main/src/img/Screenshoot/Light%20large.png",
		tech: ["react-js", "material-ui"],
		link: "https://github.com/livingdolls/youtube-material",
		desc: {
			info: "ui clone is the process of duplicating the ui as closely as the original",
			nice: [
				"Responsive UI for mobile, tablet, and desktop",
				"Dark mode and light mode",
			],
		},
	},
];
