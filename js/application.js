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

}); 
  
