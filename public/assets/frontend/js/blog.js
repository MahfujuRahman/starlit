$(document).ready(function () {
  $("#blog-search").on("keyup", function () {
    let query = $(this).val();

    if (query.length > 1) {
      $.ajax({
        url: blogSearchUrl,
        type: "GET",
        data: { search: query },
        success: function (data) {
          $("#search-results").html(data).removeClass("d-none");
        },
        error: function () {
          $("#search-results").html('<p class="p-2 text-danger">Error loading results.</p>').removeClass("d-none");
        }
      });
    } else {
      $("#search-results").addClass("d-none").html("");
    }
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".ltn__search-widget").length) {
      $("#search-results").addClass("d-none");
    }
  });
});
