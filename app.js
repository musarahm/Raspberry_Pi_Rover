var xmlhttp;
        xmlhttp=new XMLHttpRequest();
        
        function forward()
        {
            xmlhttp.open("GET","cgi-bin/forward.cgi",true);
            xmlhttp.send();
        }
        function left()
        {
            xmlhttp.open("GET","cgi-bin/left.cgi",true);
            xmlhttp.send();
        }
        function right()
        {
            xmlhttp.open("GET","cgi-bin/right.cgi",true);
            xmlhttp.send();
        }
        function reverse()
        {
            xmlhttp.open("GET","cgi-bin/reverse.cgi",true);
            xmlhttp.send();
        }
        function stop(event)
        {
            xmlhttp.open("GET","cgi-bin/stop.cgi",true);
            xmlhttp.send();
        }
        function lighton()
        {
            xmlhttp.open("GET","cgi-bin/lighton.cgi",true);
            xmlhttp.send();
        }
        function lightoff()
        {
            xmlhttp.open("GET","cgi-bin/lightoff.cgi",true);
            xmlhttp.send();
        }
        function a145()
        {
            xmlhttp.open("GET","cgi-bin/145.cgi",true);
            xmlhttp.send();
        }
        function a115()
        {
            xmlhttp.open("GET","cgi-bin/115.cgi",true);
            xmlhttp.send();
        }
        function a85()
        {
            xmlhttp.open("GET","cgi-bin/85.cgi",true);
            xmlhttp.send();
        }
        function a60()
        {
            xmlhttp.open("GET","cgi-bin/60.cgi",true);
            xmlhttp.send();
        }
        function a50()
        {
            xmlhttp.open("GET","cgi-bin/50.cgi",true);
            xmlhttp.send();
        }
        function leftpan()
        {
            xmlhttp.open("GET","cgi-bin/leftpan.cgi",true);
            xmlhttp.send();
        }
        function centerpan()
        {
            xmlhttp.open("GET","cgi-bin/centerpan.cgi",true);
            xmlhttp.send();
        }
        function rightpan()
        {
            xmlhttp.open("GET","cgi-bin/rightpan.cgi",true);
            xmlhttp.send();
        }