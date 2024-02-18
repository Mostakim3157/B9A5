function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-green-400");
  }



  function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;

}

function getElementNameById(elementId) {
    const element = document.getElementById(elementId)
     const elementText = element.innerText;
     return elementText;
}
  
  function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
  }
 






