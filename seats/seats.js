// 자리 배치도
let customer = prompt("입장객 수는 몇 명인가요?");
let col = prompt("한 줄에 몇 명 앉나요?");  // 열의 수
let row;    // 행의 수

if(customer % col == 0){
    row = parseInt(customer / col);
    // parseInt : 4.0 -> 4로 변환
}
else{
    row = parseInt(customer / col) + 1; // 1줄 추가
}

// document.write(row + "줄이 필요합니다.");

document.write("<table>");
for(let i = 0; i < row; i++){
    document.write("<tr>");
    for(let j = 1; j <= col; j++){
        let num = (i * col) + j;
        if(num <= customer){
            document.write("<td>좌석" + num + "</td>");
        }
        /*
            if(num > customer)  // true일 때
                break;          // 빠져 나옴
            document.write("좌석" + num + " ");

        */
    }
    document.write("</tr>");
}
document.write("</table>");