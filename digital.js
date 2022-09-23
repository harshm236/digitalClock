function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
function time(){
    
   
    let d = new Date()

    let HH = d.getHours()
    let MM = d.getMinutes()
    let SS = d.getSeconds()
    if(HH>=12)
      document.getElementById('apm').innerText='PM'
      else
      document.getElementById('apm').innerText='AM'

  HH%=12

    document.getElementById('hh').innerText=addZero(HH)
    document.getElementById('mm').innerText=addZero(MM)
    document.getElementById('ss').innerText=addZero(SS)
    
    

}
setInterval(time,1000)

function alarm(){
    let wuTime = document.getElementById('wuTime').value
    document.getElementById('d6_1').innerText= 'Wake up time =' + wuTime
    
    let luTime=document.getElementById('luTime').value
    document.getElementById('d6_2').innerText="Lunch time="+ luTime

    let napTime = document.getElementById('napTime').value
    document.getElementById('d6_3').innerText='Nap time = '+ napTime

    let nightTime = document.getElementById('nightTime').value
    document.getElementById('d6_4').innerText ='Night time = '+ nightTime

    fd12()
}

function fd12(){
   
    let a = document.getElementById('d6_1').innerText
    let b = document.getElementById('d6_2').innerText
    let c = document.getElementById('d6_3').innerText
    let d = document.getElementById('d6_4').innerText
    /*console.log(parseInt(a.split('=')[1].split('-')[1]))*/
  
    if(parseInt(document.getElementById('hh').innerText)>=parseInt(a.split('=')[1].split('-')[0]) && parseInt(document.getElementById('hh').innerText)<=parseInt(a.split('=')[1].split('-')[1]) && document.getElementById('apm').innerText == 'AM')
    {
        document.getElementById('d12').style.backgroundImage = "url('wakeup.png')"
        document.getElementsByClassName('d11')[0].innerText='GRAB SOME HEALTHY BREAKFAST!'
        document.getElementsByClassName('d4')[0].innerText='GOOD MORNING'
    }

    else if(parseInt(document.getElementById('hh').innerText)>=parseInt(b.split('=')[1].split('-')[0]) && parseInt(document.getElementById('hh').innerText)<=parseInt(b.split('=')[1].split('-')[1]) && document.getElementById('apm').innerText == 'PM')
    {
    document.getElementById('d12').style.backgroundImage = "url('lunch_image@2x.png')"
    document.getElementsByClassName('d11')[0].innerText='STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!' 
    document.getElementsByClassName('d4')[0].innerText='GOOD AFTERNOON'
    }

    else if (parseInt(document.getElementById('hh').innerText)>=parseInt(c.split('=')[1].split('-')[0]) && parseInt(document.getElementById('hh').innerText)<=parseInt(c.split('=')[1].split('-')[1]) && document.getElementById('apm').innerText == 'PM')
    {
        document.getElementById('d12').style.backgroundImage = "url('5183@2x.png')"
    document.getElementsByClassName('d11')[0].innerText='STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!' 
    document.getElementsByClassName('d4')[0].innerText='GOOD EVENING'
    }
    
    else if(parseInt(document.getElementById('hh').innerText)>=parseInt(d.split('=')[1].split('-')[0]) && parseInt(document.getElementById('hh').innerText)<=parseInt(d.split('=')[1].split('-')[1]) && document.getElementById('apm').innerText == 'AM')
    { 
        document.getElementById('d12').style.backgroundImage = "url('5194@2x.png')"
    document.getElementsByClassName('d11')[0].innerText='CLOSE YOUR EYES AND GO TO SLEEP' 
    document.getElementsByClassName('d4')[0].innerText='GOOD NIGHT'

    }
  /* else if (parseInt(document.getElementById('hh').innerHTML)<11 && parseInt(document.getElementById('hh').innerHTML)>5 && document.getElementById('apm').innerHTML == 'AM')*/
    
}
