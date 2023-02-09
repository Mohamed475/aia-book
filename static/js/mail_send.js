function send_mail() {
  var name = jQuery('#name').val();
  var email = jQuery('#email').val();
  var subject = jQuery('#subject').val();
  var message = jQuery('#message').val();
  var loading = jQuery('#loading-message');
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var flag = 0;
  if (name == '') {
    jQuery('#name').addClass('invalid');
    jQuery('#val_user_name').html('Your Name is Required');
    flag = 1;
  } else {
    jQuery('#name').removeClass('invalid');
    jQuery('#val_user_name').html('');
  }

  // if (email == '') {
  //   jQuery('#email').addClass('invalid');
  //   jQuery('#val_user_email').html('Please Enter Email');
  //   flag = 1;
  // } else if (!email.match(mailformat)) {
  //   jQuery('#email').addClass('invalid');
  //   jQuery('#val_user_email').html('Please Enter Valid Email');
  //   flag = 1;
  // } else {
  //   jQuery('#email').removeClass('invalid');
  //   jQuery('#val_user_email').html('');
  // }

  // if (subject == '') {
  //   jQuery('#subject').addClass('invalid');
  //   jQuery('#val_subject').html('Subject is Required');
  //   flag = 1;
  // } else {
  //   jQuery('#subject').removeClass('invalid');
  //   jQuery('#val_subject').html('');
  // }
  if (message == '') {
    jQuery('#message').addClass('invalid');
    jQuery('#val_message').html('Please Describe your thoughts');
    flag = 1;
  } else {
    jQuery('#message').removeClass('invalid');
    jQuery('#val_message').html('');
  }

  if (flag == 1) {
    return false;
  }

  var data = {
    name: name,
    clientEmail: email || 'It is empty',
    subject: subject || 'It is empty',
    message: message,
  };

  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://email-f5y3.onrender.com/send',
    method: 'POST',
    headers: {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
      'Content-Type': 'application/json',
    },
    processData: false,
    data: JSON.stringify(data),
  };

  jQuery('#suce_message').show();
  jQuery('#contact-form')[0].reset();
  $.ajax(settings).done(function (response) {
    console.log(response);
    if ((response = 'Email sent successfully')) {
      jQuery('#suce_message').show();
      jQuery('#contact-form')[0].reset();
      loading.hide();
    } else {
      jQuery('#err_message').show();
      loading.hide();
    }
  });

  // jQuery.ajax({
  //   type: 'POST',
  //   crossOrigin: true,
  //   url: 'https://email-f5y3.onrender.com/send',
  //   data: data,
  //   success: function (data) {
  //     console.log(data);
  //     if (data == 'success') {
  //       jQuery('#suce_message').show();
  //       jQuery('#contact-form')[0].reset();
  //     } else {
  //       jQuery('#err_message').show();
  //     }
  //   },
  // });

  //   jQuery.ajax({
  //     type: 'POST',
  //     crossOrigin: true,
  //     url: 'process_form.php',
  //     data: data,
  //     success: function (response) {
  //       if (response == '1') {
  //         jQuery('#suce_message').show();
  //         jQuery('#contact-form')[0].reset();
  //       } else {
  //         jQuery('#err_message').show();
  //       }
  //     },
  //   });
}
