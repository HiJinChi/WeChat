window.onload = function(){
   var item = document.getElementsByClassName('item')
   var btn_x = document.getElementById('btn_x')
   var btn_y = document.getElementById('btn_y')
   var what_f = document.getElementsByClassName('what_f')
   var right = document.getElementsByClassName('right')
   var index = 0



   //按钮 隐藏触发
 for(var i=0;i<right.length;i++){
   right[i].onmousemove = function(){
     btn_x.style.display = 'block';
     btn_y.style.display = 'block';
   }
   right[i].onmouseout = function(){
    btn_x.style.display = 'none';
    btn_y.style.display = 'none';
   }

   
 }






   //右按钮  加下面圆点随着图片变化
  btn_y.onclick = function(){
           for(var i=0;i<item.length;i++){
              
            item[i].className = 'item'
            item[i].style.display = 'none'
           }
          for(var i = 0;i<what_f.length;i++){
            what_f[i].className = 'what_f'
          }
           
           index++;
        if(index >item.length-1){
           index = 0;
        }
         
          item[index].className = 'item active'
          item[index].style.display = 'block'
          what_f[index].className = 'what_f what_g'
          
    
          
       
           }
//左按钮 加上圆点随着图片变化
           btn_x.onclick = function(){
            for(var i=0;i<item.length;i++){
               
             item[i].className = 'item'
             item[i].style.display = 'none'
            }
            for(var i = 0;i<what_f.length;i++){
              what_f[i].className = 'what_f'
            }
            
            index--;
         if(index <0){
            index = item.length-1;
         }
          
           item[index].className = 'item active'
           item[index].style.display = 'block'
           what_f[index].className = 'what_f what_g'       
            }
 
//点击圆点 图片随着圆点变化  跟左右按钮的原理一样，只不过因为圆点的数量很多，设点击事件之前，需要遍历出来而已
for(var i = 0;i<what_f.length;i++){
  what_f[i].onclick = function(){
    for(var i=0;i<item.length;i++){
              
      item[i].className = 'item'
      item[i].style.display = 'none'
     }
    for(var i = 0;i<what_f.length;i++){
      what_f[i].className = 'what_f'
    }
     
     index++;
  if(index >item.length-1){
     index = 0;
  }
   
    item[index].className = 'item active'
    item[index].style.display = 'block'
    what_f[index].className = 'what_f what_g'
    
  }
  

  }
//定时器
var h = setInterval(function(){
  for(var i=0;i<item.length;i++){
              
    item[i].className = 'item'
    item[i].style.display = 'none'
   }
  for(var i = 0;i<what_f.length;i++){
    what_f[i].className = 'what_f'
  }
   
   index++;
if(index >item.length-1){
   index = 0;
}
 
  item[index].className = 'item active'
  item[index].style.display = 'block'
  what_f[index].className = 'what_f what_g'
},3000)
 

}
   
   
