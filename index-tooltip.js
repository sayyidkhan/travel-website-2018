
/* ############################### show/hide display tooltip Javascript Function ############################# */
/* tooltip notifier in jquery */
$(document).ready(function(){
 $('[data-toggle="tooltip"]').tooltip("hide");    
});

$(document).ready(function(){
      $("#txtTitle,#txtCountry,#txtPrice,#txtStartdate,#txtEnddate,#txtDescription").click(function(){
        $("#txtTitle,#txtCountry,#txtPrice,#txtStartdate,#txtEnddate,#txtDescription").tooltip('show');   
    });
      $("#txtTitle,#txtCountry,#txtPrice,#txtStartdate,#txtEnddate,#txtDescription").mouseout(function(){
        $('[data-toggle="tooltip"]').tooltip('hide');   
    });
});
/* ############################### show/hide display tooltip Javascript Function ############################# */

/* ############################### on click title flip Javascript Function ############################# */

/* fun element - click on title to repeat the effect */
$(document).ready(function(){
    $("#h2_Title").click(function(){
        $("#h2_Title").toggleClass('animated infinite flip');
    });
});

/* ############################### on click title flip Javascript Function ############################# */

/* ############################### enable/disable tooltip based on data Javascript Function ############################# */

/* disable the tooltip once there is data have been inserted */
$("#txtTitle,#txtCountry,#txtPrice,#txtStartdate,#txtEnddate,#txtDescription").hover(function(){
   if($("#txtTitle").val() !== ''){
    $("#txtTitle").tooltip('disable');
     //alert("#txtTitle test");
   }
   if($("#txtCountry").val() !== ''){
    $("#txtCountry").tooltip('disable');
     //alert("#txtCountry test");
   }
   if($("#txtPrice").val() !== ''){
    $("#txtPrice").tooltip('disable');
     //alert("#txtCountry test");
   }
   if($("#txtStartdate").val() !== ''){
    $("#txtStartdate").tooltip('disable');
     //alert("#txtCountry test");
   }
   if($("#txtEnddate").val() !== ''){
    $("#txtEnddate").tooltip('disable');
     //alert("#txtCountry test");
   }
   if($("#txtDescription").val() !== ''){
    $("#txtDescription").tooltip('disable');
     //alert("#txtCountry test");
   }
});

/* re-enable the tooltip once there is data have been taken out */
$("#txtTitle,#txtCountry,#txtPrice,#txtStartdate,#txtEnddate,#txtDescription").hover(function(){
   if($("#txtTitle").val() == ''){
    $("#txtTitle").tooltip('enable');
     //alert("#txtTitle test");
   }
   if($("#txtCountry").val() == ''){
    $("#txtCountry").tooltip('enable');
     //alert("#txtCountry test");
   }
   if($("#txtPrice").val() == ''){
    $("#txtPrice").tooltip('enable');
     //alert("#txtCountry test");
   }
   if($("#txtStartdate").val() == ''){
    $("#txtStartdate").tooltip('enable');
     //alert("#txtCountry test");
   }
   if($("#txtEnddate").val() == ''){
    $("#txtEnddate").tooltip('enable');
     //alert("#txtCountry test");
   }
   if($("#txtDescription").val() == ''){
    $("#txtDescription").tooltip('enable');
     //alert("#txtCountry test");
   }
});

/* ############################### enable/disable tooltip based on data Javascript Function ############################# */




