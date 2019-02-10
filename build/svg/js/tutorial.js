$(document).ready(function() {
  $('.code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $('.code-tabs a').click(function() {    
		var $view = $(this).closest('.code-view');
		var tabName = $(this).data('tab');

		$view.find('.code-tabs a').removeClass('active');
		$(this).addClass('active');

		$view.find('.tab').removeClass('tab-active');
		$view.find('.tab-' + tabName).addClass('tab-active');

		return false;
	});

});
