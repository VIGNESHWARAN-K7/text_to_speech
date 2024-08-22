const speech=new SpeechSynthesisUtterance()
let textarea=document.querySelector("textarea")
let voices=[]
let select=document.querySelector("select")
document.querySelector(".btn").addEventListener("click",()=>{
    // console.log("1",texta)

    speech.text=textarea.value
    window.speechSynthesis.speak(speech)
    
});
window.speechSynthesis.onvoiceschanged =()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0]
    voices.forEach((voice,i)=>(select.options[i])=new Option(voice.name, i))

}
select.addEventListener("change",()=>{
    speech.voice=voices[voices.value]
    console.log("1")
})