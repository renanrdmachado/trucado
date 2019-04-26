function jsCountdown(date,expired_message,el){

  var deadline = new Date(date).getTime(); 
  var x = setInterval(function() { 
  var now = new Date().getTime(); 
  var t = deadline - now; 
  var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
  var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
  var seconds = Math.floor((t % (1000 * 60)) / 1000); 
  jQuery(document).ready(function(){

    jQuery(el).find('.countdown-days').each(function(){
      if (days == 0) {jQuery(this).parent().hide();}
      jQuery(this).html(days);

    });

    jQuery(el).find('.countdown-hours').each(function(){
      if (days == 0 && hours == 0) {jQuery(this).parent().hide();}
      jQuery(this).html(hours);

    });

    jQuery(el).find('.countdown-minutes').each(function(){
      if (days == 0 && hours == 0 && minutes == 0) {jQuery(this).parent().hide();}
      jQuery(this).html(minutes);

    });

    jQuery(el).find('.countdown-seconds').each(function(){
      if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {jQuery(this).parent().hide();}
      jQuery(this).html(seconds);

    });

    jQuery(el).find('.countdown-hours').html(hours);
    jQuery(el).find('.countdown-minutes').html(minutes);
    jQuery(el).find('.countdown-seconds').html(seconds);
  });

  // days + "d "  
  // + hours + "h " + minutes + "m " + seconds + "s "; 
      if (t < 0) { 
          clearInterval(x); 
          jQuery(el).html("<span class='countdown-expired'>"+expired_message+"</span>"); 
      } 
  }, 1000); 

}
