let display = document.getElementById('display');
 let navLinks = document.querySelectorAll('header  nav a');


        window.onscroll = () =>{
            forEach(sec =>{
                let top= window.scrollY              
                let offset = sec.offsetTop;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if(top  >= offset && top <offset + height){
                    navLinks.forEach(links =>{
                        links.classList.remove('active')
                        document.querySelector('header  nav a [href*=' + +']').classList.add
                        ('active')

                    })

                }

            })
        }

