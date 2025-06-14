
document.getElementById("videoForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const duration = parseInt(document.getElementById("duration").value);
  const message = document.getElementById("message");
  message.innerHTML = "⏳ جاري تجهيز الفيديو، الرجاء الانتظار...";

  setTimeout(() => {
    if (duration > 30) {
      message.innerHTML = "⚠️ هذه المدة متوفرة فقط في الخطة المدفوعة ($7 شهريًا أو $70 سنويًا).";
    } else {
      message.innerHTML = "✅ تم إرسال طلبك بنجاح! سيتم تجهيز الفيديو قريبًا.";
    }
  }, 1500);
});
