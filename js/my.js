const itemDetails = [
    {
        head: 'Front-end development',
        image: 'path-to-front-end-image.jpg',
        description: "Front-end development: This is the visual side of web development, where you focus on user interface (UI) and user experience (UX). You'll work with languages like HTML, CSS, and JavaScript to build the structure, style, and interactivity of a website.",
    },
    {
        head: 'Back-end development',
        image: 'path-to-back-end-image.jpg',
        description: "Back-end development: This involves working on the server-side of web development. You'll handle databases, server logic, and server-side scripting using languages like Node.js, Python, or Ruby.",
    },
    {
        head: 'Full Stack development',
        image: 'path-to-full-stack-image.jpg',
        description: "Full Stack development: This encompasses both front-end and back-end development. A Full Stack developer is proficient in building the entire web application, from the user interface to the server-side logic.",
    },
    {
        head: 'Python Development',
        image: 'path-to-python-image.jpg',
        description: "Python Development: Python is a versatile programming language used for various applications, including web development. Python developers work on server-side scripting, data analysis, and more.",
    },
    {
        head: 'C Development',
        image: 'path-to-c-image.jpg',
        description: "C Development: C is a general-purpose programming language often used for system programming. C developers work on low-level programming, including operating systems and embedded systems.",
    },
    {
        head: 'C++ Development',
        image: 'path-to-cpp-image.jpg',
        description: "C++ Development: C++ is an extension of the C programming language with additional features. C++ developers use it for system/software development, game development, and more.",
    }
    // Add more items as needed
];


$(document).ready(function () {
    $('.item2').click(function () {
        var itemId = $(this).data('item-id');
        var itemDetails = getItemDetails(itemId);

        // Create and append a new details container
        var detailsContainer = $('<div class="item-details2">').html(itemDetails);
        $('#item-details-container2').html(detailsContainer);

        // Show the details container
        detailsContainer.show();
    });

    // Function to fetch item details (replace this with your data)
    function getItemDetails(itemId) {
        if (itemId === 1) {
            var firstItem=itemDetails[0];
            var details = `<img src='${firstItem.image}' alt='Image of Item ${itemId}'>`;
            details += `<h2>${firstItem.head}</h2>`;
            details += `<p>${firstItem.description}</p>`;
            details += `<span class="tags">Html</span>`
        } else if (itemId === 2) {
            details = "<img src='image2.jpg' alt='Image of Item 2'>";
            details +="<h1>Java Development</h1>"
            details += "<p>A Full Stack Developer is a professional who is proficient in both front-end and back-end development, meaning they have the skills to work on both the user interface and the server-side components of a web application. Here's an overview of what a Full Stack Developer does and the skills they typically possess. <br> <br>A Full Stack Developer is responsible for designing, building, and maintaining web applications from end to end. This includes working on both the client-facing aspects of the application (front end) and the server-side logic and databases (back end).</p>";
        }else if (itemId === 3) {
            details = "<img src='image2.jpg' alt='Image of Item 2'>";
            details +="<h1>Python Development</h1>"
            details += "<p>A Full Stack Developer is a professional who is proficient in both front-end and back-end development, meaning they have the skills to work on both the user interface and the server-side components of a web application. Here's an overview of what a Full Stack Developer does and the skills they typically possess. <br> <br>A Full Stack Developer is responsible for designing, building, and maintaining web applications from end to end. This includes working on both the client-facing aspects of the application (front end) and the server-side logic and databases (back end).</p>";
        }
        else if (itemId === 4) {
            details = "<img src='image2.jpg' alt='Image of Item 2'>";
            details +="<h1>C++ Development</h1>"
            details += "<p>A Full Stack Developer is a professional who is proficient in both front-end and back-end development, meaning they have the skills to work on both the user interface and the server-side components of a web application. Here's an overview of what a Full Stack Developer does and the skills they typically possess. <br> <br>A Full Stack Developer is responsible for designing, building, and maintaining web applications from end to end. This includes working on both the client-facing aspects of the application (front end) and the server-side logic and databases (back end).</p>";
        }
        else if (itemId === 5) {
            details = "<img src='image2.jpg' alt='Image of Item 2'>";
            details +="<h1>C Development</h1>"
            details += "<p>A Full Stack Developer is a professional who is proficient in both front-end and back-end development, meaning they have the skills to work on both the user interface and the server-side components of a web application. Here's an overview of what a Full Stack Developer does and the skills they typically possess. <br> <br>A Full Stack Developer is responsible for designing, building, and maintaining web applications from end to end. This includes working on both the client-facing aspects of the application (front end) and the server-side logic and databases (back end).</p>";
        }
        else if (itemId === 6) {
            details = "<img src='image2.jpg' alt='Image of Item 2'>";
            details +="<h1>SQL Development</h1>"
            details += "<p>A Full Stack Developer is a professional who is proficient in both front-end and back-end development, meaning they have the skills to work on both the user interface and the server-side components of a web application. Here's an overview of what a Full Stack Developer does and the skills they typically possess. <br> <br>A Full Stack Developer is responsible for designing, building, and maintaining web applications from end to end. This includes working on both the client-facing aspects of the application (front end) and the server-side logic and databases (back end).</p>";
        }
        else if (itemId === 7) {
            details = "<img src='image2.jpg' alt='Image of Item 2'>";
            details +="<h1>DataBase Development</h1>"
            details += "<p>A Full Stack Developer is a professional who is proficient in both front-end and back-end development, meaning they have the skills to work on both the user interface and the server-side components of a web application. Here's an overview of what a Full Stack Developer does and the skills they typically possess. <br> <br>A Full Stack Developer is responsible for designing, building, and maintaining web applications from end to end. This includes working on both the client-facing aspects of the application (front end) and the server-side logic and databases (back end).</p>";
        }
        // ... Add details for other items ...

        return details;
    }
});



    // Array to store information about each item



// Example usage
// var userInput = prompt('Enter a number (1-7) to get the corresponding day of the week:');
// var userNumber = parseInt(userInput);

// if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 7) {
//     var result = getDayOfWeek(userNumber);
//     console.log(`The day corresponding to ${userNumber} is ${result}.`);
// } else {
//     console.log('Invalid input. Please enter a number between 1 and 7.');
// }


// $(document).ready(function () {
//     $('.item').click(function () {
//         var itemId = $(this).data('item-id');
//         var itemDetails = getItemDetails(itemId);

//         // Create and append a new details container
//         var detailsContainer = $('<div class="item-details">').html(itemDetails);
//         $('#item-details-container').html(detailsContainer);

//         // Show the details container
//         detailsContainer.show();
//     });


//     // Function to fetch item details
//     function getItemDetails(itemId) {
//         var item = itemsData.find(item => item.id === itemId);

//         if (item) {
//             var details = `<img src='${item.image}' alt='Image of Item ${itemId}'>`;
//             details += `<h1>${item.title}</h1>`;
//             details += `<p>${item.description}</p>`;
//             return details;
//         }

//         return 'Item details not available';
//     }
// });



// $(document).ready(function () {
//     $('.item').click(function () {
//         var itemId = $(this).data('item-id');
//         var itemDetails = getItemDetails(itemId);

//         // Create popup window with image and text
//         var popupWindow = window.open("", "Item Details", "width=500,height=300");
//         popupWindow.document.write(itemDetails);
//         popupWindow.document.close();
//     });

//     // Function to fetch item details (replace this with your data)
//     function getItemDetails(itemId) {
//         var details = "";
//         if (itemId === 1) {
//             details = "<img src='image1.jpg' alt='Image of Item 1'>";
//             details += "<p>This is a detailed description of Item 1.</p>";
//         } else if (itemId === 2) {
//             details = "<img src='image2.jpg' alt='Image of Item 2'>";
//             details += "<p>This is a detailed description of Item 2.</p>";
//         }
//         // ... Add details for other items ...

//         return details;
//     }
// });




