function userSearch() {
  $.ajax({
    url: "https://api.github.com/users/addyosmani/orgs",
    dataType: "jsonp",
    method: "GET",
  }).done(function(response) {
    console.log(response);
    for (var i = 0; i < response.data.length; i++) {
      CreateOrgs(response.data[i]);
    }
  });
}

function CreateOrgs(org) {
  this.info = {
    name: org.login,
    image: org.avatar_url
  };
  this.makeOrgs = function() {
    var container = $('<section>').attr('class', 'org-container').appendTo('main');
    var image = $('<img>').attr('src', this.info.image).appendTo(container);
    var name = $('<h1>').html(this.info.name).appendTo(container);
  };
  this.makeOrgs();
}

$('nav').on('click', '#submit', function(event) {
  event.preventDefault();
  userSearch();
});
