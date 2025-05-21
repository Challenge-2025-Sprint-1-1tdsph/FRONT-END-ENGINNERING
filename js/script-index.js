document.getElementById("openFormBtn").addEventListener("click", function () {
  document.getElementById("teleconsultaForm").classList.add("open");
  document.body.style.overflow = 'hidden';
});


function closeForm() {
  document.getElementById("teleconsultaForm").classList.remove("open");
  document.body.style.overflow = 'auto';
}


document.getElementById("consultaForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Sua consulta foi marcada! Agora aguarde uma mensagem chegar no seu Whatsapp!");
  closeForm();
});

function pad(num) {
    return num.toString().padStart(2, '0');
  }

  function getNowISO() {
    const now = new Date();
    return now.toISOString().slice(0,16);
  }

  function getMinDateTime() {
    const now = new Date();

    
    if (now.getHours() < 8) {
      now.setHours(8, 0, 0, 0);
    }
    
    else if (now.getHours() >= 18) {
      now.setDate(now.getDate() + 1);
      now.setHours(8, 0, 0, 0);
    }
    
    const year = now.getFullYear();
    const month = pad(now.getMonth() + 1);
    const day = pad(now.getDate());
    const hour = pad(now.getHours());
    const minute = pad(now.getMinutes());

    return `${year}-${month}-${day}T${hour}:${minute}`;
  }

  function setMaxDateTime() {
    
    const input = document.getElementById('diaehora');
    const val = input.value;
    if (!val) return;

    const selectedDate = new Date(val);

 
    selectedDate.setHours(18, 0, 0, 0);

    
    const maxVal = selectedDate.toISOString().slice(0,16);
    input.max = maxVal;
  }

  const input = document.getElementById('diaehora');
  input.min = getMinDateTime();
  input.step = 1800; 

 
  input.addEventListener('input', setMaxDateTime);

  
  setMaxDateTime();