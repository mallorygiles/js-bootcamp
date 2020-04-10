// Set up filters default object
const filters = {
    searchText: '',
    hideCompleted: false
}

// getFilters
// Arguments: none
// Return value: filters object
const getFilters = () => filters

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
const setFilters = (update) => {
    if (typeof update.searchText === 'string') {
        filters.searchText = update.searchText
    }
    if (typeof update.hideCompleted === 'boolean') {
        filters.hideCompleted = update.hideCompleted
    }
}

// Make sure to set up the exports
export {getFilters, setFilters}