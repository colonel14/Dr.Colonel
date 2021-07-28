var sideBarMenuEle = document.querySelectorAll('aside .sidebar-menu > li');
var SideBarMenuEleArray = Array.from(sideBarMenuEle);
var subMenuEle = document.querySelectorAll('aside .sidebar-menu > li .submenu');
var subMenuEleArray = Array.from(subMenuEle);


SideBarMenuEleArray.forEach((ele) => {
    ele.addEventListener('click', function(e){
        SideBarMenuEleArray.forEach((ele) => {
            ele.classList.remove('active');
            ele.children[1].classList.remove('menu-show');
            

        });

        e.currentTarget.classList.toggle('active');
        e.currentTarget.children[1].classList.toggle('menu-show');
        
        e.currentTarget.addEventListener('click', function(e){
            e.currentTarget.classList.toggle('active');
            e.currentTarget.children[1].classList.toggle('menu-show');
        });

    });
});

var msgNotification = document.querySelector('.main-content header .profile-info .msgNotification');
var chat = document.querySelector('.chat');
var closeIcon = document.querySelector('.chat header .head svg');


msgNotification.addEventListener('click', function(e){
    chat.classList.toggle('active');
});

closeIcon.addEventListener('click', function(e){
   chat.classList.remove('active');
});


var quickActivity = document.querySelectorAll(".quick-activity .barfiller");
var quickActivityArray = Array.from(quickActivity);

quickActivityArray.forEach((ele) => {
    var dataPercentage = ele.getAttribute("data-percentage");

    ele.children[1].style.width = dataPercentage + "%";
    ele.children[0].style.left = "calc(" + dataPercentage + "%" + " - 21px";

    for(var i = 0; i <= dataPercentage; i = i + 5){
        ele.children[0].children[0].innerHTML = i + "%";
    };
    
});

var headerMoreTool = document.querySelectorAll(".main-content-inner .row .white-card .white-card-head .header-more-tool");
var headerMoreToolArray = Array.from(headerMoreTool);
var headerDropmenu = document.querySelector(".main-content-inner .row .white-card .white-card-head .header-more-tool .dropdown");
var dropdownMenuButton = document.getElementById('dropdownMenuButton');

headerMoreToolArray.forEach((ele) => {
    ele.addEventListener('click', function(e){
        ele.children[1].classList.toggle('show');
        if(e.target.className !== 'header-more-tool'){
            console.log("ture");
        } else{
            console.log('false')
        }
    });

    // document.body.onclick = function(e){

    //     if(e.currentTarget.getAttribute('id') !== 'dropdownMenuButton'){
    //         // ele.children[1].classList.toggle('show');
    //         console.log("true");
    //     };

    //     // console.log(e.currentTarget.getAttribute('id') !== ""dropdownMenuButton);
        
    // };

})