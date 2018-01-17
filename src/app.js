const $ = require('jquery');

$(document).ready(() => {
  function navigate(to = null) {
    const location = to || window.location.hash;
    $('.site-header.active, section.active').each(function() {
      $(this).removeClass('active');
    });
    $('.site-navigation__link--active').each(function() {
      $(this).removeClass('site-navigation__link--active');
    });
    const $link = $(`.site-navigation a[href="${location}"]`);
    if ($link && $link.hasClass('site-navigation__link'))
      $link.addClass('site-navigation__link--active');
    if (location) {
      $(`${location}`).addClass('active');
    } else {
      $('.site-header').addClass('active');
    }
  }

  navigate();

  $('a[href^="#"]').click((event) => {
    const $link = $(event.currentTarget);
    const href = $link.attr('href');
    navigate(href);
  });

  $('button.site-navigation__toggle').click((event) => {
    event.preventDefault();
    $('.site-navigation').toggleClass('site-navigation--visible');
    return false;
  });
});