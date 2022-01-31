// 경력 - 교육사항
function showCareer(){
    let list1 = document.getElementById("careerList");  
    list1.style.display = "block";         
    let list2 = document.getElementById("eduList");   
    list2.style.display = "none";          

    // let button1 = document.getElementById("btn_show_career");  
    // button1.style.display = "none";        
    // let button2 = document.getElementById("btn_show_edu");
    // button2.style.display = "block";         
}

function showEdu(){
    let list1 = document.getElementById("careerList");  
    list1.style.display = "none"; 
    let list2 = document.getElementById("eduList");   
    list2.style.display = "block";                    

    // let button1 = document.getElementById("btn_show_career");  
    // button1.style.display = "block";
    // let button2 = document.getElementById("btn_show_edu");
    // button2.style.display = "none";
}