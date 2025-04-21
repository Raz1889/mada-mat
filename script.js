// انتخاب دکمه ثبت
document.getElementById('registerBtn').addEventListener('click', function() {
    const phoneInput = document.getElementById('phone').value;
    if (phoneInput) {
      // مخفی کردن بخش ورودی شماره موبایل
      document.querySelector('.phone-input').style.display = 'none';
      document.getElementById('registerBtn').style.display = 'none';
      
      // نمایش بخش وارد کردن کد
      document.querySelector('.verification').style.display = 'block';
    } else {
      alert('لطفاً شماره موبایل خود را وارد کنید');
    }
  });
  
  // انتخاب دکمه تایید
  document.getElementById('verifyBtn').addEventListener('click', function() {
    const codeInput = document.getElementById('code').value;
    if (codeInput) {
      // بعد از تایید، به صفحه جدید هدایت می‌شود
      alert('کد تایید صحیح است. به صفحه جدید هدایت می‌شوید.');
      window.location.href = 'industries.html';  // لینک به صفحه جدید
    } else {
      alert('لطفاً کد تایید را وارد کنید');
    }
  });
  