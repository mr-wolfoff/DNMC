$('.colum_caterpillar_item').on('click', (e) => {
  const src = $(e.target).attr('src');
  $('.colum_caterpillar_item').removeClass('active');
  $(e.target).addClass('active');
  $('.big_caterpillar_item').attr('src', src);
});