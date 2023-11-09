import {BASE_URL} from "../constants/constants.js";

export function generateURL(sortByFilter, data) {
  const brandFiltersPath = data ? data.join('') : "";
  const sortByFilterPath = sortByFilter ? `order=${sortByFilter}` : "";

  return `${BASE_URL}/shop?${sortByFilterPath}${brandFiltersPath && brandFiltersPath}&is_ajax_category=true&show_no_product_found=true`
}