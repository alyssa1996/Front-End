function calcuateDate(){
    var startDate=new Date(document.getElementById('startDate').value);
    var endDate= new Date(document.getElementById('endDate').value);
    var d_day=parseInt((endDate.getTime()-startDate.getTime())/(1000*24*60*60));
    var today=new Date();

    if(d_day<0){
        alert('시작 날짜보다 디데이 날짜가 더 뒤에 있습니다! 다시 선택해주세요:)')
    }
    else if(startDate<today){
        alert('시작날짜가 이미 지났습니다! 오늘 이후의 날짜로 다시 선택해주세요:)')
    }
    else{
        document.getElementById("date").innerHTML = d_day+'일 남았습니다!';
    }
}

function countDate(){
    var startingDate=new Date(document.getElementById('starting_date').value);
    var input=document.getElementById('target_date').value;
    var resultDate= new Date(startingDate.setDate(startingDate.getDate()+parseInt(input)));

    document.getElementById('result_date').innerHTML=resultDate.toDateString();
}

function untilToday(){
    var startingDate=new Date(document.getElementById('startingDate').value);
    var endingDate=new Date(document.getElementById('endingDate').value);
    var countDate= parseInt((endingDate.getTime()-startingDate.getTime())/(1000*24*60*60))
    var today=new Date();
    
    if(endingDate>today){
        alert('끝나는 날짜가 오늘을 넘어갔습니다! 다시 선택해주세요:)')   
    }
    else{
        document.getElementById('countDate').innerHTML=countDate+'일 되었습니다:)';
    }
}