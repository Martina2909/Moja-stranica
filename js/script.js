date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
        document.getElementById("danasnji_datum").innerHTML = day + "." + month + "." + year + ".";


        
        var modal = document.getElementById('modal1');
        var img = document.getElementById('aquaPark');
        var modalImg = document.getElementById("slika1");
        img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = this.src;
        }
        
        
        var span = document.getElementsByClassName("zatvori")[0];
        
        span.onclick = function() { 
          modal.style.display = "none";
        }
      
        
        var modal = document.getElementById('modal2');
        var img = document.getElementById('bf');
        var modalImg = document.getElementById("slika2");
        img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = this.src;
        }
        
     