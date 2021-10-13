// 네비게이션
$("#gnb div ul li .snb").hide()
$("#gnb div ul li:not(:animated)").hover(function() {
  $(this).not(":animated").children(".snb").slideDown()
},function() {
  $("#gnb div ul li .snb:not(:animated)").slideUp()
})

// 슬라이더 prev next 버튼
let className, num;
function prevSlider() {
  $("#sliderList:not(:animated)").prepend($("#sliderList li:last"))
                                 .css({ marginLeft: "-100%" })
                                 .animate({ marginLeft: 0 })
}
function nextSlider() {
  $("#sliderList:not(:animated)").animate({ marginLeft: "-100%" }, function() {
    $(this).append($(">li:first", this)).css({ marginLeft: 0 })
  })
}
$(".btn_prev").on('click', function() {
  className = $("#sliderList li:last").attr('class')
  num = className.substr(6, 1) - 1;
  $("#button2 .btn_num a").removeClass('active')
  $("#button2 .btn_num a:eq("+ num +")").addClass('active')
  prevSlider()
})
$(".btn_next").on('click', function() {
  className = $("#sliderList li:first").attr("class")
  num = className.substr(6, 1)
  if (num == 3) num = 0;
  $("#button2 .btn_num a").removeClass('active')
  $("#button2 .btn_num a:eq("+ num +")").addClass('active')
  nextSlider()
})
// let timer = setInterval(nextSlider, 3000)
// $("#posNum a, #button2 .btn_num a").on('click', function(e) {
//   clearInterval(timer)
//   timer = setInterval(nextSlider, 3000)
//   e.preventDefault();
// })

$("#button2 .btn_num a").on('click', function() {
  $("#button2 .btn_num a").removeClass("active")
  $(this).addClass("active")
  let classNum = $(this).index() + 1;
  let pos = $("#sliderList .slider" + classNum).position().left;

  let addNum = classNum;
  $("#sliderList").animate({ marginLeft: -pos }, function() {
    for ( i=1; i<$("#sliderList li").length; i++) {
      addNum++;
      if ( addNum == $("#sliderList li").length+1 ) addNum = 1;
      $("#sliderList").append($(".slider"+addNum))
    }
    $(this).css({ margin: 0 })
  })
})

// 슬라이더 num 버튼












// 매장검색
$(".closeBtn").hide()
$("input").hide()

$(".searchBtn").on("click", function(e) {
  $("input").show().animate({ width: 135 },300)
  $(".closeBtn").show()
  e.preventDefault();
})
$(".closeBtn").on("click", function(e) {
  e.preventDefault();
  $(this).hide()
  $("input").animate({ width: 0}, 350, function() {
    $("input").hide()
  })
})
