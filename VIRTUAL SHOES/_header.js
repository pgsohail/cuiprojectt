let header = `
<nav class="floating">
    <ul class="header">
        <li><a href="index.html"><img id="s1" class="inv logo" src="FAV.png" alt="VIRTUAL SHOES TRY-ON ®" /></a></li>
        <li><a href="footwear.html" id="s2"> <span class="hide">3D SHOES TO TRY</span><span class="short">Shoes</span> </a></li>
        <li><a href="viewar.html" id="s4"> <span class="hide">TRY IN AR</span><span class="short">AR</span> </a></li>
        <li><a target="_blank" href=""> DOCUMENTATION</a></li>

        <li><a id="s5" href="docs.html"> 
            <span class="hide">ABOUT US</span><span class="short">Doc</span>
        </a></li>
        <li><a target="_blank" href="https://calendly.com/ssohailssadiq"> CONTACT </a></li>
        <li class="hide"><a href="login.html"> LOGIN/SIGNUP </a></li>
        <li class="hide"><a id="s6" href="ue.html"> BLOG </a></li>
    </ul>
    <style>
    /* CSS for animations */
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    /* Applying animations to the header elements */
    .header li {
        animation: fadeIn 1s ease-in-out;
    }

    /* Styling the login button */
    .header .hide a {
        display: inline-block;
        padding: 10px 20px;
        background-color: #333;
        color: #fff;
        border-radius: 5px;
        text-decoration: none;
        transition: background-color 0.3s ease-in-out;
    }

    /* Hover effect for the login button */
    .header .hide a:hover {
        background-color: #fff;
        color: #333;
    }
</style>
</nav>
`;

document.getElementById("header").innerHTML = header;
var pathArray = window.location.pathname.split('/');
let firstBox = 0
switch(pathArray[(pathArray.length-1)]) {
    case 'index.html':
        document.getElementById('s1').classList.add('selected');
        firstBox = 1
        break;
    case 'footwear.html':
        document.getElementById('s2').classList.add('selected');
        break;
    case 'apparel.html':
        document.getElementById('s3').classList.add('selected');
        break;
    case 'viewar.html':
        document.getElementById('s4').classList.add('selected');
        break;
    case 'docs.html':
        document.getElementById('s5').classList.add('selected');
        break;
    case 'ue.html':
        document.getElementById('s6').classList.add('selected');
        break;
}