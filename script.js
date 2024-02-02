document.addEventListener("DOMContentLoaded", function() {
    var mainMenu = document.getElementById("mainMenu");
    var submenu = document.querySelector(".submenu");
    var submenuList = document.getElementById("submenuList");
    var mainContent = document.getElementById("mainContent");

    mainMenu.addEventListener("click", function(event) {
        
        submenuList.innerHTML = '';

        if (event.target.tagName === 'A') {
            
            var mainMenuItem = event.target.textContent;

            switch (mainMenuItem) {
                case 'Βιογραφία':
                    createSubmenu(['Ιστορία του Jeff Buckley', 'Βραβεία και Κληρονομιά']);
                    break;
                case 'Φωτογραφίες':
                    createSubmenu(['Jeff', 'Live']);
                    break;
                case 'Δισκογραφία':
                    createSubmenu(['Άλμπουμς', 'Live Άλμπουμς','Εξώφυλλα Άλμπουμς']);
                    break;
                case 'Σύνδεσμοι':
                    createSubmenu(['Βιντεοκλίπ', 'Συναυλίες']);
                    break;
                case 'Διαχείριση':
                    createSubmenu(['Σύνδεση', 'Αποσύνδεση','Διαχείριση Έργων','Διαχείριση Συνδέσμων']);
                    break;
                default:
                    break;
            }
            submenu.style.display = 'block';
        }
    });

    
    submenuList.addEventListener("click", function(event) {
        if (event.target.tagName === 'A') {
            var submenuItem = event.target.textContent;
            updateMainContent(submenuItem);
        }
    });

    function createSubmenu(choices) {
        choices.forEach(function(choice) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.href = "#";
            a.textContent = choice;
            li.appendChild(a);
            submenuList.appendChild(li);
        });
    }

    function updateMainContent(submenuItem) {
        mainContent.innerHTML = '';
        switch (submenuItem) {
            case 'Ιστορία του Jeff Buckley':
                fetch('jeff_bio/jeff_history.txt') 
                .then(response => response.text()) 
                .then(data => { 
                    var textContainer = document.createElement('div');
                    textContainer.classList.add('text-container'); 
                    var title = document.createElement('h2'); 
                    title.textContent = submenuItem; 
                    var textContent = document.createElement('p'); 
                    textContent.textContent = data; 
                    textContainer.appendChild(title); 
                    textContainer.appendChild(textContent); 
                    mainContent.innerHTML = ''; 
                    mainContent.appendChild(textContainer); 
                })
                .catch(error => console.error('Error fetching data:', error));
                break;

            case 'Βραβεία και Κληρονομιά':
                fetch('jeff_bio/jeff_legacy.txt') 
                .then(response => response.text()) 
                .then(data => { 
                    var textContainer = document.createElement('div'); 
                    textContainer.classList.add('text-container'); 
                    var title = document.createElement('h2'); 
                    title.textContent = submenuItem; 
                    var textContent = document.createElement('p'); 
                    textContent.textContent = data; 
                    textContainer.appendChild(title); 
                    textContainer.appendChild(textContent); 
                    mainContent.innerHTML = '';
                    mainContent.appendChild(textContainer); 
                })
                .catch(error => console.error('Error fetching data:', error)); 
                break;
            case 'Jeff':
                mainContent.classList.add('jeff-photos');
                var jeffPhotos = ['jeff1.jpg', 'jeff2.jpg', 'jeff3.jpg']; 
                jeffPhotos.forEach(function(photo) {
                    var img = document.createElement('img');
                    img.src = 'jeff_photos/' + photo; 
                    img.alt = 'Jeff Buckley';
                    mainContent.appendChild(img);
                });
                break;
            case 'Live':
                mainContent.classList.add('jeff-photos');
                var jeffPhotos = ['jefflive1.jpg', 'jefflive2.jpg', 'jefflive3.jpg']; 
                jeffPhotos.forEach(function(photo) {
                    var img = document.createElement('img');
                    img.src = 'jeff_photos/' + photo; 
                    img.alt = 'Jeff Buckley';
                    mainContent.appendChild(img);
                });
                break;
            case 'Εξώφυλλα Άλμπουμς':
               mainContent.classList.add('jeff-photos');
               var jeffPhotos = ['album1.jpg', 'album2.jpg', 'album3.jpg', 'album4.jpg', 'album5.jpg', 'album6.jpg', 'album7.jpg']; 
               jeffPhotos.forEach(function(photo) {
                   var img = document.createElement('img');
                   img.src = 'album_photos/' + photo; 
                   img.alt = 'Jeff Buckley';
                   mainContent.appendChild(img);
               });
                break;
            case 'Άλμπουμς':
                fetch('jeff_bio/jeff_alb.txt') 
                .then(response => response.text()) 
                .then(data => { 
                    var textContainer = document.createElement('div'); 
                    textContainer.classList.add('text-container'); 
                    var title = document.createElement('h2'); 
                    title.textContent = submenuItem; 
                    var textContent = document.createElement('p');
                    textContent.textContent = data; 
                    textContainer.appendChild(title); 
                    textContainer.appendChild(textContent); 
                    mainContent.innerHTML = ''; 
                    mainContent.appendChild(textContainer);
                })
                .catch(error => console.error('Error fetching data:', error)); 
                break;
            case 'Live Άλμπουμς':
                fetch('jeff_bio/jeff_livealb.txt') 
                .then(response => response.text()) 
                .then(data => { 
                    var textContainer = document.createElement('div'); 
                    textContainer.classList.add('text-container'); 
                    var title = document.createElement('h2'); 
                    title.textContent = submenuItem; 
                    var textContent = document.createElement('p'); 
                    textContent.textContent = data;
                    textContainer.appendChild(title); 
                    textContainer.appendChild(textContent);
                    mainContent.innerHTML = ''; 
                    mainContent.appendChild(textContainer);
                })
                .catch(error => console.error('Error fetching data:', error));
                break;
            case 'Βιντεοκλίπ':
                    mainContent.innerHTML = `
                    <h2 class="centered-title">${submenuItem}</h2>
                        <ul class="centered-links">
                                <li><a href="https://www.youtube.com/watch?v=fdXQucDOed8">Jeff Buckley - Lover, You Should've Come Over</a></li>
                                <li><a href="https://www.youtube.com/watch?v=A3adFWKE9JE">Jeff Buckley - Grace</a></li>
                                <li><a href="https://www.youtube.com/watch?v=3MMXjunSx80">Jeff Buckley - Last Goodbye</a></li>
                                <li><a href="https://www.youtube.com/watch?v=y8AWFf7EAc4">Jeff Buckley - Hallelujah</a></li>
                                <li><a href="https://www.youtube.com/watch?v=HO0svGjVEP8">Jeff Buckley - Forget Her</a></li>
                        </ul>
                    `;
                    break;
            case 'Συναυλίες':
                mainContent.innerHTML = `
                <h2 class="centered-title">${submenuItem}</h2>
                        <ul class="centered-links">
                                <li><a href="https://www.youtube.com/watch?v=lN897piJh-k">Jeff Buckley Paris</a></li>
                                <li><a href="https://www.youtube.com/watch?v=vLHcHWDvgfQ">Jeff Buckley Chicago</a></li>
                                <li><a href="https://www.youtube.com/watch?v=aHqfMvrmPE8">Jeff Buckley Frankfurt </a></li>
                                <li><a href="https://www.youtube.com/watch?v=HZ_2ZrI3b3s">Jeff Buckley Chicago</a></li>
                                <li><a href="https://www.youtube.com/watch?v=ik3hPy6oYK0">Jeff Buckley Chicago</a></li>
                        </ul>
                `;
                break;
            case 'Σύνδεση':
                    mainContent.innerHTML = `
                        <h2>${submenuItem}</h2>
                        <form id="loginForm">
                            <label for="username">Username:</label>
                            <input type="text" id="username" name="username" required><br>
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required><br>
                            <input type="submit" value="Login">
                        </form>
                    `;
                    document.getElementById("loginForm").addEventListener("submit", function(event) {
                        event.preventDefault(); 
                        var username = document.getElementById("username").value;
                        var password = document.getElementById("password").value;
                        if (username === "admin" && password === "password") {
                            alert("Καλώς ορίσατε Διαχειριστή");
                        } else {
                            alert("Καλώς ορίσατε.");
                        }
                    });
                    break;
            case 'Αποσύνδεση':
                alert("Έγινε αποσύνδεση.");
                break;
            case 'Διαχείριση Έργων':
                mainContent.innerHTML = `
                    <h2>${submenuItem}</h2>
                `;
                break;
            case 'Διαχείριση Συνδέσμων':
                mainContent.innerHTML = `
                    <h2>${submenuItem}</h2>
                `;
                break;
            default:
                mainContent.innerHTML = `<h2>Main Content for ${submenuItem}</h2>`;
                break;
        }
    }
});
