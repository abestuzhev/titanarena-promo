$(document).ready(function(){
  // JavaScript for label effects only
  $(window).load(function(){
    $(".c-input").val("");

    $(".input-effect input").focusout(function(){
      if($(this).val() != ""){
        $(this).addClass("has-content");
      }else{
        $(this).removeClass("has-content");
      }
    })
  });

  // This demo uses jQuery UI Autocomplete
  // https://jqueryui.com/autocomplete

  // Cannot style datalist elements yet, so get
  // each option value and pass to jQuery UI Autocomplete
  $('input[data-list]').each(function () {
    var availableTags = $('#' + $(this).attr("data-list")).find('option').map(function () {
      return this.value;
    }).get();

    $(this).autocomplete({
      source: availableTags
    }).on('focus', function () {
      $(this).autocomplete('search', ' ');
    }).on('search', function () {
      if ($(this).val() === '') {
        $(this).autocomplete('search', ' ');
      }
    });
  });

});
