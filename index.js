<!DOCTYPE html>
<html>

<head>
    <title>boostrap3</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="index.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body class="container">
    <div class="row n ">
        <div class="col-md-3">
            <img src='https://res.cloudinary.com/dzi9epk3s/image/upload/v1648364950/allly_n2nsud.jpg' width='150px' height='150px'>
        </div>
        <div class="col-md-3 n1">
            <h1>
                ALLLY
            </h1>
        </div>
        <div class="col-md-6 n2 text-center">
            <span class="fa fa-home" style="font-size:40px;color:red"></span>
            <span class='fa fa-google-plus' style="font-size:40px;color:orange"></span>
            <span class='fa fa-facebook-square' style="font-size:40px;color:blue"></span>
            <span class='fa fa-linkedin-square' style="font-size:40px;color:#0073b2"></span>
            <span class='fa fa-twitter-square' style="font-size:40px;color:#00abdc"></span>
            <span class='fa fa-youtube-square' style="font-size:40px;color:#d9031f"></span>
            <span class='fa fa-instagram hicon5' style="font-size:40px;color:#A338A6"></span>
            <span class='fa fa-pinterest-square hicon6' style="font-size:40px;color:red"></span>
            <span class='fa fa-tumblr-square hicon7' style="font-size:40px;color:#36465D"></span>
        </div>
    </div>
    <div class="row na">
        <div class="col-md-2 n3">
            <b>MESSAGE BOARD</b>
        </div>
        <div class="col-md-10 n4 ">
            <marquee><b>Welcome to my website | Make your friends
                    | Discuss the thoughts | Anlayse the views
                    | Create solutoion to the problems | Live and spread happiness
                </b></marquee>
        </div>
    </div>
    <div class="iltnav">
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a href="" class="navbar-brand">HOME</a>
                    <button class="navbar-toggle" data-toggle="collapse" data-target="#menu"><i class="glyphicon glyphicon-th-list text-danger"></i></button>
                </div>
                <div id="menu" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">

                        <li><a href="">ABOUT</a></li>
                        <li><a href="">CLUBS</a></li>
                        <li><a href="">ACTIVITIES</a></li>
                        <li><a href="">TIMINGS</a></li>
                        <li><a href="">SIGN-IN</a></li>
                        <li><a href="">CONTACT US</a></li>
                        <li><a href="">HELP</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div>
        <div class="carousel slide" id="myimages" data-ride="carousel">
            <ol class="carousel-indicators">
                <li class="active" data-target="#myimages" data-slide-to="0"></li>
                <li data-target="#myimages" data-slide-to="1"></li>
                <li data-target="#myimages" data-slide-to="2"></li>
                <li data-target="#myimages" data-slide-to="3"></li>
                <li data-target="#myimages" data-slide-to="4"></li>
                <li data-target="#myimages" data-slide-to="5"></li>
                <li data-target="#myimages" data-slide-to="6"></li>
            </ol>
            <div class="carousel-inner">
                <div class="item active">
                    <img src="https://res.cloudinary.com/dzi9epk3s/image/upload/v1648270499/virtualconference_igzayg.jpg" style="width:100%;height:350px">
                </div>
                <div class="item">
                    <img src="https://res.cloudinary.com/dzi9epk3s/image/upload/v1648271372/roundtable_ui3zwh.jpg" style="width:100%;height:350px">
                </div>
                <div class="item">
                    <img src="https://res.cloudinary.com/dzi9epk3s/image/upload/v1648357115/friends_vjotab.jpg" style="width:100%;height:350px">
                </div>
                <div class="item">
                    <img src="https://res.cloudinary.com/dzi9epk3s/image/upload/v1648357107/soicalmedia_wutf38.jpg" style="width:100%;height:350px">
                </div>
            </div>
        </div>
        <a href="#myimages" data-slide="prev" class="left carousel-control"><i class="glyphicon glyphicon-chevron-left"></i></a>
        <a href="#myimages" data-slide="next" class="right carousel-control"><i class="glyphicon glyphicon-chevron-right"></i></a>
    </div>
    </div>


    <div class="row">
        <div class="col-md-4">
            <div class='list'>
                <h3>LIVE CHAT</h3>
                <li>VIDEO CONFERENCES</li>
                <li>INTERACTIVE DISCUSSIONS</li>
                <li>MELODICIOUS MUSIC</li>
                <li>CREATE SOLUTIONS</li>
                <li>LIVE HAPPILY</li>
            </div>

            <div class="list-2" style="background-color:white">


                <input class="form-control" type='text' placeholder='Enter Name'>
                <i class="fa fa-envelope text-center"></i>
                <input type='email' placeholder='Enter Mail'>
                <i class="fa fa-phone text-center"></i>
                <input type='number' placeholder='Enter PhoneNumber'>
                <i class="fa fa-book text-center"></i>
                <select placeholder='Select diary product'>
                    <option>select club</option>
                    <option>ARTS</option>
                    <option>SPORTS</option>
                    <option>TECHNOLOGY</option>
                    <option>BUSINESS</option>
                    <option>TRAVEL</option </select>
                <i class="fa fa-paper-plane text-center"></i>
                <input type='text' placeholder='Enter Training'></li>
                <li><i class="fa fa-building text-center"></i>
                    <input type='text' placeholder='Enter City/Area'>
                </li>
                <li><textarea></textarea>
                </li>
                <li><input type='checkbox'>i am a Human
                    <div class="button">
                        <button class="btn btn-danger">Submit</button>
                    </div>
                </li>
            </div>
            <div class="list-3 " style="background-color:white;">
                <h1></h1>
                <ul class="nav nav-pills">
                    <li class="active"><a href="images/webdesign1.png">ui</a></li>
                    <li><a href="">LOGIN AND CONNECT</a></li>
                    <li><a href="">DICUSS THE SOLUTINS</< /a>
                    </li>
                    <li><a href="">LIVE HAPPILY</a></li>
                </ul><br>
                <img src="images/webdesign1.png" width="250px" height="150">
                <p>Discuss thoughts+ Analyse ideas+ Create solutions= Happiness
                </p>
                <p><b>Duration :</b> 24*7 available | <b>live chat</b> </p>
                <h1>video conference</h1>
            </div>
        </div>










        <div class="col-md-8">
            <div class="row" style="background-color:white">
                <div class="col-md-6">
                    <div style="padding:25px;text-align:justify;border:2px solid #eaeaea;border-radius:10px">
                        <div class="hover">
                            <h1>ART</h1>
                            <img src='https://res.cloudinary.com/dzi9epk3s/image/upload/v1648361513/art_ozyf9h.jpg' width='250' height='250'>
                            <p>
                                Each morning we see the sunshine outside and relax while some draw it to feel relaxed. Thus, you see that art is everywhere and anywhere if we look closely. In other words, everything in life is artwork.It expresses emotions or expression of life. It
                                is one such creation that enables interpretation of any kind. Culture plays an important role in the development of any nation. It represents a set of shared attitudes, values, goals and practices. Culture and creativity
                                manifest themselves in almost all economic, social and other activities
                            </p>
                        </div>
                    </div>
                    <div style="padding:25px;text-align:justify;border:2px solid #eaeaea;border-radius:10px">
                        <div class="hover">
                            <h1>TECHNOLOGY</h1>
                            <img src='https://res.cloudinary.com/dzi9epk3s/image/upload/v1648361547/technology_fcaurp.png' width='250' height='250'>
                            <p>
                                Technology has reduced the effort and time and increased the efficiency of the production requirements in every field. It has made our lives easy, comfortable, healthy, and enjoyable. It has brought a revolution in transport and communication. The advancement
                                of technology, along with science, has helped us to become self-reliant in all spheres of life. With the innovation of a particular technology, it becomes part of society and integral to human lives after a point in time.
                                “Technology is best when it brings people together.” Various innovation and development took place in the field of technology which has made a significant impact on our lives in different ways.
                            </p>
                        </div>
                    </div>
                    <div style="padding:43px;text-align:justify;border:2px solid #eaeaea;;border-radius:10px">
                        <div class="hover">
                            <h1>TRAVEL</h1>
                            <img src="https://res.cloudinary.com/dzi9epk3s/image/upload/v1648361080/travel_zweix1.jpg" width='250' height='250'>
                            <P>
                                Jobs fill your pocket but adventures fill your soul.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div style="padding:25px;text-align:justify;border:2px solid #eaeaea;border-radius:10px">
                        <div class="hover">
                            <h1>SPORTS</h1>
                            <img src='https://res.cloudinary.com/dzi9epk3s/image/upload/v1648361535/sports_vliwdw.jpg' width='250' height='250'>
                            <p>
                                “A Champion is afraid of losing everyone else is afraid of winning” Sports builds several characteristics and personality traits in a person. Sports instils a sense of confidence and enthusiasm in an individual’s attitude. Sports makes one competitive,
                                however in a healthy manner. It also helps us to deal with failure and enables us to work hard in achieving our respective goals.
                            </p>
                        </div>
                    </div>
                    <div style="padding:16px;text-align:justify;border:2px solid #eaeaea;border-radius:10px">
                        <div class="hover">
                            <h1>Business</h1>
                            <img src='https://res.cloudinary.com/dzi9epk3s/image/upload/v1648361522/buisness_zh41oq.jpg' width='250' height='250'>
                            <p>
                                The term business refers to an organization or enterprising entity engaged in commercial, industrial, or professional activities. Businesses can be for-profit entities or they can be non-profit organizations that operate to fulfill a charitable mission
                                or further a social cause. Businesses range in scale from sole proprietorships to international corporations and can range in size from small to large. The term business can also be used to define the efforts and activities
                                of individuals to produce and sell goods and services for profit.
                            </p>
                        </div>
                    </div>
                    <div class="footer" style="background-color:#042e6f;color:White;margin-top:100px;">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-4 mb-3">
                                <h1>ABOUT US</h1>
                                <p>
                                    The main theme of our website is to connect the people of various types all over the world and share their views. It is the way you build you build your self and your thoughts which are used to build the other people. Find the one.....with whom you can
                                    share ideas,passion, incidents of your life, connect each other..
                                </p>
                                <h1>We Accept</h1>
                            </div>
                            <div class="col-md-3">
                                <h1>CONTACT US</h1>
                                <p>road no.7, anurag university, jodimetla, hyderabad, telangana, 500072
                                </p>
                                <p>WWW.ALLLY.COM
                                </p>
                                <P>+91-7794821774 +91-8309931690
                                </P>
                            </div>
                            <div class="col-md-3">
                                <h1>Live chat</h1>
                                <P>Vidoe cnference</p>
                                <P>Interactive discussions</p>
                                <P>Melodicious music</p>
                                <P>Create solutions</p>
                                <P>Live happily</p>
                            </div>
                            <div class="col-md-3">
                                <h1>FOLLOW US</h1>
                                <li>FACEBOOK</li>
                                <li>LINKEDIN</li>
                                <li>TWITTER</li>
                                <li>GOOGLE+</li>
                                <li>INSTAGRAM</li>
                                <li>PINTREST</li>
                                <li>YOUTUBE</li><br><br>
                            </div>

                        </div>
                        <div class="container-fluid">

                            <div style="background-color:#c0bfc5;color:black;text-align:left;">
                                WANT THE LATEST NEWS? JOIN OUR MAILING LIST!
                                <input type='email' placeholder='Your Email Here'>
                                <button class="btn btn-danger">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>

                    <script src="index.js"></script>
</body>

</html>
 465 changes: 465 additions & 0 deletions465  
index.js
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,465 @@
< !DOCTYPE html >
    <
    html >

    <
    head >
    <
    title > boostrap3 < /title> <
    link rel = "stylesheet"
href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" >
    <
    link rel = "stylesheet"
href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" >
    <
    script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" > < /script> <
    script src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js" > < /script> <
    link rel = "stylesheet"
href = "index.css" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    /head>

    <
    body class = "container" >
    <
    div class = "row n " >
    <
    div class = "col-md-3" >
    <
    img src = 'https://res.cloudinary.com/dzi9epk3s/image/upload/v1648364950/allly_n2nsud.jpg'
width = '150px'
height = '150px' >
    <
    /div> <
    div class = "col-md-3 n1" >
    <
    h1 >
    ALLLY <
    /h1> <
    /div> <
    div class = "col-md-6 n2 text-center" >
    <
    span class = "fa fa-home"
style = "font-size:40px;color:red" > < /span> <
    span class = 'fa fa-google-plus'
style = "font-size:40px;color:orange" > < /span> <
    span class = 'fa fa-facebook-square'
style = "font-size:40px;color:blue" > < /span> <
    span class = 'fa fa-linkedin-square'
style = "font-size:40px;color:#0073b2" > < /span> <
    span class = 'fa fa-twitter-square'
style = "font-size:40px;color:#00abdc" > < /span> <
    span class = 'fa fa-youtube-square'
style = "font-size:40px;color:#d9031f" > < /span> <
    span class = 'fa fa-instagram hicon5'
style = "font-size:40px;color:#A338A6" > < /span> <
    span class = 'fa fa-pinterest-square hicon6'
style = "font-size:40px;color:red" > < /span> <
    span class = 'fa fa-tumblr-square hicon7'
style = "font-size:40px;color:#36465D" > < /span> <
    /div> <
    /div> <
    div class = "row na" >
    <
    div class = "col-md-2 n3" >
    <
    b > MESSAGE BOARD < /b> <
    /div> <
    div class = "col-md-10 n4 " >
    <
    marquee > < b > Welcome to my website | Make your friends |
    Discuss the thoughts | Anlayse the views |
    Create solutoion to the problems | Live and spread happiness <
    /b></marquee >
    <
    /div> <
    /div> <
    div class = "iltnav" >
    <
    nav class = "navbar navbar-inverse" >
    <
    div class = "container-fluid" >
    <
    div class = "navbar-header" >
    <
    a href = ""
class = "navbar-brand" > HOME < /a> <
    button class = "navbar-toggle"
data - toggle = "collapse"
data - target = "#menu" > < i class = "glyphicon glyphicon-th-list text-danger" > < /i></button >
    <
    /div> <
    div id = "menu"
class = "collapse navbar-collapse" >
    <
    ul class = "nav navbar-nav" >

    <
    li > < a href = "" > ABOUT < /a></li >
    <
    li > < a href = "" > CLUBS < /a></li >
    <
    li > < a href = "" > ACTIVITIES < /a></li >
    <
    li > < a href = "" > TIMINGS < /a></li >
    <
    li > < a href = "" > SIGN - IN < /a></li >
    <
    li > < a href = "" > CONTACT US < /a></li >
    <
    li > < a href = "" > HELP < /a></li >
    <
    /ul> <
    /div> <
    /div> <
    /nav> <
    /div> <
    div >
    <
    div class = "carousel slide"
id = "myimages"
data - ride = "carousel" >
    <
    ol class = "carousel-indicators" >
    <
    li class = "active"
data - target = "#myimages"
data - slide - to = "0" > < /li> <
    li data - target = "#myimages"
data - slide - to = "1" > < /li> <
    li data - target = "#myimages"
data - slide - to = "2" > < /li> <
    li data - target = "#myimages"
data - slide - to = "3" > < /li> <
    li data - target = "#myimages"
data - slide - to = "4" > < /li> <
    li data - target = "#myimages"
data - slide - to = "5" > < /li> <
    li data - target = "#myimages"
data - slide - to = "6" > < /li> <
    /ol> <
    div class = "carousel-inner" >
    <
    div class = "item active" >
    <
    img src = "https://res.cloudinary.com/dzi9epk3s/image/upload/v1648270499/virtualconference_igzayg.jpg"
style = "width:100%;height:350px" >
    <
    /div> <
    div class = "item" >
    <
    img src = "https://res.cloudinary.com/dzi9epk3s/image/upload/v1648271372/roundtable_ui3zwh.jpg"
style = "width:100%;height:350px" >
    <
    /div> <
    div class = "item" >
    <
    img src = "https://res.cloudinary.com/dzi9epk3s/image/upload/v1648357115/friends_vjotab.jpg"
style = "width:100%;height:350px" >
    <
    /div> <
    div class = "item" >
    <
    img src = "https://res.cloudinary.com/dzi9epk3s/image/upload/v1648357107/soicalmedia_wutf38.jpg"
style = "width:100%;height:350px" >
    <
    /div> <
    /div> <
    /div> <
    a href = "#myimages"
data - slide = "prev"
class = "left carousel-control" > < i class = "glyphicon glyphicon-chevron-left" > < /i></a >
    <
    a href = "#myimages"
data - slide = "next"
class = "right carousel-control" > < i class = "glyphicon glyphicon-chevron-right" > < /i></a >
    <
    /div> <
    /div>


    <
    div class = "row" >
    <
    div class = "col-md-4" >
    <
    div class = 'list' >
    <
    h3 > LIVE CHAT < /h3> <
    li > VIDEO CONFERENCES < /li> <
    li > INTERACTIVE DISCUSSIONS < /li> <
    li > MELODICIOUS MUSIC < /li> <
    li > CREATE SOLUTIONS < /li> <
    li > LIVE HAPPILY < /li> <
    /div>

    <
    div class = "list-2"
style = "background-color:white" >


    <
    input class = "form-control"
type = 'text'
placeholder = 'Enter Name' >
    <
    i class = "fa fa-envelope text-center" > < /i> <
    input type = 'email'
placeholder = 'Enter Mail' >
    <
    i class = "fa fa-phone text-center" > < /i> <
    input type = 'number'
placeholder = 'Enter PhoneNumber' >
    <
    i class = "fa fa-book text-center" > < /i> <
    select placeholder = 'Select diary product' >
    <
    option > select club < /option> <
    option > ARTS < /option> <
    option > SPORTS < /option> <
    option > TECHNOLOGY < /option> <
    option > BUSINESS < /option> <
    option > TRAVEL < /option </select >
    <
    i class = "fa fa-paper-plane text-center" > < /i> <
    input type = 'text'
placeholder = 'Enter Training' > < /li> <
    li > < i class = "fa fa-building text-center" > < /i> <
    input type = 'text'
placeholder = 'Enter City/Area' >
    <
    /li> <
    li > < textarea > < /textarea> <
    /li> <
    li > < input type = 'checkbox' > i am a Human <
    div class = "button" >
    <
    button class = "btn btn-danger" > Submit < /button> <
    /div> <
    /li> <
    /div> <
    div class = "list-3 "
style = "background-color:white;" >
    <
    h1 > < /h1> <
    ul class = "nav nav-pills" >
    <
    li class = "active" > < a href = "images/webdesign1.png" > ui < /a></li >
    <
    li > < a href = "" > LOGIN AND CONNECT < /a></li >
    <
    li > < a href = "" > DICUSS THE SOLUTINS < /< /a >
    <
    /li> <
    li > < a href = "" > LIVE HAPPILY < /a></li >
    <
    /ul><br> <
    img src = "images/webdesign1.png"
width = "250px"
height = "150" >
    <
    p > Discuss thoughts + Analyse ideas + Create solutions = Happiness <
    /p> <
    p > < b > Duration: < /b> 24*7 available | <b>live chat</b > < /p> <
    h1 > video conference < /h1> <
    /div> <
    /div>










    <
    div class = "col-md-8" >
    <
    div class = "row"
style = "background-color:white" >
    <
    div class = "col-md-6" >
    <
    div style = "padding:25px;text-align:justify;border:2px solid #eaeaea;border-radius:10px" >
    <
    div class = "hover" >
    <
    h1 > ART < /h1> <
    img src = 'https://res.cloudinary.com/dzi9epk3s/image/upload/v1648361513/art_ozyf9h.jpg'
width = '250'
height = '250' >
    <
    p >
    Each morning we see the sunshine outside and relax
while some draw it to feel relaxed.Thus, you see that art is everywhere
and anywhere
if we look closely.In other words, everything in life is artwork.It expresses emotions or expression of life.
It is one such creation that enables interpretation of any kind.
Culture plays an important role in the development of any nation.
It represents a set of shared attitudes, values, goals and practices.
Culture and creativity manifest themselves in almost all economic, social and other activities <
    /p> <
    /div> <
    /div> <
    div style = "padding:25px;text-align:justify;border:2px solid #eaeaea;border-radius:10px" >
    <
    div class = "hover" >
    <
    h1 > TECHNOLOGY < /h1> <
    img src = 'https://res.cloudinary.com/dzi9epk3s/image/upload/v1648361547/technology_fcaurp.png'
width = '250'
height = '250' >
    <
    p >
    Technology has reduced the effort and time and increased the efficiency of the production
requirements in every field.It has made our lives easy, comfortable, healthy, and enjoyable.
It has brought a revolution in transport and communication.The advancement of technology, along
with science, has helped us to become self - reliant in all spheres of life.With the innovation of a
particular technology, it becomes part of society and integral to human lives after a point in time.
â€ œTechnology is best when it brings people together.â€
Various innovation and development took place in the field of technology which has made a significant impact
on our lives in different ways. <
    /p> <
    /div> <
    /div> <
    div style = "padding:43px;text-align:justify;border:2px solid #eaeaea;;border-radius:10px" >
    <
    div class = "hover" >
    <
    h1 > TRAVEL < /h1> <
    img src = "https://res.cloudinary.com/dzi9epk3s/image/upload/v1648361080/travel_zweix1.jpg"
width = '250'
height = '250' >
    <
    P >
    Jobs fill your pocket but adventures fill your soul. <
    /p> <
    /div> <
    /div> <
    /div> <
    div class = "col-md-6" >
    <
    div style = "padding:25px;text-align:justify;border:2px solid #eaeaea;border-radius:10px" >
    <
    div class = "hover" >
    <
    h1 > SPORTS < /h1> <
    img src = 'https://res.cloudinary.com/dzi9epk3s/image/upload/v1648361535/sports_vliwdw.jpg'
width = '250'
height = '250' >
    <
    p >
    â€ œA Champion is afraid of losing everyone
else is afraid of winningâ€
Sports builds several characteristics and personality traits in a person.
Sports instils a sense of confidence and enthusiasm in an individualâ€™ s attitude.
Sports makes one competitive, however in a healthy manner.It also helps us to deal with
failure and enables us to work hard in achieving our respective goals. <
    /p> <
    /div> <
    /div> <
    div style = "padding:16px;text-align:justify;border:2px solid #eaeaea;border-radius:10px" >
    <
    div class = "hover" >
    <
    h1 > Business < /h1> <
    img src = 'https://res.cloudinary.com/dzi9epk3s/image/upload/v1648361522/buisness_zh41oq.jpg'
width = '250'
height = '250' >
    <
    p >
    The term business refers to an organization or enterprising entity engaged in commercial,
    industrial, or professional activities.Businesses can be
for -profit entities or they can
be non - profit organizations that operate to fulfill a charitable mission or further a social
cause.Businesses range in scale from sole proprietorships to international corporations and
can range in size from small to large.
The term business can also be used to define the efforts and activities of individuals to produce
and sell goods and services
for profit. <
    /p> <
    /div> <
    /div> <
    div class = "footer"
style = "background-color:#042e6f;color:White;margin-top:100px;" >
    <
    div class = "row" >
    <
    div class = "col-12 col-md-6 col-lg-4 mb-3" >
    <
    h1 > ABOUT US < /h1> <
    p >
    The main theme of our website is to connect the people of various
types all over the world and share their views.
It is the way you build you build your self and your thoughts which
are used to build the other people.
Find the one.....with whom you can share ideas, passion, incidents of your life, connect each other.. <
    /p> <
    h1 > We Accept < /h1> <
    /div> <
    div class = "col-md-3" >
    <
    h1 > CONTACT US < /h1> <
    p > road no .7,
    anurag university,
    jodimetla,
    hyderabad,
    telangana,
    500072 <
    /p> <
    p > WWW.ALLLY.COM <
    /p> <
    P > +91 - 7794821774 +
    91 - 8309931690 <
    /P> <
    /div> <
    div class = "col-md-3" >
    <
    h1 > Live chat < /h1> <
    P > Vidoe cnference < /p> <
    P > Interactive discussions < /p> <
    P > Melodicious music < /p> <
    P > Create solutions < /p> <
    P > Live happily < /p> <
    /div> <
    div class = "col-md-3" >
    <
    h1 > FOLLOW US < /h1> <
    li > FACEBOOK < /li> <
    li > LINKEDIN < /li> <
    li > TWITTER < /li> <
    li > GOOGLE + < /li> <
    li > INSTAGRAM < /li> <
    li > PINTREST < /li> <
    li > YOUTUBE < /li><br><br> <
    /div>

    <
    /div> <
    div class = "container-fluid" >

    <
    div style = "background-color:#c0bfc5;color:black;text-align:left;" >
    WANT THE LATEST NEWS ? JOIN OUR MAILING LIST!
    <
    input type = 'email'
placeholder = 'Your Email Here' >
    <
    button class = "btn btn-danger" >
    Submit <
    /button> <
    /div> <
    /div> <
    /div>

    <
    script src = "index.js" > < /script> <
    /body>

    <
    /html>