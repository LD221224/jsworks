// 상세 설명 보기
function showText(){
    let text = document.getElementById("detail");   // text 선택
    text.style.display = "block";                   // text 보이기

    let button = document.getElementById("show");   // 보기 버튼 선택
    button.style.display = "none";                  // 버튼 숨기기
}

// 상세 설명 닫기
function hideText(){
    let text = document.getElementById("detail");   // text 선택
    text.style.display = "none";                    // text 숨기기

    let button = document.getElementById("show");   // 보기 버튼 선택
    button.style.display = "block";                 // 버튼 보이기
}