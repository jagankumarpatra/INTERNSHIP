const btn1=document.getElementById("one");
const btn2=document.getElementById("two");
const information=document.getElementById("ifo");
let isContentVisible = false;
btn1.addEventListener("click",()=>{
    if (!isContentVisible) {
        info.style.display = "block";
        isContentVisible = true;
      } else {
        info.style.display = "none";
        isContentVisible = false;
      }
    
});
btn2.addEventListener("click", () => {
    if (!isContentVisible) {
      info.style.display = "block";
      isContentVisible = true;
    } else {
      info.style.display = "none";
      isContentVisible = false;
    }
  });