window.onload = function(){
    var info = document.getElementById('info_get')
    var modalbox = document.getElementById('modalbox')
    var cha = document.getElementById('cha')
    var bg = document.getElementById('login_bg')

  
   
 
    
    //登录
    info.onclick = function(){
        modalbox.style.display = 'block'
        cha.style.display = 'block'
        bg.style.display = 'block'
     
    }
   

          //3秒出现，隐藏
          var sb= document.getElementById('info_sb')
           var h = setInterval(function(){
               sb.style.display = 'none'
           },3000)
  
           



           
//大列表处理 
//点击列表，当前变色，其余不变，对应的右边信息出现
var centre_list = document.getElementsByClassName('centre_list')
var tu = document.getElementsByClassName('tu')
var er = document.getElementsByClassName('er')
for(var i=0;i<centre_list.length;i++){
    centre_list[i].onclick = function(){
        //点击大列表，小列表隐藏
        for(var i=0;i<er.length;i++){
            er[i].style.display  ='none'
         }
         for(var i=0;i<pp.length;i++){
            pp[i].style.display ='none'
            pp[index].style.display ='block'
        }
         //大列表变色
        for(var i=0;i<centre_list.length;i++){
            centre_list[i].style.backgroundColor = 'white'
            this.style.backgroundColor = '#00ACE9'
        }
        //右边对应的显示
        var index = this.getAttribute('data-index')
        for(var i=0;i<tu.length;i++){
            tu[i].style.display = 'none'
            tu[index].style.display = 'block'
        }
       
    }
   
       
}
//小列表处理
//点击手机版微信，出现隐藏的列表，和对应的右边信息
var shui = document.getElementById('shui')

shui.onclick = function(){
   for(var i=0;i<er.length;i++){
      if(er[i].style.display =='block'){
          er[i].style.display ='none'
      }else {
          er[i].style.display ='block'
         
      }
     
   }
}
//点小列表，对应的小列表变色
var pp = document.getElementsByClassName('pp')
for(var i=0;i<er.length;i++){
    er[i].onclick = function(){
        //小列表变色
      for(var i=0;i<er.length;i++){
        er[i].style.backgroundColor = 'white'
        this.style.backgroundColor ='#00ACE9'        
      }
      //大列表无色
      for(var i=0;i<centre_list.length;i++){
        centre_list[i].style.backgroundColor = 'white'      
    }
    //小列表对应的右边 对应的显示，其余隐藏
    var index = this.getAttribute('da-index')
    for(var i=0;i<pp.length;i++){
        pp[i].style.display ='none'
        pp[index].style.display ='block'
    }
    //大列表右边隐藏
    for(var i=0;i<tu.length;i++){
        tu[i].style.display = 'none'
        
    }
    }
}


//微信登陆

 var skip = document.getElementById('skis')
 var skis_two = document.getElementById('skis_two')
 var wx_c = document.getElementById('wx_c')
 wx_c.onclick = function(){
 skip.style.display = 'block'
 modalbox.style.display = 'none'
 skis_two.style.display ='none'

 }

//点× 微信登陆面消失 一个×控制四个页面
var cha = document.getElementById('cha')

var skis_three = document.getElementById('skis_three')
var skis_two = document.getElementById('skis_two')
cha.onclick = function(){
    cha.style.display = 'none'
    modalbox.style.display = 'none'
    skip.style.display = 'none'
    bg.style.display = 'none'
    skis_three.style.display = 'none'
    skis_two.style.display = 'none'
}



//QQ登陆
var qq_c = document.getElementById('qq_c')

qq_c.onclick = function(){
  skis_two.style.display = 'block'
  modalbox.style.display = 'none'
}




//鼠标移到qq二维码，出现和消失图片
var omg = document.getElementById('omg')
var omgz = document.getElementById('omgz')

omgz.onmousemove = function(){
    omg.style.display = 'block'
}
omgz.onmouseout = function(){
    omg.style.display  ='none'
}

//qq和微信来回切换
var skis_four = document.getElementById('skis_four')

var cut = document.getElementById('qq_enroll_q')
cut.onclick = function(){
    skis_two.style.display ='block'
    skip.style.display ='none'
 
  
    
   
}

var vv = document.getElementById('vv')
vv.onclick = function(){
    skis_two.style.display ='none'
    skip.style.display ='block'
    
}
//账号密码登录
var nu = document.getElementById('nu')
nu.onclick = function(){
    skis_three.style.display = 'block'
    skis_two.style.display = 'none'
}

//在QQ账号密码登录页面，切换微信页面

var s_s = document.getElementById('s_s')
s_s.onclick = function(){
    skis_three.style.display = 'none'
    skip.style.display ='block'
    
}


}

