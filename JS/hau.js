let i=0;
const map = new Map([
    [0,'#top-page'],
    [1,'#label-skill'],
    [2,'#self-inf'],
    [3,'#sp1'],
    [4,'#sp2'],
    [5,'#sp3'],
    [6,'#sp4'],
    [7,'#sp5'],
    [8,'#sp6'],
    [9,'#sp7'],
    [10,'#sp8'],
    [11,'#sp9'],
]);

let allowScroll=true;
let idToScroll='';

async function pauseScroll(){
    await new Promise(resolve=>{
        setTimeout(function(){
            resolve();
            allowScroll=true;
        },300);
    });
}

$(document).ready(function(){
    $('body').bind('mousewheel',function(e){
        if(allowScroll){
            allowScroll=false;
            pauseScroll();
            $('html,body').stop();
            if(e.originalEvent.wheelDelta /120 > 0) {
                i--;
            } else{
                i++;
            }
            if(i>=map.size || i<0) i=0;
            idToScroll = map.get(i);
            $('html, body').animate({
                scrollTop:(i==0)?0:$(idToScroll).offset().top
            },700);
        } else {

        }
    });
});