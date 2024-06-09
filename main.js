let toastBox = document.getElementById('toastBox')
let successMsg = "<i  class='fa-solid fa-circle-check'></i> Berhasil Submit"
let errorMsg = "<i  class='fa-solid fa-circle-xmark'></i> Tolong perbaiki error"
let invalidMsg = "<i  class='fa-solid fa-circle-exclamation'></i> Invalid input, coba kembali"


function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }else if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }else{
        toast.classList.add('success');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}
