window.addEventListener('DOMContentLoaded', function(){
    'use strict'

    //Here you put urs : 1) Tabs 2) 
    let tab = document.querySelectorAll('.info-header-tab'), //1) Tabs
        info = document.querySelector('.info-header'), //2) Parent class of "Tabs" .(Wrap)
        tabContent = document.querySelectorAll('.info-tabcontent'); //3) And finally tab content


        //This func response for hiding urs not necesaries tabs
        //for success you need prepare in CSS classes .hide , .show!!!
    function hideTabContent(a) {
        for(let i=a; i< tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1); //Here we put 1 cuz our func hideTabContent  will start from 1 and
                    //->>hide all items except of first(1)  so basicly we will see first item


              //In this func we in reverse starting to show tabContent
              //for success you need prepare in CSS classes .hide , .show!!!  
    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    //In this event we use DELEGATION thats why we need the variable "info" 
    //Oftenly delegation is used to child classes;
    info.addEventListener('click',function (event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0 ; i< tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0); // attribute "0" hides all tabs!
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});