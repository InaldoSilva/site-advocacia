$(document).ready(function() {

//Progress Bar

let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {
      color: "#fff",
      strokeWidth: 8,
      duration: 1700,
      from: { color: "#AAA" },
      to: { color: "#fff" },

      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);

        let value = Math.round(circle.value() * 2732);

        circle.setText(value);
      },
    });


    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
      color: "#fff",
      strokeWidth: 8,
      duration: 1500,
      from: { color: "#AAA" },
      to: { color: "#fff" },

      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);

        let value = Math.round(circle.value() * 2108);

        circle.setText(value);
      },
    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {
      color: "#fff",
      strokeWidth: 8,
      duration: 1000,
      from: { color: "#AAA" },
      to: { color: "#fff" },

      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);

        let value = Math.round(circle.value() * 35);

        circle.setText(value);
      },
    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
      color: "#fff",
      strokeWidth: 8,
      duration: 2000,
      from: { color: "#AAA" },
      to: { color: "#fff" },

      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);

        let value = Math.round(circle.value() * 1093);

        circle.setText(value);
      },
    });

    // iniciando o loader quando o usuário chega no elemento

    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;

        }

    });

    // Parallax
    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/adv-parallax.jpg'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});

    }, 250);

    // filtro do portfolio

    $('.filter-btn').on('click', function() {

      let type = $(this).attr('id');
      let boxes = $('.project-box');

      $('main-btn').removeClass('active');
      $(this).addClass('active');

      if(type == 'dsg-btn') {
        eachBoxes('dsg', boxes)
      } else if(type == 'dev-btn') {
        eachBoxes('dev', boxes);
      } else if(type == 'seo-btn') {
        eachBoxes('seo', boxes);
      } else if(type == 'all-btn') {
        eachBoxes('all', boxes);
      }

    });

    function eachBoxes(type, boxes) {

      if(type == 'all') {
        $(boxes).fadeIn();
      } else {
        $(boxes).each(function() {
          if(!$(this).hasClass(type)) {
            $(this).fadeOut('slow');
          } else {
            $(this).fadeIn();
          }
        });
      }
    }



});
