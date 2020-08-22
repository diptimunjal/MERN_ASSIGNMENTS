window.addEventListener('load', bindEvents);

var turn='x';
 function bindEvents(){
  
    document.querySelector('#b1').addEventListener('click',mark);
    document.querySelector('#b2').addEventListener('click',mark);
    document.querySelector('#b3').addEventListener('click',mark);
    document.querySelector('#b4').addEventListener('click',mark);
    document.querySelector('#b5').addEventListener('click',mark);
    document.querySelector('#b6').addEventListener('click',mark);
    document.querySelector('#b7').addEventListener('click',mark);
    document.querySelector('#b8').addEventListener('click',mark);
    document.querySelector('#b9').addEventListener('click',mark);
}

function cleanup(){
        document.querySelector('#b1').value='';
        document.querySelector('#b2').value='';
        document.querySelector('#b3').value='';
        document.querySelector('#b4').value='';
        document.querySelector('#b5').value='';
        document.querySelector('#b6').value='';
        document.querySelector('#b7').value='';
        document.querySelector('#b8').value='';
        document.querySelector('#b9').value='';
}

function checkwin(turn)
{
if(document.querySelector('#b1').value==turn && document.querySelector('#b2').value==turn &&document.querySelector('#b3').value==turn )
return true;
if(document.querySelector('#b4').value==turn && document.querySelector('#b5').value==turn &&document.querySelector('#b6').value==turn )
return true;
if(document.querySelector('#b7').value==turn && document.querySelector('#b8').value==turn &&document.querySelector('#b9').value==turn )
return true;
if(document.querySelector('#b1').value==turn && document.querySelector('#b4').value==turn &&document.querySelector('#b7').value==turn )
return true;
if(document.querySelector('#b2').value==turn && document.querySelector('#b5').value==turn &&document.querySelector('#b8').value==turn )
return true;
if(document.querySelector('#b3').value==turn && document.querySelector('#b6').value==turn &&document.querySelector('#b9').value==turn )
return true;
if(document.querySelector('#b1').value==turn && document.querySelector('#b5').value==turn &&document.querySelector('#b9').value==turn )
return true;
if(document.querySelector('#b3').value==turn && document.querySelector('#b5').value==turn &&document.querySelector('#b7').value==turn )
return true;
return false;
}

function checkdraw()
{
    if(document.querySelector('#b1').value!='' && document.querySelector('#b2').value!='' && document.querySelector('#b3').value!='' && document.querySelector('#b4').value!='' && document.querySelector('#b5').value!='' && document.querySelector('#b6').value!='' && document.querySelector('#b7').value!='' &&
    document.querySelector('#b7').value!='' && document.querySelector('#b8').value!='' && document.querySelector('#b9').value!='')
    return true;
    else
    return false;
}
function mark()
{
    
    
    if(document.querySelector('#'+this.id).value=='')
     {
       document.querySelector('#'+this.id).value=turn;
        
         var p=checkwin(turn);
         if(p==true)
         {
             alert("Player "+ turn+ " wins!!");
             cleanup();
            
         }
         else
        {
            if(checkdraw()==true)
            {
                alert("Match Draw!!");
                cleanup();
            }
            else
            {
                if(turn=='x')
                turn='o';
                else 
                turn='x';
            }
        }
    }

    else {
         alert("Box already Filled!!" );
          }
 
    

}