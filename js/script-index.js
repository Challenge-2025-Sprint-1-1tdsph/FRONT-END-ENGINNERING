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
  alert("Tudo certo! Agora você não precisa mais entrar no site. Todas as informações serão enviadas diretamente para seu WhatsApp. Você receberá notificações semanais e, no dia da consulta, enviaremos um lembrete com um botão para entrar diretamente na sala com o médico. 😊");

  closeForm();
});

 function pad(num) {
    return num.toString().padStart(2, '0');
  }

  function getMinDateTime() {
    const now = new Date();

    if (now.getHours() < 8) {
      now.setHours(8, 0, 0, 0);
    } else if (now.getHours() >= 18) {
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
    const maxVal = selectedDate.toISOString().slice(0, 16);
    input.max = maxVal;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById('diaehora');
    input.min = getMinDateTime();
    input.addEventListener('input', setMaxDateTime);
    setMaxDateTime();
  });
