let foodRoadList = [
    "부평해물탕거리", "인천광역시 부평구 부평문화로 113 (부평동)", 
    "굴포먹거리타운", "인천광역시 부평구 갈산동", 
    "강화별밤거리", "인천광역시 강화군 강화읍 관청리 일대", 
    "외포리꽃게마을", "인천광역시 강화군 내가면 중앙로", 
    "오송도송 음식문화특화거리", "인천광역시 연수구 동춘동 능허대로", 
    "화평동냉면거리", "인천광역시 동구 화평로", 
    "만석동주꾸미거리", "인천광역시 동구 만석로 9", 
    "인하대후문먹거리타운", "인천광역시 미추홀구 경인남길30번길 45-1", 
    "석바위특색음식거리", "인천광역시 미추홀구 경인로", 
    "소래포구신도로횟집거리", "인천광역시 남동구 논현동 포구로", 
    "구월동로데오음식문화거리", "인천광역시 남동구 인하로", 
    "용종맛길(음식문화시범거리)", "인천광역시 계양구 용마루길", 
    "계양맛길(음식문화시범거리)", "인천광역시 계양구 계양문화로", 
    "동인천광역시삼치거리", "인천광역시 중구 우현로", 
    "북성동자장면거리", "인천광역시 중구 차이나타운로", 
    "맛고을길(음식문화시범거리)", "인천광역시 서구 서곶로", 
    "루원음식문화거리", "인천광역시 서구 봉오재3로 94번길"
]

// for ~ in 반복문
document.write("<table id='foodTable'>");
document.write("<tr>");
document.write("<th>번호</th>");
document.write("<th>거리 명</th>");
document.write("<th>주소</th>");
document.write("</tr>");

 for(let i = 0; i < foodRoadList.length; i++){
    document.write("<tr>");
    document.write("<td>");
    if(i == 0){
        document.write(i + 1);
    }else{
        document.write(i / 2 + 1);
    }   
    document.write("</td>");
    document.write("<td>");
    document.write(foodRoadList[i]);
    document.write("</td>");

    i++;
    
    document.write("<td>");
    document.write(foodRoadList[i]);
    document.write("</td>");
    document.write("</tr>");
 }
document.write("</table>");