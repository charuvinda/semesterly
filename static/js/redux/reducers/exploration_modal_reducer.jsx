export const explorationModal = (state = { isVisible: false, advancedSearchResults: [], isFetching: false, active: 0, schoolInfoLoaded: false }, action) => {
	switch (action.type) {
		case 'SHOW_EXPLORATION_MODAL':
			return Object.assign({}, state, { isVisible: true });
		case 'HIDE_EXPLORATION_MODAL':
			return Object.assign({}, state, { isVisible: false });
		case 'REQUEST_ADVANCED_SEARCH_RESULTS':
			return Object.assign({}, state, { isFetching: true });
		case 'RECEIVE_ADVANCED_SEARCH_RESULTS':
			let { advancedSearchResults } = action;
			return Object.assign({}, state, { advancedSearchResults, isFetching: false });
		case 'SET_ACTIVE_RESULT':
			return Object.assign({}, state, { active: action.active });
		default:
			return state;
	}
}
