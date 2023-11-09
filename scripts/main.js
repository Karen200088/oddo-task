import $ from "jquery";

import '../styles/globalStyles.scss';
import '../styles/styles.scss';
import '../styles/responsive.scss';

import {sortBy} from "./constants/sort.js";
import {getProducts} from "./api/getProducts.js";

$(document).ready(function () {

// show all products without sorting
   getProducts(sortBy["none"]);

// sort onchange function
  $('#sort-select').on('change', function () {
    getProducts(sortBy[this.value])
  });

});