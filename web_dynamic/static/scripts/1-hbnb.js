$(document).ready(function() {
  var myamt = [];

  $('input[type="checkbox"]').change(function() {
    var amenityId = $(this).data('id');
    var amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      myamt.push(amenityId);
    } else {
      var index = myamt.indexOf(amenityId);
      if (index !== -1) {
        selectedAmenities.splice(index, 1);
      }
    }

    $('#amenities').text(selectedAmenities.join(', '));
  });
});
