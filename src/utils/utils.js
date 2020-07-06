import { monthOptions } from './AutocompleteConsts';

export const dateToString = date => {
    const month = monthOptions[date.getMonth()].title;
    const day = date.getDate();
    const year = date.getFullYear();

    return month+ ' ' + day + ' ' + year
}