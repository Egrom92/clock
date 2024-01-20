const getCurrentTime = () =>{
  const el = document.querySelector('h1')
  
  const date = new Date();
  
  let hh  = date.getHours()
  let mm  = date.getMinutes()
  let ss = date.getSeconds()
  
  hh = hh < 10 ? `0${hh}` : hh
  mm = mm < 10 ? `0${mm}` : mm
  ss = ss < 10 ? `0${ss}` : ss
  
  el.innerText = `${hh}:${mm}:${ss}`
}

getCurrentTime()

setInterval(getCurrentTime, 1000)