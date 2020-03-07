$(function() {
  $('[id$=".html"]').each(function(e) {
    $(this).load(
      'includes\\' +
        $(this)
          .attr('id')
          .replace('include-', '') //+
      // '.html'
    );
  });
});
