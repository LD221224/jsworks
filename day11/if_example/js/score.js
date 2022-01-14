/* 조건
    90점 이상이면 "A학점" 출력
    80점 이상이면 "B학점" 출력
    70점 이상이면 "C학점" 출력
    60점 이상이면 "D학점" 출력
    60점 미만이면 "F학점" 출력
*/

let score = 85;
let grade = "";

if(score >= 90){
    grade = "A학점";
}
else if(score < 90 && score >= 80){
    grade = "B학점";
}
else if(score < 80 && score >= 70){
    grade = "C학점";
}
else if(score < 70 && score >= 60){
    grade = "D학점";
}   
else{
    grade = "F학점";
}

document.write("점수 : " + score +"<br>학점은 <span>" + grade + "</span>입니다.");