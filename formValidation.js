function formValidation(){
{
// Focus goes to next field i.e. Name.
document.registration.username.focus();
return true;
}

// This function will validate Name.
function allLetter()
{ 
var uname = document.registration.username;
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
// Focus goes to next field i.e. Address.
document.registration.address.focus();
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

// This function will validate Address.
function alphanumeric()
{ 
var uadd = document.registration.address;
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{

// Focus goes to next field i.e. ZIP Code.
document.registration.zip.focus();
return true;
}
}

// This function will validate ZIP Code.
function allnumeric()
{ 
var uzip = document.registration.zip;
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
// Focus goes to next field i.e. email.
document.registration.email.focus();
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}

// This function will validate Email.
function ValidateEmail()
{
var uemail = document.registration.email;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
document.registration.desc.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} 