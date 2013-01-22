
           $(document).ready(function() {
             console.log('This would be the main JS file.');
                $('#doTest').click(function(){
                    var pattern=getPattern();
                    $('.test').each(function (index,data){
                       limpia(data);
                       if( test($(data).text()) ){
                           $(data).addClass('true');
                       }
                       else{
                           $(data).addClass('false');
                       }
                    });
                    
                    
                    
                });
                $('#addTest').click(function(){
                    var value=$('#testIn').val();
                    var test='<div class="test"><input type="button" class="close" value="x" onclick="eraseTest(this);"/>'+value+'</div>';
                    
                    $('#tests').append(test);
                });
 
                
                function limpia(data){
                    $(data).removeClass('true');
                    $(data).removeClass('false');
                }
            
                function getPattern(){
                    return $('#patternIn').val();
                }
        
            
                function test(value){
                    var regExp = new RegExp(getPattern(),"");

                    return ( regExp.test(value) );
                }
            });
            
            //how work liveHandler(event)?
            function eraseTest(elem){
                $(elem).parent().remove();
            }
