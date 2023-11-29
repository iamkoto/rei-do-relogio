!function () {
  var setLocationValue = function setLocationValue(url) {
    window.location = "/" + encodeURIComponent(url) + "_DisplayType_G";
  };

  var submitElement;
  submitElement = document.getElementById("search-form");

  if (submitElement) {
    submitElement.onsubmit = function (event) {
      event.preventDefault();
      var searchInput = document.getElementById("search-input");

      if (searchInput.value) {
        setLocationValue(searchInput.value);
      }
    };
  }

  submitElement = document.getElementById("search-form");

  if (submitElement) {
    submitElement.onsubmit = function (event) {
      event.preventDefault();
      var searchInput = document.getElementById("search-input");

      if (searchInput.value) {
        setLocationValue(searchInput.value);
      }
    };
  };

}();
