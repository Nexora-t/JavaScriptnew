let count = localStorage.getItem('visitCount') || 0;

        // تحديث عدد الزيارات وعرضه
        document.getElementById('visitCount').innerText = 'عدد الزيارات: ' + count;

        // إضافة حدث عند النقر على الرابط
        document.getElementById('visitLink').addEventListener('click', function() {
            count++;
            localStorage.setItem('visitCount', count);
            document.getElementById('visitCount').innerText = 'عدد الزيارات: ' + count;
        });
  
