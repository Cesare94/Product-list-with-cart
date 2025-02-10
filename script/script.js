/* document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const img = document.querySelector('.waffle img');
    const handle = document.querySelector('.handle')

    btn.onclick = ()=> {
        img.style.border = "2px solid hsl(14, 86%, 42%)";
        btn.style.backgroundColor = "hsla(0, 76.40%, 48.20%, 0.82)";
        handle.style.display = 'flex';
        btn.style.display = 'none';
    }

    
    var currentIndex = 0;
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const span = document.querySelector('.handle span');

    minus.addEventListener('click', ()=> {
        if(currentIndex >= 0) {
            span.innerHTML = currentIndex--
        }
        
    })

    plus.addEventListener('click', ()=> {
        span.innerHTML = currentIndex++
    })

    const p = document.querySelector('.aside p');

    

}) */


/*     document.addEventListener('DOMContentLoaded', function() {
        const data = [
            {
               "image": {
                    "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
                    "mobile": "./assets/images/image-waffle-mobile.jpg",
                    "tablet": "./assets/images/image-waffle-tablet.jpg",
                    "desktop": "./assets/images/image-waffle-desktop.jpg"
               },
               "name": "Waffle with Berries",
               "category": "Waffle",
               "price": 6.50
            },
            {
                "image": {
                    "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
                    "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
                    "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
                    "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
                },
                "name": "Vanilla Bean Crème Brûlée",
                "category": "Crème Brûlée",
                "price": 7.00
             },
             {
                "image": {
                    "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
                    "mobile": "./assets/images/image-macaron-mobile.jpg",
                    "tablet": "./assets/images/image-macaron-tablet.jpg",
                    "desktop": "./assets/images/image-macaron-desktop.jpg"
                },
                "name": "Macaron Mix of Five",
                "category": "Macaron",
                "price": 8.00
             },
             {
                "image": {
                    "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
                    "mobile": "./assets/images/image-tiramisu-mobile.jpg",
                    "tablet": "./assets/images/image-tiramisu-tablet.jpg",
                    "desktop": "./assets/images/image-tiramisu-desktop.jpg"
                },
                "name": "Classic Tiramisu",
                "category": "Tiramisu",
                "price": 5.50
             },
             {
                "image": {
                    "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
                    "mobile": "./assets/images/image-baklava-mobile.jpg",
                    "tablet": "./assets/images/image-baklava-tablet.jpg",
                    "desktop": "./assets/images/image-baklava-desktop.jpg"
                },
                "name": "Pistachio Baklava",
                "category": "Baklava",
                "price": 4.00
             },
             {
                "image": {
                    "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
                    "mobile": "./assets/images/image-meringue-mobile.jpg",
                    "tablet": "./assets/images/image-meringue-tablet.jpg",
                    "desktop": "./assets/images/image-meringue-desktop.jpg"
                },
                "name": "Lemon Meringue Pie",
                "category": "Pie",
                "price": 5.00
             },
             {
                "image": {
                    "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
                    "mobile": "./assets/images/image-cake-mobile.jpg",
                    "tablet": "./assets/images/image-cake-tablet.jpg",
                    "desktop": "./assets/images/image-cake-desktop.jpg"
                },
                "name": "Red Velvet Cake",
                "category": "Cake",
                "price": 4.50
             },
             {
                "image": {
                    "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
                    "mobile": "./assets/images/image-brownie-mobile.jpg",
                    "tablet": "./assets/images/image-brownie-tablet.jpg",
                    "desktop": "./assets/images/image-brownie-desktop.jpg"
                },
                "name": "Salted Caramel Brownie",
                "category": "Brownie",
                "price": 4.50
             },
             {
                "image": {
                    "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
                    "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
                    "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
                    "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
                },
                "name": "Vanilla Panna Cotta",
                "category": "Panna Cotta",
                "price": 6.50
             }
        ];
    
        // Seleziono l'elemento dell'aside in cui trascrivere i dessert
        const asideParagraph = document.querySelector('.aside p');
        // Seleziono tutte le div dei dessert (assumendo che ogni dessert sia un div figlio di <main>)
        const dessertDivs = document.querySelectorAll('main > div');
    
        dessertDivs.forEach((dessertDiv, index) => {
            // Seleziono gli elementi interni al dessert
            const btn = dessertDiv.querySelector('button'); // bottone "Add to Cart" (id=btn)
            const handle = dessertDiv.querySelector('.handle');
            const img = dessertDiv.querySelector('img');
            const minus = handle.querySelector('#minus');
            const plus = handle.querySelector('#plus');
            const span = handle.querySelector('span');
            
            // Quantità iniziale (0 = non aggiunto, ma cliccando btn si imposta a 1)
            let quantity = 0;
            
            // Quando clicchi sul bottone "Add to Cart" (id=btn)
            btn.addEventListener('click', function() {
                // Stili per evidenziare il dessert selezionato
                img.style.border = "2px solid hsl(14, 86%, 42%)";
                btn.style.backgroundColor = "hsla(0, 76.40%, 48.20%, 0.82)";
                
                          
                 handle.style.display = 'flex';          
                  btn.style.display = 'none';                     
                       
                   quantity = 1;        
                   span.textContent = quantity;   
                 
                       updateAside(data[index].name, quantity);        });
                   
                     
                    plus.addEventListener('click', function() {       
                     quantity++;           span.textContent = quantity;     
                        updateAside(data[index].name, quantity);        });             
                
                      minus.addEventListener('click', function() {       
                     if (quantity > 1) {     
                            quantity--;           }
                  else {               
                        
                        quantity = 0;            }     
                       span.textContent = quantity;       
                     updateAside(data[index].name, quantity);  
                      });    });  
                    
                  function updateAside(dessertName, quantity) 
                 {       let asideContent = asideParagraph.innerHTML;      
                  
                       const regex = new RegExp(`(${dessertName}:\\s)(\\d+)`);     
                    if (quantity > 0) {            
     
                           if (regex.test(asideContent)) {        
                       asideContent = asideContent.replace(regex, `$1${quantity}`); 
                        } else {               
                               
                    asideContent += (asideContent ? '<br>' : '') + dessertName + ': ' + quantity;  
                           }        } else {          
              
                        asideContent = asideContent.replace(new RegExp(`${dessertName}:\\s\\d+<br>?`), '');
                         }      asideParagraph.innerHTML = asideContent;    }}); */

                         document.addEventListener('DOMContentLoaded', function() {
                            const data = [
                                {
                                    "image": {
                                        "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
                                        "mobile": "./assets/images/image-waffle-mobile.jpg",
                                        "tablet": "./assets/images/image-waffle-tablet.jpg",
                                        "desktop": "./assets/images/image-waffle-desktop.jpg"
                                    },
                                    "name": "Waffle with Berries",
                                    "category": "Waffle",
                                    "price": 6.50
                                },
                                {
                                    "image": {
                                        "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
                                        "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
                                        "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
                                        "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
                                    },
                                    "name": "Vanilla Bean Crème Brûlée",
                                    "category": "Crème Brûlée",
                                    "price": 7.00
                                },
                                {
                                    "image": {
                                        "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
                                        "mobile": "./assets/images/image-macaron-mobile.jpg",
                                        "tablet": "./assets/images/image-macaron-tablet.jpg",
                                        "desktop": "./assets/images/image-macaron-desktop.jpg"
                                    },
                                    "name": "Macaron Mix of Five",
                                    "category": "Macaron",
                                    "price": 8.00
                                },
                                {
                                    "image": {
                                        "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
                                        "mobile": "./assets/images/image-tiramisu-mobile.jpg",
                                        "tablet": "./assets/images/image-tiramisu-tablet.jpg",
                                        "desktop": "./assets/images/image-tiramisu-desktop.jpg"
                                    },
                                    "name": "Classic Tiramisu",
                                    "category": "Tiramisu",
                                    "price": 5.50
                                },
                                {
                                    "image": {
                                        "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
                                        "mobile": "./assets/images/image-baklava-mobile.jpg",
                                        "tablet": "./assets/images/image-baklava-tablet.jpg",
                                        "desktop": "./assets/images/image-baklava-desktop.jpg"
                                    },
                                    "name": "Pistachio Baklava",
                                    "category": "Baklava",
                                    "price": 4.00
                                },
                                {
                                    "image": {
                                        "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
                                        "mobile": "./assets/images/image-meringue-mobile.jpg",
                                        "tablet": "./assets/images/image-meringue-tablet.jpg",
                                        "desktop": "./assets/images/image-meringue-desktop.jpg"
                                    },
                                    "name": "Lemon Meringue Pie",
                                    "category": "Pie",
                                    "price": 5.00
                                },
                                {
                                    "image": {
                                        "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
                                        "mobile": "./assets/images/image-cake-mobile.jpg",
                                        "tablet": "./assets/images/image-cake-tablet.jpg",
                                        "desktop": "./assets/images/image-cake-desktop.jpg"
                                    },
                                    "name": "Red Velvet Cake",
                                    "category": "Cake",
                                    "price": 4.50
                                },
                                {
                                    "image": {
                                        "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
                                        "mobile": "./assets/images/image-brownie-mobile.jpg",
                                        "tablet": "./assets/images/image-brownie-tablet.jpg",
                                        "desktop": "./assets/images/image-brownie-desktop.jpg"
                                    },
                                    "name": "Salted Caramel Brownie",
                                    "category": "Brownie",
                                    "price": 4.50
                                },
                                {
                                    "image": {
                                        "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
                                        "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
                                        "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
                                        "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
                                    },
                                    "name": "Vanilla Panna Cotta",
                                    "category": "Panna Cotta",
                                    "price": 6.50
                                }
                            ];
                        
                            // Seleziono l'elemento del paragrafo nell'aside
                            const asideParagraph = document.querySelector('aside p');
                            // Seleziono tutte le div dei dessert (assumendo che ogni dessert sia un div figlio di <main>)
                            const dessertDivs = document.querySelectorAll('main > div');
                        
                            dessertDivs.forEach((dessertDiv, index) => {
                                // Seleziono gli elementi interni al dessert
                                const btn = dessertDiv.querySelector('button'); // bottone "Add to Cart"
                                const handle = dessertDiv.querySelector('.handle');
                                const img = dessertDiv.querySelector('img');
                                const minus = handle.querySelector('#minus');
                                const plus = handle.querySelector('#plus');
                                const span = handle.querySelector('span');
                        
                                // Quantità iniziale
                                let quantity = 0;
                        
                                // Quando clicchi sul bottone "Add to Cart"
                                btn.addEventListener('click', function() {
                                    // Stili per evidenziare il dessert selezionato
                                    img.style.border = "2px solid hsl(14, 86%, 42%)";
                                    btn.style.backgroundColor = "hsla(0, 76.40%, 48.20%, 0.82)";
                                    
                                    // Mostra la gestione della quantità
                                    handle.style.display = 'flex';
                                    btn.style.display = 'none';
                                    
                                    quantity = 1;
                                    span.textContent = quantity;
                                    
                                    // Aggiorna l'aside con il nome e la quantità
                                    updateAside(data[index].name, quantity);
                                });
                        
                                // Aumenta la quantità
                                plus.addEventListener('click', function() {
                                    quantity++;
                                    span.textContent = quantity;
                                    updateAside(data[index].name, quantity);
                                });
                        
                                // Diminuisce la quantità
                                minus.addEventListener('click', function() {
                                    if (quantity > 1) {
                                        quantity--;
                                    } else {
                                        quantity = 0;
                                    }
                                    span.textContent = quantity;
                                    updateAside(data[index].name, quantity);
                                });
                            });
                        
                            // Funzione per aggiornare il carrello (aside)
                            function updateAside(dessertName, quantity) {
                                let asideContent = asideParagraph.innerHTML;
                        
                                // Verifica se il dessert è già nel carrello
                                const regex = new RegExp(`(${dessertName}:\\s)(\\d+)`);
                                if (quantity > 0) {
                                    if (regex.test(asideContent)) {
                                        // Se esiste già, aggiorna la quantità
                                        asideContent = asideContent.replace(regex, `$1${quantity}`);
                                    } else {
                                        // Se non esiste, aggiungilo al carrello
                                        asideContent += (asideContent ? '<br>' : '') + dessertName + ': ' + quantity;
                                    }
                                } else {
                                    // Se la quantità è 0, rimuovi l'elemento dal carrello
                                    asideContent = asideContent.replace(new RegExp(`${dessertName}:\\s\\d+<br>?`), '');
                                }
                        
                                asideParagraph.innerHTML = asideContent;
                            }
                        });
                        