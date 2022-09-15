function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.email.value))
  {
    console.log(true);
    return (true)
  }
    alert("You have entered an invalid email address!")
    console.log(false);
    return (false)
}


function ValidateServer(str) 
{
 if (/[A-Z]/.test(str) && /[0-9]/.test(str))
  {
    document.getElementById("mess1").innerHTML = "";
    console.log(true);
    return (true)
  }
    document.getElementById("mess1").innerHTML = "Invalid Username";
    console.log(false);
    return (false)
}


function confirm_pass(pass) 
{
 if (form1.cpassword.value == pass)
  {
    document.getElementById("mess2").innerHTML = "";
    console.log(true);
    return (true)
  }
    document.getElementById("mess2").innerHTML = "Password does not match";
    console.log(false);
    return (false)
}


var flag = 1

document.body.addEventListener("keydown", function (adv)
{  
    adv = adv || window.event;
    var key = adv.which || adv.keyCode;
      
    var ctrl = adv.ctrlKey ? adv.ctrlKey : ((key === 17) ? true : false);

  
    if (key == 77 && ctrl)
    {
        if(window.flag == 1)
        {
            document.body.style.backgroundColor = "green";
            window.flag = 0
        }
        else
        {
            document.body.style.backgroundColor = "white";
            window.flag = 1
        }
        
    }
  
},
false);


function check_all(str,pass)
{
    if(ValidateEmail() && ValidateServer(str) && confirm_pass(pass))
    {
        return true;
    }
    else
    {
        alert("Some details incorrect")
        console.log(false);
        return (false) 
    }
}

