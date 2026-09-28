document.addEventListener('DOMContentLoaded', () => { 

      const pages = document.querySelectorAll('.page'); 

      const book = document.getElementById('book'); 

      const scene = document.getElementById('scene'); 


      pages.forEach((page, index) => { 

        page.style.zIndex = pages.length - index; 

      }); 

 

     

      pages.forEach((page, index) => { 

        page.addEventListener('click', (e) => { 


          page.style.pointerEvents = 'none'; 

          setTimeout(() => page.style.pointerEvents = 'auto', 1200); 

 

          if (page.classList.contains('flipped')) { 

            

            page.classList.remove('flipped'); 


            setTimeout(() => { 

              page.style.zIndex = pages.length - index; 

            }, 600);  

 

          } else { 

          

            page.classList.add('flipped'); 

             

            setTimeout(() => { 

              page.style.zIndex = index + 1; 

            }, 600); 

          } 

        }); 

      }); 



      scene.addEventListener('mousemove', (e) => { 

        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;  

        const yAxis = (window.innerHeight / 2 - e.pageY) / 50; 

        book.style.transform = `rotateX(${10 + yAxis}deg) rotateY(${xAxis - 5}deg)`; 

      }); 

 

      scene.addEventListener('mouseleave', () => { 

        book.style.transform = `rotateX(10deg) rotateY(-5deg)`; 

      }); 

    }); 