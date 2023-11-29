let i=0;

let map = new Map([
    [0,'W'],
    [1,'We'],
    [2,'We a'],
    [3,'We ar'],
    [4,'We are'],
    [5,'We are t'],
    [6,'We are te'],
    [7,'We are tea'],
    [8,'We are team'],
    [9,'We are team 2']
]);

let hide=true;

async function runPointer(){
    while(true){
        await new Promise(resolve=>{
            setTimeout(function(){
                resolve();
                hide = !hide;
                $('#msg-typing').html('Hello, We are team 2'+((!hide)?'|':''));
            },500);
        });
    }
}

async function runTyping(){
    while(i<map.size){
        await new Promise(resolve=>{
            setTimeout(function(){
                resolve();
                $('#msg-typing').html('Hello, '+map.get(i)+'|');
                i++;
                if(i==map.size) runPointer();
            },100);
        });
    }
}

$(document).ready(function(){
    $('.section__inner').bind('mousewheel',function(e){
        if(e.originalEvent.wheelDelta /120 <= 0){
            $('.section__inner').unbind('mousewheel');
            runTyping();
        }
    });
});