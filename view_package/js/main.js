/////////////////////////// UI Design ///////////////////////////
(function ($) {
	"use strict";
	$('.column100').on('mouseover',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).addClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
	});

	$('.column100').on('mouseout',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).removeClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
	});
    

})(jQuery);
/////////////////////////// UI Design ///////////////////////////


/////////////////////////// Enable/disable TrashCan Button ///////////////////////////
$( "input[type=checkbox]" ).click(function() {
	/// trashCan-1 ///
	if ($('#checkbox-1').prop('checked')==true) {
		
		$("#tashCan-1").one().removeClass('fa-disabled');			
	}
	else if ($('#checkbox-1').val() !== (':checked')) {
		/// trashCan-1 ///
		$("#tashCan-1").one().addClass('fa-disabled');
		
	}
	/// trashCan-1 ///
	/// trashCan-2 ///
	if ($('#checkbox-2').prop('checked')==true) {
		
		$("#tashCan-2").one().removeClass('fa-disabled');			
	}
	else if ($('#checkbox-2').val() !== (':checked')) {
		/// trashCan-1 ///
		$("#tashCan-2").one().addClass('fa-disabled');
		
	}
	/// trashCan-2 ///
	/// trashCan-3 ///
	if ($('#checkbox-3').prop('checked')==true) {
		
		$("#tashCan-3").one().removeClass('fa-disabled');			
	}
	else if ($('#checkbox-3').val() !== (':checked')) {
		/// trashCan-1 ///
		$("#tashCan-3").one().addClass('fa-disabled');
		
	}
	/// trashCan-3 ///
	/// trashCan-4 ///
	if ($('#checkbox-4').prop('checked')==true) {
		
		$("#tashCan-4").one().removeClass('fa-disabled');			
	}
	else if ($('#checkbox-4').val() !== (':checked')) {
		/// trashCan-1 ///
		$("#tashCan-4").one().addClass('fa-disabled');
		
	}
	/// trashCan-4 ///
	/// trashCan-5 ///
	if ($('#checkbox-5').prop('checked')==true) {
		
		$("#tashCan-5").one().removeClass('fa-disabled');			
	}
	else if ($('#checkbox-5').val() !== (':checked')) {
		/// trashCan-1 ///
		$("#tashCan-5").one().addClass('fa-disabled');
		
	}
	/// trashCan-5 ///
});
/////////////////////////// Enable/disable TrashCan Button ///////////////////////////

/////////////////////////// Select All Button ///////////////////////////
$( "#select-all-id" ).click(function() {
	/// css manipulation ///
	$(this).toggleClass('select-all select-all_selected');
	/// css manipulation ///
	/// enable/disable trashcan ///
	if ($(this).text() == "SELECT ALL") { 
        $(this).text("UNSELECT ALL");
        $('#delete-ID').text("DELETE ALL !").css({color: "#fa4251", backgroundColor: "#ffebed"}); 
        $('#checkbox-1,#checkbox-2,#checkbox-3,#checkbox-4,#checkbox-5').attr('checked', true);
		$("#tashCan-1,#tashCan-2,#tashCan-3,#tashCan-4,#tashCan-5").one().removeClass('fa-disabled');
    } else { 
        $(this).text("SELECT ALL");
        $('#delete-ID').text("DELETE").css({color: "#fff", backgroundColor: "#555"});  
        $('#checkbox-1,#checkbox-2,#checkbox-3,#checkbox-4,#checkbox-5').attr('checked', false);
        $("#tashCan-1,#tashCan-2,#tashCan-3,#tashCan-4,#tashCan-5").one().addClass('fa-disabled');
    };
    /// enable/disable trashcan ///
    	
});
/////////////////////////// Select All Button ///////////////////////////

/////////////////////////// Delete Rows ///////////////////////////

var tashCan_1 = ""
var tashCan_2 = ""
var tashCan_3 = ""
var tashCan_4 = ""
var tashCan_5 = ""

/// delete Row 1 ///
$( "#tashCan-1" ).click(function() {
	if ($('#checkbox-1').prop('checked')==true) {
	$('#table-row-1').fadeOut("slow");
	tashCan_1 = true; 	
 	} 
});
/// delete Row 1 ///
/// delete Row 2 ///
$( "#tashCan-2" ).click(function() {
	if ($('#checkbox-2').prop('checked')==true) {
	$('#table-row-2').fadeOut("slow");
	tashCan_2 = true;	
 	} 
});
/// delete Row 2 ///
/// delete Row 3 ///
$( "#tashCan-3" ).click(function() {
	if ($('#checkbox-3').prop('checked')==true) {
	$('#table-row-3').fadeOut("slow");
	tashCan_3 = true;	
 	} 
});
/// delete Row 3 ///
/// delete Row 4 ///
$( "#tashCan-4" ).click(function() {
	if ($('#checkbox-4').prop('checked')==true) {
	$('#table-row-4').fadeOut("slow");
	tashCan_4 = true;
 	} 
});
/// delete Row 4 ///
/// delete Row 5 ///
$( "#tashCan-5" ).click(function() {
	if ($('#checkbox-5').prop('checked')==true) {
	$('#table-row-5').fadeOut("slow");
	tashCan_5 = true;	
 	} 
});
/// delete Row 5 ///

/////////////////////////// Delete Rows ///////////////////////////

/////////////////////////// Delete all Rows ///////////////////////////

$( "#delete-ID" ).click(function() {
	if ($('#checkbox-1').prop('checked')==true &&
	    $('#checkbox-2').prop('checked')==true &&
	    $('#checkbox-3').prop('checked')==true &&
	    $('#checkbox-4').prop('checked')==true &&
	    $('#checkbox-5').prop('checked')==true)
	    {
	    $('#table-row-1,#table-row-2,#table-row-3,#table-row-4,#table-row-5').fadeOut("slow");
	    tashCan_1 = true;
	    tashCan_2 = true;
	    tashCan_3 = true;
	    tashCan_4 = true;
	    tashCan_5 = true;
	    }

});

/////////////////////////// Delete all Rows ///////////////////////////

/////////////////////////// Display no database ///////////////////////////


$( "#no-database" ).mousemove(function() {
	if (tashCan_1 == true && tashCan_2 == true && tashCan_3 == true && tashCan_4 == true && tashCan_5 == true) {
	 $( "#no-database" ).off( "mousemove");
	 $( "#remove-database" ).fadeOut("slow", function(){
     $("#no-database").append("<div><center class='database-font'> No Database to Show. </center></div>");  
    });

 	} 
});


/////////////////////////// Display no database ///////////////////////////

/* ############################### on click title flip Javascript Function ############################# */

/* fun element - click on title to repeat the effect */
$(document).ready(function(){
    $("#h2_Title").click(function(){
        $("#h2_Title").toggleClass('animated infinite flip');
    });
});

/* ############################### on click title flip Javascript Function ############################# */
