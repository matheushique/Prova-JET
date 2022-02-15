const { result } = require("lodash");

$(document).ready(function(){
  let sessionStorageVerification = sessionStorage.getItem("VerificationControl")
  if (sessionStorageVerification == "true" && sessionStorageVerification != null){
    $("#btnEditProvaJET").show()
    $("#btnAttProvaJET").hide()
    $('.ui.form')
      .form({
        fields: {
          name: {
            identifier: 'name',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please enter your name'
              }
            ]
          },
          email: {
            identifier: "email",
            rules: [
              {
                type : 'empty',
                prompt : 'Please enter your email'
              }
            ]
          },
          phone: {
            identifier: "phone",
            rules: [
              {
                type : 'empty',
                prompt : 'Please enter your phone'
              }
            ]
          },
          subject: {
            identifier: "subject",
            rules: [
              {
                type : 'empty',
                prompt : 'Please enter your subject'
              }
            ]
          },
          message: {
            identifier: "message",
            rules: [
              {
                type : 'empty',
                prompt : 'Please enter your message'
              }
            ]
          }
        }
      })
    ;

    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    const validateName = (name) => {
      return name.match(
        /^[A-Za-z\s]+$/
      );
    };

    const validatePhoneNumber = (phone) => {
      return phone
    }

    const validateSubject = (subject) => {
      return subject
    }

    const validateMessage = (message) => {
      return message
    }
    
    const emailValue = () => {
      let result = $('#provaJETemail p')
      let resultBold = $('.nishiishini')
      let email = $('#email').val();
      
    
      if (validateEmail(email)) {
        result.text(' é válido ');
        resultBold.text(email)
        $('#provaJETemail').removeClass('error')
      } else {
        result.text(' não é válido ');
        resultBold.text(email)
        $('#provaJETemail').addClass('error')
      }
      return false;
    }

    const nameValue = () => {
      let resultName = $('#provaJETname')
      let name = $('#name').val()

      if (validateName(name)) {
        resultName.text(name)
        resultName.removeClass('error')
      } else {
        resultName.text('não é permitido dígitos em nomes')
        resultName.addClass('error')
      }
      return false;
    }

    const phoneNumberValue = () => {
      let resultPhoneNumber = $('#provaJETphone')
      let phoneNumber = $('#phone').val()

      if (validatePhoneNumber(phoneNumber)) {
        resultPhoneNumber.text(phoneNumber)
      }
      return false
    }

    const subjectValue = () => {
      let resultSubject = $('#provaJETsubject')
      let subject = $('#subject').val()

      if (validateSubject(subject)) {
        resultSubject.text(subject)
      }
      return false
    }

    const messageValue = () => {
      let resultMessage = $('#provaJETmessage')
      let message = $('#message').val()

      if (validateMessage(message)) {
        resultMessage.text(message)
      }
      return false
    }

    $('#email').on('input', emailValue);
    $('#name').on('input', nameValue) 
    $('#phone').on('input', phoneNumberValue)
    $('#subject').on('input', subjectValue)
    $('#message').on('input', messageValue)
    $("#btnEditProvaJET").on('click', (e) => {
      $("#btnAttProvaJET").show()
      $("#btnSendProvaJET").hide()
      $("#btnEditProvaJET").hide()
      e.preventDefault()
      let sessionName = sessionStorage.getItem("Name")
      let sessionEmail = sessionStorage.getItem("Email")
      let sessionCel = sessionStorage.getItem("Phone")
      let sessionSub = sessionStorage.getItem("Subject")
      let sessionMsg = sessionStorage.getItem("Message")
      $("#name").val(sessionName)
      $("#email").val(sessionEmail)
      $("#phone").val(sessionCel)
      $("#subject").val(sessionSub)
      $("#message").val(sessionMsg)
      $('.ui.form')
      .form({
        fields: {
          name: {
            identifier: 'name',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please enter your name'
              }
            ]
          },
          email: {
            identifier: "email",
            rules: [
              {
                type : 'empty',
                prompt : 'Please enter your email'
              }
            ]
          },
          phone: {
            identifier: "phone",
            rules: [
              {
                type : 'empty',
                prompt : 'Please enter your phone'
              }
            ]
          },
          subject: {
            identifier: "subject",
            rules: [
              {
                type : 'empty',
                prompt : 'Please enter your subject'
              }
            ]
          },
          message: {
            identifier: "message",
            rules: [
              {
                type : 'empty',
                prompt : 'Please enter your message'
              }
            ]
          }
        }
      })
    ;

    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    const validateName = (name) => {
      return name.match(
        /^[A-Za-z\s]+$/
      );
    };

    const validatePhoneNumber = (phone) => {
      return phone
    }

    const validateSubject = (subject) => {
      return subject
    }

    const validateMessage = (message) => {
      return message
    }
    
    const emailValue = () => {
      let result = $('#provaJETemail p')
      let resultBold = $('.nishiishini')
      let email = $('#email').val();
      
    
      if (validateEmail(email)) {
        result.text(' é válido ');
        resultBold.text(email)
        $('#provaJETemail').removeClass('error')
      } else {
        result.text(' não é válido ');
        resultBold.text(email)
        $('#provaJETemail').addClass('error')
      }
      return false;
    }

    const nameValue = () => {
      let resultName = $('#provaJETname')
      let name = $('#name').val()

      if (validateName(name)) {
        resultName.text(name)
        resultName.removeClass('error')
      } else {
        resultName.text('não é permitido dígitos em nomes')
        resultName.addClass('error')
      }
      return false;
    }

    const phoneNumberValue = () => {
      let resultPhoneNumber = $('#provaJETphone')
      let phoneNumber = $('#phone').val()

      if (validatePhoneNumber(phoneNumber)) {
        resultPhoneNumber.text(phoneNumber)
      }
      return false
    }

    const subjectValue = () => {
      let resultSubject = $('#provaJETsubject')
      let subject = $('#subject').val()

      if (validateSubject(subject)) {
        resultSubject.text(subject)
      }
      return false
    }

    const messageValue = () => {
      let resultMessage = $('#provaJETmessage')
      let message = $('#message').val()

      if (validateMessage(message)) {
        resultMessage.text(message)
      }
      return false
    }

    $('#email').on('input', emailValue);
    $('#name').on('input', nameValue) 
    $('#phone').on('input', phoneNumberValue)
    $('#subject').on('input', subjectValue)
    $('#message').on('input', messageValue)
    
    })
    $('#btnAttProvaJET').on('click', () => {
      let name = $('#name').val()
      let email = $('#email').val()
      let cel = $('#phone').val()
      let subject = $('#subject').val()
      let message = $('#message').val()
      sessionStorage.setItem("Name", name )
      sessionStorage.setItem("Email", email )
      sessionStorage.setItem("Phone", cel )
      sessionStorage.setItem("Subject", subject )
      sessionStorage.setItem("Message", message )
      sessionStorage.setItem("VerificationControl", "true" )
    }) 

  }
  else{
    $("#btnEditProvaJET").hide()
    $("#btnAttProvaJET").hide()
    $('.ui.form')
      .form({
        fields: {
          name: {
            identifier: 'name',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please enter your name'
              }
            ]
          },
          email: {
            identifier: "email",
            rules: [
              {
                type : 'empty',
                prompt : 'Please enter your email'
              }
            ]
          },
          phone: {
            identifier: "phone",
            rules: [
              {
                type : 'empty',
                prompt : 'Please enter your phone'
              }
            ]
          },
          subject: {
            identifier: "subject",
            rules: [
              {
                type : 'empty',
                prompt : 'Please enter your subject'
              }
            ]
          },
          message: {
            identifier: "message",
            rules: [
              {
                type : 'empty',
                prompt : 'Please enter your message'
              }
            ]
          }
        }
      })
    ;

    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    const validateName = (name) => {
      return name.match(
        /^[A-Za-z\s]+$/
      );
    };

    const validatePhoneNumber = (phone) => {
      return phone
    }

    const validateSubject = (subject) => {
      return subject
    }

    const validateMessage = (message) => {
      return message
    }
    
    const emailValue = () => {
      let result = $('#provaJETemail p')
      let resultBold = $('.nishiishini')
      let email = $('#email').val();
      
    
      if (validateEmail(email)) {
        result.text(' é válido ');
        resultBold.text(email)
        $('#provaJETemail').removeClass('error')
      } else {
        result.text(' não é válido ');
        resultBold.text(email)
        $('#provaJETemail').addClass('error')
      }
      return false;
    }

    const nameValue = () => {
      let resultName = $('#provaJETname')
      let name = $('#name').val()

      if (validateName(name)) {
        resultName.text(name)
        resultName.removeClass('error')
      } else {
        resultName.text('não é permitido dígitos em nomes')
        resultName.addClass('error')
      }
      return false;
    }

    const phoneNumberValue = () => {
      let resultPhoneNumber = $('#provaJETphone')
      let phoneNumber = $('#phone').val()

      if (validatePhoneNumber(phoneNumber)) {
        resultPhoneNumber.text(phoneNumber)
      }
      return false
    }

    const subjectValue = () => {
      let resultSubject = $('#provaJETsubject')
      let subject = $('#subject').val()

      if (validateSubject(subject)) {
        resultSubject.text(subject)
      }
      return false
    }

    const messageValue = () => {
      let resultMessage = $('#provaJETmessage')
      let message = $('#message').val()

      if (validateMessage(message)) {
        resultMessage.text(message)
      }
      return false
    }

    $('#email').on('input', emailValue);
    $('#name').on('input', nameValue) 
    $('#phone').on('input', phoneNumberValue)
    $('#subject').on('input', subjectValue)
    $('#message').on('input', messageValue)

    

    $('#btnSendProvaJET').on('click', () => {
      let name = $('#name').val()
      let email = $('#email').val()
      let cel = $('#phone').val()
      let subject = $('#subject').val()
      let message = $('#message').val()
      sessionStorage.setItem("Name", name )
      sessionStorage.setItem("Email", email )
      sessionStorage.setItem("Phone", cel )
      sessionStorage.setItem("Subject", subject )
      sessionStorage.setItem("Message", message )
      sessionStorage.setItem("VerificationControl", "true" )
    }) 
  }  
  //let validateSubmit = document.querySelectorAll('.ui.form > span.error')
  //console.log(validateSubmit.length)
})
