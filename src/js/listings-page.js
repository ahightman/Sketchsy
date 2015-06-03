app.router.add('', function () {
  var listTemplate = _.template($('#listings').html(), { variable: 'm' });

  app.etsy.listings()
    .done(function (data) {
      $('.cards').html(listTemplate({ items: data.results }));
      $('.artist-info').click(function(){
        var card = $(this).closest('.card');

        getProfile(card);
      })
    })
    .fail(function (req, status, err) {
      console.log(err);
      $('.cards').text(err.error);
    });

  function getProfile(card) {
    // var backofcard = $('.backofcard', card);
    if (!card.hasClass('downloading')) {
      card.addClass('downloading');
      var profileTemplate = _.template($('#etsyProfile').html(), { variable: 'm' });

      app.etsy.userDetail(card.attr('id'))
        .done(function (data) {
          card.append(profileTemplate(data.results[0]));
        })
        .fail(function (req, status, err) {
          console.log('Failed');
          console.log(err);
          $('.cards').html(err.error);
        });
    }
  }

});
