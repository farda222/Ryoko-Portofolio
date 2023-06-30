window.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.horizontal-scroll');
    const scrollContent = document.querySelector('.content');
  
    const contentWidth = scrollContent.offsetWidth;
    const containerWidth = scrollContainer.offsetWidth;
  
    function scroll() {
      if (scrollContainer.scrollLeft >= contentWidth - containerWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft++;
      }
    } 
  
    setInterval(scroll, 10);
  });