/*meanmenu css file here*/
a.meanmenu-reveal{display:none}
.mean-container .mean-bar {
    background: inherit;
    float: left;
    min-height: 0;
    position: relative;
    width: 100%;
    z-index: 1;
}
.mean-container a.meanmenu-reveal {
    color: #333;
    cursor: pointer;
    display: block;
    float: right;
    font-family: Arial,Helvetica,sans-serif;
    font-size: 1px;
    font-weight: 700;
    height: 22px;
    line-height: 22px;
    padding: 4px 5px;
    position: absolute;
    right: 0;
    text-decoration: none;
    top: -65px;
    width: 18px;
}
.mean-container a.meanmenu-reveal span{display:block;background:#333;height:2px;margin-top:3px}
.mean-container .mean-nav{float:left;width:100%;background:transparent}
.mean-container .mean-nav ul{padding:0;margin:0;width:100%;list-style-type:none}
.mean-container .mean-nav ul li {
    background: #f8f8f8 none repeat scroll 0 0;
    float: left;
    position: relative;
    width: 100%;
    border-top: 1px solid#ddd;
}
.mean-container .mean-nav ul li a {
    background: #f8f8f8 none repeat scroll 0 0;
    color: #666666;
    display: block;
    float: left;
    font-size: 12px;
    margin: 0;
    padding: 1em 5%;
    text-align: left;
    text-decoration: none;
    text-transform: uppercase;
    width: 90%;
    font-weight: bold;
}
.mobile-menu-area {

}
.mean-container .mean-nav ul li li a {
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    opacity: 0.75;
    padding: 1em 10%;
    text-shadow: none !important;
    visibility: visible;
    width: 80%;
    font-weight: normal;
    text-transform: capitalize;
    color: #444;
}
.mean-container .mean-nav ul li.mean-last a{border-bottom:0;margin-bottom:0}
.mean-container .mean-nav ul li li li a{width:70%;padding:1em 15%}
.mean-container .mean-nav ul li li li li a{width:60%;padding:1em 20%}
.mean-container .mean-nav ul li li li li li a{width:50%;padding:1em 25%}
.mean-container .mean-nav ul li a:hover {
    background: #f8f8f8 none repeat scroll 0 0;
    color: #f3a395;
}
.mean-container .mean-nav ul li a.mean-expand{
    width:26px;
    height: 15px;
    margin-top: 1px;
    padding: 6px 12px !important;
    text-align:center;
    position:absolute;
    right:0;top:0;
    z-index:2;
    font-weight:700;
    background:rgba(255,255,255,.1);
    border:0!important;
    background: #F8F8F8;
}
.mean-container .mean-nav ul li a.mean-expand:hover {
    background: #f8f8f8;
}
.mean-container .mean-push{float:left;width:100%;padding:0;margin:0;clear:both}
.mean-nav .wrapper{width:100%;padding:0;margin:0}
.mean-container .mean-bar,.mean-container .mean-bar *{-webkit-box-sizing:content-box;box-sizing:content-box}
.mean-remove{display:none!important}
.mean-container .mean-bar::after {
    color: #242424;;
    content: "MENU";
    font-size: 16px;
    font-weight: 500;
    left: 5%;
    position: absolute;
    top: 13px;
}
/*meanmenu css file end*/