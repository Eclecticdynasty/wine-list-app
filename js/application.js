$(document).ready(() => {
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

  $('.menu-button').on('click',() => {
    $('#nav-dropdown').slideToggle('slow');
  })

}); 
  
