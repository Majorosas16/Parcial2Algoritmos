export type AppState = {
	screen: string;
	itemsList: [];
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
	'CHANGEBACKGROUND' = 'CHANGEBACKGROUND',
	'NAVIGATE' = 'NAVIGATE',
	'ELIMINATE' = 'ELIMINATE',
	'EDIT' = 'EDIT',
	'ADDITEM' = 'ADDITEM'
}

export enum Screens {
	'LOGIN' = 'LOGIN',
	'DASHBOARD' = 'DASHBOARD',
	'REGISTER' = 'REGISTER',
}
