$('.modal_img').on('click', (e) => $('.modal_img').css({display: 'none'}));

$('.promo_about_us_license_item').on('click', (e) => {
  const src = $(e.target).attr("src")
  $('.img_full_size').attr('src', src)
  const height = document.body.scrollHeight;   
  $('.modal_img').css({
    display: 'flex',
    height 
  })
});