// create a questions object with properties: title, chocies, answers
var questions = [
    {
        title: "In Java, a method is a container that holds classes " ,
        // choices are held in arrays 
        choices: ["True ", "False "] ,
        answer: "False "
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "<h1>Text</h1> is the correct way of making a header text in HTML." ,
        choices: ["True", "False"] ,
        answer: "True" ,
    },
    {
        title: "What does REST stand for " ,
        choices: ["Representational State Transfer","Representational State Text ","Resting Estate State Test ","Repo Establishsment State Transfer " ] ,
        answer: "Representational State Transfer" ,
    },
    {
        title: "What are the five elements that support media HTML5" ,
        choices: ["<audio> <video> <source> <embed> <track>","<audio> <vr> <src> <emmm> <trc>","<audiotory> <visual> <script> <transformstream> <etc>","<alert> <auditory> <video> <source> <embed>"],
        answer: "<audio> <video> <source> <embed> <track>" ,
    },
    {
        title: "What is SVG and why is it used?" ,
        choices: ["Scalable Vector Graphics, used to display vector-based graphics over the web.","Scalable Video Graphics, used to display videos of high quality","Scalable Vectoring Gif, used to display vector-based animated gifs","Scalable Vicious Girl, used to fend off ex-girlfriends snooping"],
        answer: "Scalable Vector Graphics, used to display vector-based graphics over the web." ,
    },
    {
        title: "What is the use of Canvas in HTML " ,
        choices: ["Canvas allows users to draw graphics on the go using Javascript. There are variety of methods for drawing paths, circles, boxes, images, and more.","Canvas is method allowing users to insert a logo or graphics","Canvas is used by developers to make wireframes for collaboration.","Canvas allows users to draw graphics using CSS."] ,
        answer: "Canvas allows users to draw graphics on the go using Javascript. There are variety of methods for drawing paths, circles, boxes, images, and more." ,
    },
    {
        title: "Explain what the difference is between cookies and local storage " ,
        choices: ["Cookies: data accessible both at client side and server side. The data is sent ot he serverside with every cookie request; Local Storage is only at the lcoal browser side data and server cannot use local storage until deliberately sent a requeset to thes erver via POST or GET."," Cookies are larger in size and capacity","Cookies does not have an expiration date and the data is permanetly stored without deletion. Local storage has an expiration date.","Cookies have an expiration date and the cookies gets deleted over time, while local browser data can only be removed by the server-side."],
        answer: "Cookies: data accessible both at client side and server side. The data is sent ot he serverside with every cookie request; Local Storage is only at the lcoal browser side data and server cannot use local storage until deliberately sent a requeset to thes erver via POST or GET." ,
    },
    {
        title: "How do you differentiate between ID and Class selector?" ,
        choices: ["An ID is only used to identify one single element in our HTML.","Class is used to for styling","They are the same","Class is more flexible and is often used for Javascript as an element selector"],
        answer: "An ID is only used to identify one single element in our HTML." ,
    },
    {
        title: "What is the difference bween undefined value and null?" ,
        choices: ["The undefined value is a primitive value used when a varaible has not been assigned a value. The null value is a primitive value that represents the null, empty, or non-existent reference.","Null is when a variable has been proven false.","Undefined Value is the marker of a global variable.","Null Object is undefined but undefined value cannot be null."] ,
        answer: "The undefined value is a primitive value used when a varaible has not been assigned a value. The null value is a primitive value that represents the null, empty, or non-existent reference." ,
    },
    {
        title: "What is the difference between HTML and XHTML?" ,
        choices: ["HTML are not case sensitive, allows overlapping and XHTML only allows lowercase tags does not allow overlapping text.","There is no difference.","Only HTMl supports multimedia, styling, and scripting.","XHTML is an older version of HTML5."],
        answer: "HTML are not case sensitive, allows overlapping and XHTML only allows lowercase tags does not allow overlapping text." ,
    },
    {
        title: "How do you differentiate adaptive and responsive designs?" ,
        choices: ["Adaptive design equires the creation of a different layout for each device the website will be accessed on; Resopnsive design can change its layout and appearance based on thes creen size of the device its accessed on.","There is no difference, they are just different names.","Responsive designs are created by web development and adaptive designs are only by ScrumMasters.","Adaptive designs are a part of the responsive design developmental process."],
        answer: "Adaptive design equires the creation of a different layout for each device the website will be accessed on; Resopnsive design can change its layout and appearance based on thes creen size of the device its accessed on." ,
    },
    {
        title: "What differentiates a span element and a div " ,
        choices: ["Div element is used for block-leel organization and styling of page elements, whereas a span element is used for inline orgnization and styling.","Div can be used to wrap a section. Span does not allow wrapping of words or sections.","Div can be used supports CSS, HTML and script use while span does not.","Div is more preferred and can be used to stylise text."],
        answer: "Div element is used for block-leel organization and styling of page elements, whereas a span element is used for inline orgnization and styling." ,
    },
]
// =========================== End of question object ==================================================