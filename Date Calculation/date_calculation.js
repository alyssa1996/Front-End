function calcuateDate(){
    var startDate=new Date(document.getElementById('startDate').value);
    var endDate= new Date(document.getElementById('endDate').value);
    var d_day=parseInt((endDate.getTime()-startDate.getTime())/(1000*24*60*60));

    if(d_day<0){
        alert('시작 날짜보다 디데이 날짜가 더 뒤에 있습니다! 다시 선택해주세요:)')
    }
    else{
        printDate(startDate,endDate,d_day);
    }
}

function printDate(today,input_date,d_day) {

    document.getElementById("today").innerHTML = "시작 날짜: "+today;
    document.getElementById("input_date").innerHTML = "끝나는 날짜: "+input_date;
    document.getElementById("date").innerHTML = "남은 날짜: "+d_day+'일';
    
}
