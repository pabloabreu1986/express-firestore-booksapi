export const CREATEBOOKSCHEMA = {
	title: {
		notEmpty: true,
		errorMessage: 'The new book most contain a title'
	},
	genre: {
		notEmpty: true,
		errorMessage: 'The new book most contain a genre'
	}
}
