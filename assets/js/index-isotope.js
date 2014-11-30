// wait till resources loaded
$(window).load(function(){

  var filters =  {};

  // init Isotope
  var $container = $('.people-wrapper').isotope({
    itemSelector: '.element-item'
  });

  $('#filters').on('click', 'button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[filterGroup] = $this.attr('data-filter');
    // combine filters
    var filterValue = '';
    for (var prop in filters) {
      filterValue += filters[prop];
    }
    console.log(filterValue);
    $container.isotope({ filter: filterValue });

    // show the arts subfilters if arts is selected
    if (filterValue == ".Art") {
      $("#communication-subfilters").slideUp();
      $("#contemporary-arts-subfilters").slideDown();
    }

    // show the arts subfilter if communications is selected
    else if (filterValue == ".Communication") {
      $("#contemporary-arts-subfilters").slideUp();
      $("#communication-subfilters").slideDown();
    }

    // otherwise close all the subfilters
    else {
      $("#contemporary-arts-subfilters").slideUp();
      $("#communication-subfilters").slideUp();
    }
  });

  $("#contemporary-arts-subfilters").on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

  $("#communication-subfilters").on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons for school
  $('.button-group-school').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });
  // change is-checked class on buttons for title
  $('.button-group-title').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  
  // change the text of the shareability
  var share = [];
  $(".shareability").each(function() {
    share.push($(this).text().trim());
  });

  var shareElement = [];
  $(".shareability").each(function() {
    shareElement.push($(this));
  });

  $.each(share, function(key) {
    if(share[key] == "false"){
      var okay = share[key].replace("false", "Okay");
      shareElement[key].html(okay);
    }
    else {
      var no = share[key].replace("undefined", "No");
      shareElement[key].html(no);
    }
  });
});