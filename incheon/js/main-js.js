// img_show
let picture = ["./images/bg11.jpg", "./images/bg22.jpg", "./images/bg55.jpg"];
let pic_idx = 0;    // 배열의 위치

showPicture();   // 함수 호출

function showPicture(){
    let pic = document.getElementById("cup");
    pic.src = picture[pic_idx];  // pic_idx = 0, 1, 2 반복

    pic_idx++;  //  pic_idx += 1;

    if(pic_idx == picture.length)   // pic_idx == 배열의 크기 3
    pic_idx = 0;

    setTimeout(showPicture, 2000);   // 콜백 함수(함수의 매개변수로 함수를 설정)
}

// 디지털 시계
setInterval(function(){ // 실행 함수
    const now = new Date();
    let watch = now.toLocaleTimeString();   // 시간 표시
    document.querySelector("#display").innerHTML = watch;
}, 1000);