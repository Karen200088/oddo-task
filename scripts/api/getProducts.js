import $ from "jquery";

import {generateURL} from "../helpers/generateURL.js";
import {changeImagesHostName} from "../helpers/changeImageHostName.js";

const brandFilters = [];

export const getProducts = (sortByFilter, data) => {

  const requestUrl = generateURL(sortByFilter, data);

  $.ajax({
    url: requestUrl,
    dataType: 'html',
    success: (data) => {
      // render content
      $(".products-block-content").html(data);

      // add grid classes
      $("#ajax_products_content").attr("class", "row col-lg-9 col-md-9 col-sm-12");
      $("#ajax_categories_content").attr("class", "col-lg-3 col-md-3 col-sm-12");

    },
    error: () => {
      $(".products-block-content").html(`<div class="error-message">Something went wrong</div>`);
    },
    beforeSend: () => {
      $("#loader").show();
      $(".products-block-content").empty();
    },
    complete: () => {
      $("#loader").hide();
      changeImagesHostName();

      $(".brand_filter > a").on("click", function () {
        const element = $(this)[0];
        const data = '&attrib_brand_filter=' + element.dataset.brandFilterId;

        const isActive = brandFilters.includes(data);

        if (isActive) {
          brandFilters.splice(brandFilters.indexOf(data), 1);
        } else {
          element.classList.add("active");
          brandFilters.push(data);
        }
        getProducts("", brandFilters);
      });
      brandFilters.map(function (element) {
        console.log(element)
      })

      // disable all links for redirects to other path
      $('a').click(function (event) {
        event.preventDefault();
      });

      //categories block open/close
      $('.filter-item-name:eq(0)').on("click", function () {
        $('.categories_block').slideToggle(400);
      });

      //brands block open/close
      $('.filter-item-name:eq(1)').on("click", function () {
        $('.brands_block').slideToggle(500);
      });
    },
  });
}