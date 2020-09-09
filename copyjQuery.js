$(function(){
    $('#info_get').click(function(){
        $('.modal_box').show();
        $('#cha').show();
        $('#login_bg').show();
    }) 

   $('.centre_list').click(function(){
       var index = $(this).attr('data-index');
       $(this).css('backgroundColor','#00ACE9').siblings('li').css('backgroundColor','white');
       $('.tu').eq(index).show().siblings('li').hide();
       $('.er').slideToggle(300);
       $('#mm').hide();
       $('.pp').hide();
   })

   var h = setInterval(function(){
        $('#info_sb').hide();
   },3000)

   $('#shui').click(function(){
       $('#mm').show();
       $('.tu').hide();
       if($('.er').is(':hidden')){
		$('.er').slideDown(300);
		}else{
		$('.er').slideToggle(300);;
		}
   })

  $('.er').click(function(){
      //this当前的元素变成蓝色，siblings（"li)表示当前元素的其余全部li也就是他的兄弟元素变白色
      $(this).css('backgroundColor','#00ACE9').siblings('li').css('backgroundColor','white');
      $('.centre_list').css('backgroundColor','white');
      var index = $(this).attr('da-index');   
      $('#mm').hide();     
      $('.pp').eq(index).show().siblings('li').hide();
  })

//点微信出现登录界面
$('#wx_c').click(function(){
    $('#skis').show()
    $('#modalbox').hide()
})

//点QQ出现登录界面
$('#qq_c').click(function(){
    $('#modalbox').hide()
    $('#skis_two').show()
})

//点×全部取消
$('#cha').click(function(){
    $('#cha').hide()
    $('#modalbox').hide()
    $('#skis').hide()
    $('#login_bg').hide();
    $('#skis_two').hide()
    $('.skip_three').hide()
})

//QQ二维码移入手机图案显示
$('#omgz').mousemove(function(){
    $('#omg').show()
})

//QQ二维码移出手机图案隐藏
$('#omgz').mouseout(function(){
    $('#omg').hide()
})

//QQ切换
$('#qq_enroll_q').click(function(){
     $('#skis_two').show()  
     $('#skis').hide()
 })

//微信切换
$('#vv').click(function(){
  $('#skis').show()
  $('#skis_two').hide() 
})

//点QQ的账号登录
 $('#nu').click(function(){  
     $('.skip_three').show()
     $('#skis_two').hide()
 })
 
 $('#s_s').click(function(){
    $('#skis').show()
    $('.skip_three').hide()
 })

})