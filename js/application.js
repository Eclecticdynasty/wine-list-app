$(document).ready(() => {

  // red wine more info buttons
  $('.pinot-button').on('click', () => {
  $('p.desc-pinot').slideToggle();
 });
  $('.merlot-button').on('click', () => {
  $('p.desc-merlot').slideToggle();
 });
  $('.zin-button').on('click', () => {
  $('p.desc-zin').slideToggle();
 });
  $('.malbec-button').on('click', () => {
  $('p.desc-malbec').slideToggle();
 });

  // white wine more info buttons
  $('.pinotg-button').on('click', () => {
  $('p.desc-pinotg').slideToggle();
 });
  $('.ries-button').on('click', () => {
  $('p.desc-ries').slideToggle();
 });
  $('.chardon-button').on('click', () => {
  $('p.desc-chardon').slideToggle();
 });
  $('.sauv-button').on('click', () => {
  $('p.desc-sauv').slideToggle();
 });

  //rose wine more info buttons
  $('.sang-button').on('click', () => {
  $('p.desc-sang').slideToggle();
 });
  $('.grenache-button').on('click', () => {
  $('p.desc-grenache').slideToggle();
 });



  $('.menu-button').on('click',() => {
    $('#nav-dropdown').slideToggle('slow');
  })


  // Wine reccomendations

$(function() {

  var recommendations = {
    reds: {
      wineType: 'Pinot Noir',
      mouthFeel: 'Dry',
      body: 'Medium',
      tanninLevel: 'Medium-Low',
      abv: 12
    },
    {
      wineType: 'Zinfandel',
      mouthFeel: 'Dry',
      body: 'Medium-Full',
      tanninLevel: 'Medium-High',
      abv: 16
    },
    {
      wineType: 'Merlot',
      mouthFeel: 'Very-Dry',
      body: 'Medium-Full',
      tanninLevel: 'Medium-High',
      abv: 14
    },
    {
      wineType: 'Malbec',
      mouthFeel: 'Dry',
      body: 'Full',
      tanninLevel: 'Medium',
      abv: 14
    }, 
  };

  //filter function
  function redWineReccomend(recommendations) {
    return (recommendations.reds.abv >= 12);
  };

  var results = [];
  results = recommendations.filter(redWineReccomend());

  for (var i = 0; i < results.length; i++) {
    var wine = results[i];
    var $rec = $('<div></div>');
    $rec.append($('<p></p>')).text((wine.reds[0].wineType));
    $('.red-reccomend').append( $rec );
  }




});

}); 
  
