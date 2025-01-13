const qrText = document.querySelector("#qr-text");
const sizes = document.querySelector("#sizes");
const generateBtn = document.querySelector("#generateBtn");
const downloadBtn = document.querySelector("#downloadBtn");

const qrContainer = document.querySelector(".qr-body");

 generateBtn.addEventListener("click", (evt) => {
    console.log("button is clicked"); 
    evt.preventDefault();
    isEmptyInput();
});

sizes.addEventListener("change", (evt) => {
    sizes.value = evt.target.value;
    isEmptyInput();
    
});

function isEmptyInput(){
    // if(qrText.value.length > 0) {
    //     generateQRCode();
    // }

    // else {
    //     alert("enter the text or URL to generate the QR code ");
    // }

    qrText.value.length > 0 
    ? generateQRCode() 
    : alert("enter the text or URL to generate the qr code");; // ternary operator: we can write like this also for (if else) loops

}

function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer, {
        text: qrText.value,
        height: sizes.value,
        width: sizes.value,
        colorLight: "white",
        colorDark: "black",
    });
}

