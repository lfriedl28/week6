alert("Script loaded");
function isEven(x)
{
	if(x%2===0)
	{
		document.write(" Fizz");
	}
	else{
		document.write(" Buzz");
	}
}

function drawASCIITable()
{
	for (var x=0;x<256;x++)
	{
		document.write( x + " = " + String.fromCharCode(x) +  " = " + (x).toString(16));
		document.write("<p>");
	}
}
function arrayLength(x)
{
	if (Array.isArray(x))
	{
		if (x.length === 0)
		{
			document.write("Your array, good sir, is empty");
		}
		else if (x.length > 0)
		{
			document.write("The array has data");
		}
	}
	else
	{ 
		document.write("Please only use arrays");
	}
}

function emailWrite()
{
	var email1 = prompt("Gimme your email!");
	var email2 = prompt("Gimme your email!");
	var email3 = prompt("Gimme your email!");
	var email = [email1, email2, email3];
	email.sort();
	document.write(email);
}

var setArray = [8, 6, 7, 5, 3, 0, 9, 4, 12,101, 69];	
function bubbleSort()
	{	
	var swapping = false;
    var arrayLength = setArray.length;
    do
    {
      swapping = false;
      for (i = 1; i < arrayLength; i++)
      {
        if (setArray[i-1] > setArray[i])
        { 
         temp = setArray[i-1]
         setArray[i-1] = setArray[i];
         setArray[i] = temp;
         swapping = true;
        }
      }
      arrayLength -= 1  
    }
    while(swapping) 
    		document.write(setArray);
	}