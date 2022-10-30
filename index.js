let modal = document.getElementById('modal')
function showModal(){
    modal.classList.add('active-modal')
}
function closeModal(){
    modal.classList.remove('active-modal')
}
$('.three-experts').slick({
    dots:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive:[
        {
            breakpoint:900,
            settings:{
                slidesToShow:2
            }
        },{
            breakpoint:500,
            settings:{
                slidesToShow:1
            }
        }
    ]
});