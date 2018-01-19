export default () => {
  let currentName;

  function clear() {  
    const $list = $('.projects-list');
    $list.addClass('projects-list--hasSelected');

    const $active = $('#projekty').find('.project--active');
    $active.removeClass('project--active');

    const $activeLink = $('.projects-list__item__link.projects-list__item__link--active');
    $activeLink.removeClass('projects-list__item__link--active');
  }

  function click(event) {
    const $targetLink = $(event.currentTarget);
    const targetName = $targetLink.attr('data-project');    
    const $body = $('html, body');
    if (targetName !== currentName) {
      clear();
      const $target = $(`.project[data-project="${targetName}"]`);
      $targetLink.addClass('projects-list__item__link--active');
      $target.addClass('project--active');
      currentName = targetName;

      $body.stop().animate({ scrollTop: $target.offset().top / 1.25 }, 500);
    }
  }

  $('.projects-list__item__link').click(click);
};
