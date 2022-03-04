
$('#key').on('click',function(){
    $('#login_panel').show();
    return false;
})

//При нажатии на пустое место, пропадает определённый блок.
$(document).click( function(event){
    if( $(event.target).closest("#login_panel").length ) return;
    $("#login_panel").hide();
    event.stopPropagation();
  });