var G;
$(document).ready(function(){
	function callme(id)
{
	            setTimeout(function(){$('[id="' + id + '"]').css("background-color","#DDEEFF");},300);
}

	function goToByScroll(id){
		G=id;
        $('html,body').animate({scrollTop: $('[id="' + id + '"]').offset().top-100},{duration:500,complete:function(){
        	callme(G);
        }});
}
	alert('ready from custom-2');
	  
    /*
    $('a').click(function(e){//alert('in here');
    	                     e.preventDefault();

    	                     alert(this);
    	                     var fragment = /[^#]*#(.*)/.exec(this)[1]
                             goToByScroll(fragment);
                             //window.location.hash=fragment;
                             //alert('done');
    	        });
*/
   /*var results=['x4','B','x5','x8.7.1'];*/
   /*results = $.map( results, function( a ) {
  return a.replace(/\./g,"\\\\.");
});
   alert(results[3]); 
   */
   var results;
   var C=-1;
   $('.navbar-form').submit(function(e){
      e.preventDefault();
      console.log('here in submit handler');
      var text = $('#search-bar').val();
      results = abc.search(text);
      console.log(results);
      C=-1;
   });
   //alert(results.length);
   //$('#test').click(function(){goToByScroll('x5.1.2');}); 
   $(document).keydown(function(e){
   	    if(e.which==39 && e.ctrlKey){alert('ya1 '+C);goToByScroll(results[(++C)%results.length].ref);}
   	    if(e.which==37 && e.ctrlKey){alert('ya2 '+C);if(C>0){goToByScroll(results[(--C)].ref);}}
   });
});