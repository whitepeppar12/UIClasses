function readUserData() {
  var data = {};
  data.id = $("#acntId").val();
  data.pwd = $("#acntPwd").val();
  $.ajax({
    url: "http://localhost:8080/login/validation",
    data: data,
    method: "POST",
    dataType: "JSON",
    success: function(res) {
          console.log("success");
          console.log(res);
          if (res.msg == "Valid") {
               if (data.id == 'admin') {
                     loadUIToMasterPage('admin');
               } else {
                    loadUIToMasterPage('sdetails');
               }
          } else {
               $(".errBlock").show(500);
          }
    },
    error: function(err) {
      console.log("errror");
      console.log(err);
    }
  });
}

function showOrHidePwd() {
  var currentType = $("#acntPwd").attr("type");
  if (currentType == "password") {
    $("#acntPwd").attr("type", "text");
  } else {
    $("#acntPwd").attr("type", "password");
  }
}

function loadUIToMasterPage(type) {
  switch (type) {
    case "login":
          $(".main_container").loadTemplate($("#loginTemplt"));
          break;
     case 'sdetails':
          $(".main_container").loadTemplate($("#stdDetailsTmplt"));
          loadStudentDetails();
          break;
     case 'register':
          $(".main_container").loadTemplate($("#newSignupTmplt"))
          break;
     case 'admin':
          $(".main_container").loadTemplate($("#adminTmplt"))
          break;
  }
}
$(document).ready(function(){
     loadUIToMasterPage("login");
})



function readRegisterDetails() {
     var data = {};
     data.id = $("#signup_id").val();
     data.pwd = $("#signup_pwd").val();
     data.mailId = $("#signup_mailid").val();
     console.log(data);


     $.ajax({
          url: 'http://localhost:8080/user/signup',
          method: 'POST',
          dataType: 'JSON',
          data: data,
          success: function(res) {
               console.log("successful");
               console.log(res);
               if (res.msg == 'Data Inserted') {
                    loadUIToMasterPage('login');
               } else {
                    // show error msg
               }
          }, 
          error: function(err) {
               console.log("error");
               console.log(err);
          }
     });

     // 
}