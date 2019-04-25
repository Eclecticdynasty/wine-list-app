$(document).ready(() => {
  $('.pinot-button').on('click', () => {
  $('p.desc-pinot').slideToggle();
 });

  $('.menu-button').on('click',() => {
    $('#nav-dropdown').slideToggle('slow');
  })

}); 
  
