$('.form_modal').on('click', (e) => {
  $('.form_modal').css({display: 'none'});
})

$('.modal_form_inner').on('click', (e) => e.stopPropagation())

$('.form_open').on('click', (e) => {
  e.preventDefault();  
  $('.form_modal').css({
    display: 'block',
  })
})