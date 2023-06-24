function displayResults(data) {
    $(".result-container").empty();
    let results = data.results;
    if (results.length) {
      results.forEach(result => {
        let img = $("<img>").attr("src", result.urls.small).addClass("result-img");
        $(".result-container").append(img);
      });
    } else {
      $(".result-container").append("<p>No results found.</p>");
    }
  }
  
  $(document).ready(() => {
    $("form").submit(e => {
      e.preventDefault();
      let query = $("#query").val();
      let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=9nRoliZacKw3YbsGY0x3aPxJSZmETXQqWyhJmSoWx5M`;
      $.get(url, displayResults);
    });
  });
x  