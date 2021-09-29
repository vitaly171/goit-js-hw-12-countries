import './sass/main.scss';

import API from './js/fetchCountries'
import countryItemsTemplate from './templates/countryItem.hbs';
import countriesListTemplate from './templates/countriesList.hbs';
import refs from './js/refs'

const DEBOUNCE_DELAY = 300;
const debounce = require('lodash.debounce');