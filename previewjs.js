function his_togglepopup(){
    document.getElementById("popup1").classList.toggle("active");
}
// function copyHtml(){
   


//     var sourceDiv = document.getElementById("demo");

//     // Clone the source div including its content and styles
//     var clonedContent = sourceDiv.cloneNode(true);

//     // Clear the target div and append the cloned content
//     var targetDiv = document.getElementById("report");
//     targetDiv.innerHTML = ''; // Clear previous content
//     targetDiv.appendChild(clonedContent); // Append cloned content

//     // Remove the source div's id from the cloned element to avoid id conflicts
//     clonedContent.removeAttribute('id');
//     // Apply scaling to fit the content inside the target div
//     clonedContent.classList.add('scaled-content');

//     // Calculate the scaling factor based on the available space
//     var targetWidth = targetDiv.offsetWidth;
//     var targetHeight = targetDiv.offsetHeight;

//     var contentWidth = clonedContent.offsetWidth;
//     var contentHeight = clonedContent.offsetHeight;

//     // Calculate scaling factor to fit content within target div
//     var scaleWidth = targetWidth / contentWidth;
//     var scaleHeight = targetHeight / contentHeight;

//     // Use the smaller of the two scaling factors to ensure content fits within both dimensions
//     var scaleFactor = Math.min(scaleWidth, scaleHeight);

//     // Apply scaling
//     clonedContent.style.transform = "scale(" + scaleFactor + ")";
// }


// function copyHtml() {
//     var sourceDiv = document.getElementById("demo");

//     // Clone the source div including its content
//     var clonedContent = sourceDiv.cloneNode(true);

//     // Clear the target div and append the cloned content
//     var targetDiv = document.getElementById("report");
//     targetDiv.innerHTML = ''; // Clear previous content
//     targetDiv.appendChild(clonedContent); // Append cloned content

//     // Remove the source div's id from the cloned element to avoid conflicts
//     clonedContent.removeAttribute('id');

//     // No scaling needed, content will stay at exact A4 size
//     // Scrolling will be handled by the grid container
// }

// function copyHtml() {
//     var sourceDiv = document.getElementById("demo");

//     // Clone the source div including its content
//     var clonedContent = sourceDiv.cloneNode(true);

//     // Clear the target div and append the cloned content
//     var targetDiv = document.getElementById("report");
//     targetDiv.innerHTML = ''; // Clear previous content
//     targetDiv.appendChild(clonedContent); // Append cloned content

//     // Remove the source div's id from the cloned element to avoid conflicts
//     clonedContent.removeAttribute('id');

//     // Get the dimensions of the target container (grid)
//     var targetWidth = targetDiv.offsetWidth;
//     var targetHeight = targetDiv.offsetHeight;

//     // Get the dimensions of the A4-sized content
//     var contentWidth = sourceDiv.offsetWidth; // Get original width
//     var contentHeight = sourceDiv.offsetHeight; // Get original height

//     // Calculate the scaling factor to fit both dimensions (scale proportionally)
//     var scaleWidth = targetWidth / contentWidth;
//     var scaleHeight = targetHeight / contentHeight;

//     // Use the smaller scaling factor to maintain the aspect ratio
//     var scaleFactor = Math.min(scaleWidth, scaleHeight);

//     // Apply the scaling transformation
//     clonedContent.style.transform = "scale(" + scaleFactor + ")";
//     clonedContent.style.width = contentWidth + "px"; // Reset width for scaling
//     clonedContent.style.height = contentHeight + "px"; // Reset height for scaling

// //     // Center the transformed content
//     clonedContent.style.marginTop = (targetHeight - (contentHeight * scaleFactor)) / 2 + 'px';
//     clonedContent.style.marginLeft = (targetWidth - (contentWidth * scaleFactor)) / 2 + 'px';

       
// }

function copyHtml() {
    var sourceDiv = document.getElementById("demo");
    var wrapperDiv = document.querySelector(".report");

    // Clone the source div including its content
    var clonedContent = sourceDiv.cloneNode(true);

    // Clear the wrapper div and append the cloned content
    wrapperDiv.innerHTML = ''; // Clear previous content
    wrapperDiv.appendChild(clonedContent); // Append cloned content

    // Remove the source div's id from the cloned element to avoid conflicts
    clonedContent.removeAttribute('id');

    // Get the dimensions of the wrapper container
    var targetWidth = wrapperDiv.offsetWidth;
    var targetHeight = wrapperDiv.offsetHeight;

    // Get the dimensions of the A4-sized content
    var contentWidth = clonedContent.offsetWidth; // Get original width
    var contentHeight = clonedContent.offsetHeight; // Get original height

    // Check if the content exceeds the grid container's dimensions
    if (contentWidth > targetWidth || contentHeight > targetHeight) {
        // Calculate the scaling factor to fit both dimensions (scale proportionally)
        var scaleWidth = targetWidth / contentWidth;
        var scaleHeight = targetHeight / contentHeight;

        // Use the smaller scaling factor to maintain the aspect ratio
        var scaleFactor = Math.min(scaleWidth, scaleHeight);

        // Apply the scaling transformation
        clonedContent.style.transform = "scale(" + scaleFactor + ")";
        clonedContent.style.width = contentWidth + "px"; // Reset width for scaling
        clonedContent.style.height = contentHeight + "px"; // Reset height for scaling
    }

    // Center the scroll position in the wrapper
    wrapperDiv.scrollLeft = (wrapperDiv.scrollWidth - wrapperDiv.clientWidth) / 2;
    wrapperDiv.scrollTop = (wrapperDiv.scrollHeight - wrapperDiv.clientHeight) / 2;
}




function download_report(){
   var popup= document.getElementById("downloadpopup");
   document.getElementById("downloadpopup").classList.toggle("active");
   document.getElementById("downloadbutton").addEventListener("click", closePopup);
   document.getElementById("Nobutton").addEventListener("click", closePopup); 
}
function share_report(){
    var popup= document.getElementById("share");
    document.getElementById("sharepopup").classList.toggle("active");
    // document.getElementById("send").addEventListener("click", closePopupshare);
    var popup = document.getElementById("downloadpopup");
    popup.classList.remove("active");
 }
    
 
//  function closePopupshare() {
//     var popup = document.getElementById("sharepopup");
//     popup.classList.remove("active");
//  }



function closePopup() {
    var popup = document.getElementById("downloadpopup");
    popup.classList.remove("active");
 }

 const dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach(dropdown => {
    var select = dropdown.querySelector('.select');
    var caret = dropdown.querySelector('.caret');
    var menu = dropdown.querySelector('.menu');
    var options = dropdown.querySelectorAll('.menu li');
    var selected = dropdown.querySelector('.selected');
    var downloadButton = document.getElementById('downloadbutton');
    const canvas = document.getElementById('canvas');

    
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    function clearDownloadButtonListeners() {
        let newButton = downloadButton.cloneNode(true); 
        downloadButton.replaceWith(newButton); 
        downloadButton = document.getElementById('downloadbutton'); 
    }

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;

            
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            
            clearDownloadButtonListeners();
            downloadButton.disabled = false; 

            if (selected.innerText === 'pdf') {
                downloadButton.addEventListener('click', downloadPDF);
            } else if (selected.innerText === 'jpg') {
                downloadButton.addEventListener('click', downloadJPG);
            } else {
                downloadButton.addEventListener('click', downloadPNG);
            }

            
            options.forEach(option => {
                option.classList.remove('active');
                option.style.backgroundColor = '';
            });
            option.classList.add('active');
            option.style.backgroundColor = '#dc143cfa';
        });
    });

    
    // function downloadPDF() {
    //     const { jsPDF } = window.jspdf; // Import jsPDF

    //     // Capture the div with html2canvas
    //     html2canvas(document.querySelector("#demo")).then(canvas => {
    //         // Convert the canvas to an image (JPEG format)
    //         var imgData = canvas.toDataURL('image/jpeg');

    //         // Create jsPDF instance (Portrait, A4 page size)
    //         var pdf = new jsPDF('p', 'mm', 'a4');

    //         // Calculate width and height in mm (A4 size) to fit the canvas
    //         var imgWidth = 210; // A4 width in mm
    //         var imgHeight = canvas.height * imgWidth / canvas.width;

    //         // Add image to PDF
    //         pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);

    //         // Save the PDF with a filename
    //         pdf.save("report.pdf");
    //     });
    // }

    function downloadPDF() {
        const { jsPDF } = window.jspdf; // Import jsPDF
    
        // Capture the div with html2canvas
        html2canvas(document.querySelector("#demo")).then(canvas => {
            var imgData = canvas.toDataURL('image/jpeg', 1.0); // Convert canvas to image with full quality
    
            // Create jsPDF instance (Portrait, A4 page size)
            var pdf = new jsPDF('p', 'mm', 'a4');
    
            // Calculate width and height in mm (A4 size)
            var imgWidth = 210; // A4 width in mm
            var pageHeight = 297; // A4 height in mm
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
    
            var position = 0;
    
            // Add the first image to the PDF
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
    
            // Loop to add new pages if the content is taller than one page
            while (heightLeft > 0) {
                position = heightLeft - imgHeight; // Calculate the position for the new page
                pdf.addPage(); // Create new page
                pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
    
            // Save the PDF with a filename
            pdf.save("report.pdf");
        });
    }
    

    function downloadJPG() {
        const element = document.getElementById("report");

            // Use html2canvas to capture the div
            html2canvas(element).then((canvas) => {
                // Convert the canvas to JPEG
                canvas.toBlob((blob) => {
                    // Use FileSaver.js to save the blob directly without an anchor tag
                    saveAs(blob, 'report.jpeg'); // Specify the file name
                }, 'image/jpeg'); // Specify the image format
            });
    }
    

    
    

    
    function downloadPNG() {
        const element = document.getElementById("report");

            // Use html2canvas to capture the div
            html2canvas(element).then((canvas) => {
                // Convert the canvas to PNG
                canvas.toBlob((blob) => {
                    // Use FileSaver.js to save the blob directly without an anchor tag
                    saveAs(blob, 'report.png'); // Specify the file name
                }, 'image/png'); // Specify the image format
            });
    }
});





function sendEmail(){



emailjs.init("Yk8OYBKIymyInbLrw"); // Replace with your public key

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
    appId: "YOUR_FIREBASE_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

    document.getElementById('share_popup').addEventListener('send', function(event) {
        event.preventDefault();

        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        // Get recipient emails as an array
        const toEmails = document.getElementById('emailInput').value.split(',').map(email => email.trim());

        if (file) {
            const storageRef = firebase.storage().ref('attachments/' + file.name);

            storageRef.put(file).then(snapshot => {
                console.log('File uploaded successfully!');

                // Get the download URL
                storageRef.getDownloadURL().then(url => {
                    // Prepare email data for each recipient
                    toEmails.forEach(toEmail => {
                        const emailData = {
                            to_email: toEmail,
                            subject: document.getElementById('ssubjectInput').value,
                            message: document.getElementById('messageInput').value,
                            attachment_url: url // Include the file URL
                        };

                        // Send email
                        emailjs.send("service_teoqtow", "template_p3guues", emailData)
                            .then(function(response) {
                                console.log(`Email sent to ${toEmail} successfully!`, response.status, response.text);
                            }, function(error) {
                                console.error(`Failed to send email to ${toEmail}:`, error);
                            });
                    });
                });
            }).catch(error => {
                console.error('File upload failed:', error);
            });
        } else {
            console.error('No file selected.');
        }
    });



}










