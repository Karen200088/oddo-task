import $ from "jquery";

import { BASE_URL } from "../constants/constants.js";

export const changeImagesHostName = () => {
  let source = $("source");

  source.each(function () {
    let srcset = $(this).attr("srcset"); // Get the current srcset attribute
    let newSrcset = BASE_URL + srcset; // Create the new srcset value
    $(this).attr("srcset", newSrcset); // Update the srcset attribute
  });
};