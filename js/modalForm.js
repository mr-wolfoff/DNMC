$('.modal_form').on('click', (e) => {
  $('.modal_form').css({display: 'none'});
})

$('.modal_form_inner').on('click', (e) => e.stopPropagation())

$('.form_open').on('click', (e) => {
  e.preventDefault();
  const height = document.body.scrollHeight;   
  $('.modal_form').css({
    display: 'block',
    height
  })
})