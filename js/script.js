$(function(){
    mainInit();
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
})

function mainInit(){
    con1()
}



function con1(){
    $(document).ready(function(){ 
        $('select').awselect() 
    });
}

