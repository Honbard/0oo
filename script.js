$(document).ready(function() {
  $('#myForm').submit(function(e) {
    e.preventDefault(); // Mencegah pengiriman formulir langsung
    var formData = $(this).serializeArray();
    submitToGoogleSheets(formData);
    // Reset formulir setelah data terkirim
    $(this)[0].reset();
  });
});

function submitToGoogleSheets(formData) {
  // URL endpoint Google Apps Script yang telah Anda buat
  var url = 'https://script.google.com/macros/s/AKfycbwHWO6NaTv31uegLLpzSGezQB3JMDJFljLGsZPbNkk96UbxgAg-vo1-adCwLx9-XQ/exec';
  $.ajax({
    url: url,
    method: 'POST',
    dataType: 'json',
    data: formData,
    success: function(response) {
      alert('Data berhasil disimpan ke Google Sheets!');
      console.log(response);
    },
    error: function(xhr, status, error) {
      alert('Terjadi kesalahan. Silakan coba lagi.');
      console.error(xhr);
    }
  });
}