app.router.add('', function () {
  var listTemplate = _.template($('#listings').html(), { variable: 'm' });

  app.etsy.listings()
    .done(function (data) {
      $('.cards').html(listTemplate({ items: data.results }));
    })
    .fail(function (req, status, err) {
      console.log(err);
      $('.cards').text(err.error);
    });
});
