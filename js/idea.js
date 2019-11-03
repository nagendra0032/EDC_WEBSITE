function postToGoogle() {
    var field1 = $("#name").val();
    var field2 = $("#email").val();
    var field3 = $("#phone").val();
    var field4 = $("#rollno").val();
    var field5 = $("#collegename").val();
    var field6 = $("#idea").val();
     

    if(field1 == ""){
        alert('Please Fill Your name');
        document.getElementById("name").focus();
        return false;
    }
    if(field2 == ""){
        alert('Please put your email');
        document.getElementById("email").focus();
        return false;
    }
    if(field3 == ""){
        alert('Please put your phone');
        document.getElementById("phone").focus();
        return false;
    }
    if(field4 == ""){
        alert('Please put your roll no.');
        document.getElementById("rollno").focus();
        return false;
    }
    if(field5 == ""){
        alert('Please put your college name');
        document.getElementById("collegename").focus();
        return false;
    }
    if(field6 == ""){
        alert('Please put your idea in a short paragraph');
        document.getElementById("idea").focus();
        return false;
    }
    
    


    

    $.ajax({

       
        url: "https://docs.google.com/forms/d/e/1FAIpQLSe6zEBHgdcEiiQVwIOQshlgldx-c-5KhFBB4eT3GB7DfgbLrA/formResponse",
        
        data: {"entry.1698042847": field1, "entry.794757459": field2, "entry.1492335135": field3, "entry.928060722": field4, "entry.1873574582": field5, "entry.1969604184": field6},
        type: "POST",
        dataType: "xml",
        success: function(d)
        {

        },
        error: function(x, y, z)
            {
                alert("Your idea has been submitted! We'll contact you soon");
                window.location="https://www.facebook.com/edcbitmesra/";
            
            }
    });
    return false;
}
