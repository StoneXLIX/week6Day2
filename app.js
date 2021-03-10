
//create the boxes 
for(i=0; i<16; i++){
    $('.aj').append('<div class = "box"></div')
}
//change color on click 
$('.aj').on('click','.box', function(){

    $(this).toggleClass('changeColor');
     
   });




