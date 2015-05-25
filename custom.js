alert('hello');

$(document).ready(function(){

    alert('DOM ready');

    var index = lunr(function () {
    this.field('title2', {boost: 100});
    this.field('title3', {boost: 80});
    this.field('title4', {boost: 60});
    this.field('title5', {boost: 40});
    this.field('title6', {boost: 20});
    this.field('body');
    this.ref('id');
  });

//var html = $('#search').html();

//console.log(html);

//var json = html2json(html);

//console.log(json);

/*Adding h2 elements*/

var h2= document.getElementsByTagName('h2');

console.log(h2.length);

for(var i=0;i<h2.length;i++)
{
    if(h2[i].id=="")continue;
    //console.log(h1[i].innerHTML);
    //console.log(h1[i].innerText);

    //console.log('before adding to index');
    //console.log(h1[i].id);
    //console.log(h1[i].innerText);    
    (function(a,b){
        //console.log('inside IIFE');
        //console.log(a);
        //console.log(b);
        index.add({
        id:a,
        title2: b     
    });
    })(h2[i].id,h2[i].innerText);
    //console.log('index added');
} 



/*Adding h3 elements*/

var h3= document.getElementsByTagName('h3');

console.log(h3.length);

for(var i=0;i<h3.length;i++)
{
    if(h3[i].id=="")continue;
    //console.log(h3[i].innerHTML);
    //console.log(h3[i].innerText);

    //console.log('before adding to index');
    //console.log(h3[i].id);
    //console.log(h3[i].innerText);    
    (function(a,b){
        //console.log('inside IIFE');
        //console.log(a);
        //console.log(b);
        index.add({
        id:a,
        title3: b    
    });
    })(h3[i].id,h3[i].innerText);
    //console.log('index added');
} 


/*Adding h4 elements*/

var h4= document.getElementsByTagName('h4');

console.log(h4.length);

for(var i=0;i<h4.length;i++)
{
    if(h4[i].id=="")continue;
    //console.log(h4[i].innerHTML);
    //console.log(h4[i].innerText);

    //console.log('before adding to index');
    //console.log(h4[i].id);
    //console.log(h4[i].innerText);    
    (function(a,b){
        //console.log('inside IIFE');
        //console.log(a);
        //console.log(b);
        index.add({
        id:a,
        title4: b    
    });
    })(h4[i].id,h4[i].innerText);
    //console.log('index added');
} 

/*Adding h5 elements*/

var h5= document.getElementsByTagName('h5');

console.log(h5.length);

for(var i=0;i<h5.length;i++)
{
    if(h5[i].id=="")continue;
    //console.log(h5[i].innerHTML);
    //console.log(h5[i].innerText);

    //console.log('before adding to index');
    //console.log(h5[i].id);
    //console.log(h5[i].innerText);    
    (function(a,b){
        //console.log('inside IIFE');
        //console.log(a);
        //console.log(b);
        index.add({
        id:a,
        title5: b    
    });
    })(h5[i].id,h5[i].innerText);
    //console.log('index added');
}

/*Adding h6 elements*/

var h6= document.getElementsByTagName('h6');

console.log(h6.length);

for(var i=0;i<h6.length;i++)
{
    if(h6[i].id=="")continue;
    //console.log(h6[i].innerHTML);
    //console.log(h6[i].innerText);

    //console.log('before adding to index');
    //console.log(h6[i].id);
    //console.log(h6[i].innerText);    
    (function(a,b){
        //console.log('inside IIFE');
        //console.log(a);
        //console.log(b);
        index.add({
        id:a,
        title6: b    
    });
    })(h6[i].id,h6[i].innerText);
    //console.log('index added');
}

/* End of adding headers */

console.log('let us see index ');
console.log(index);

var res = index.search('conformance');

console.log('here, the string representation for you------');

//console.log(res);


console.log(JSON.stringify(index));

/*
var html = document.getElementByID("results").innerHTML();

html = html + res;

document.getElementByID("results").innerHTML = html;
*/


});
