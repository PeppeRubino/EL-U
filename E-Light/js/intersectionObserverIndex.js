
/*Intersecting Observer -- INDEX.html*/


    
    
    
    
    
  var callback = function(items) {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add('show');
        }  else {
            item.target.classList.remove('show');
        }
    });
};

const observer = new IntersectionObserver(callback, { threshold:0.6});

var hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));