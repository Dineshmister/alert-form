function cook()

{
    if(document.simple.user.value == "" ){
        alert("Fill your Name");
        return;
    }
   
    
     if(document.simple.okay.value == "")  {
        alert("Fill Your age");
        return;
     }
        if(document.simple.okay.value < 18){

        alert("Your age must not be less than 18")
        return;
        }
    
    
        
    
    /*cookievalue = escape(document.simple.user.value) +";";
    document.cookie = c;
    document.write("name : ",c); */
}
