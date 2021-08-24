$('.question').on('click', function() {
  var $this = $(this);
  $this.addClass('active');
  $this.find('i').toggleClass('active');
  $this.siblings('.answer').slideToggle(300);
  // get top of section
  var activeQuestionTop = $this.offset().top;
  // scroll to section on click
  $('html, body').animate({
    scrollTop: activeQuestionTop
  });
  return false;
});

$('.open-tabs').on('click', function() {
  $('.answer').slideDown(300);
});

$('.close-tabs').on('click', function() {
  $('.answer').slideUp(300);
});