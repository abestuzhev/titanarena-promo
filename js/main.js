$(document).ready(function(){
  // JavaScript for label effects only
  $(window).load(function(){
    $(".c-input").val("");

    $(document).on('focusout', ".input-effect input", function(){
      if($(this).val() != ""){
        $(this).addClass("has-content");
      }else{
        $(this).removeClass("has-content");
      }
    })
  });

  // This demo uses jQuery UI Autocomplete
  // https://jqueryui.com/autocomplete

  // Cannot style datalist elements yet, so get
  // each option value and pass to jQuery UI Autocomplete
  $('input[data-list]').each(function () {
    var availableTags = $('#' + $(this).attr("data-list")).find('option').map(function () {
      return this.value;
    }).get();

    $(this).autocomplete({
      source: availableTags
    }).on('focus', function () {
      $(this).autocomplete('search', ' ');
    }).on('search', function () {
      if ($(this).val() === '') {
        $(this).autocomplete('search', ' ');
      }
    });
  });

  /*показ пароля*/
  $('.fa-eye-slash').on('click', function(){
      $(this).siblings('.c-input').attr('type', 'text');
  });


    /*плавный скролл*/
    $(".с-btn--reg, .c-btn-down").click(function(e){
        e.preventDefault();
        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").stop().animate({
            scrollTop: target.offset().top
        }, 300, function(){
            window.location.hash = hash;
        });

    });

    /*маска*/
    $('.c-input--date').mask('00.00.0000');
    $('.c-input--tel').mask('+7(000)000-00-00');
    $('.c-input--sum').mask('000000');


    /*добавление новой покупки на главной*/
    $(document).on('click','.c-btn-add', function(e){
        e.preventDefault();
        var countBox = $(".purchase-layout").length+1;
        console.log('Количество элементов' + countBox);
        var $accentBoxTemplate = $(
            '<div class="c-form-list purchase">' +
            '<div class="c-form-item">' +
            '<input type="search" id="brand-filter-' + countBox +'" placeholder="Найти отдел.." name="brand-filter-' + countBox +'" data-list="brands-list" autocomplete="off" required />' +
            '<label for="brand-filter-' + countBox +'" data-icon="&#128269;"></label>' +
            '<datalist id="brands-list">' +
            '<select>' +
            '<option value="Подио" />' +
            '<option value="Кари" />' +
            '<option value="Билайн" />' +
            '<option value="Westfalika" />' +
            '<option value="Мартиника" />' +
            '<option value="Клинок" />' +
            '<option value="Soho" />' +
            '<option value="Московский Ювелирный завод" />' +
            '<option value="Amati" />' +
            '<option value="Эконика" />' +
            '<option value="МТС" />' +
            '<option value="Кабинотье" />' +
            '<option value="ИЛЬ ДЕ БОТЕ" />' +
            '<option value="Coffe Man" />' +
            '<option value="Органик Маркет" />' +
            '<option value="Бюстье" />' +
            '<option value="Leo Ventoni" />' +
            '<option value="Связной" />' +
            '<option value="ГрандПри" />' +
            '<option value="Мультиварка" />' +
            '<option value="Zinger" />' +
            '<option value="Пандора" />' +
            '<option value="Аптека МК" />' +
            '<option value="Адамас" />' +
            '<option value="Mascotte" />' +
            '<option value="Четыре лапы" />' +
            '<option value="Harold" />' +
            '<option value="РивГош" />' +
            '<option value="G Store" />' +
            '<option value="Мегафон" />' +
            '<option value="H&M" />' +
            '<option value="Vitacci" />' +
            '</select>' +
            '</datalist>' +
            '</div>' +
            '<div class="c-form-item input-effect">' +
            '<input type="text" class="c-input effect-17" name="purchase-amount-' + countBox +'">' +
            '<label class="c-label">Сумма покупки</label>' +
            '</div>' +
            '<div class="c-form-item input-effect">' +
            '<input type="text" class="c-input effect-17" name="date-amount-' + countBox +'">' +
            '<label class="c-label">Дата</label>' +
            '</div>' +
            '</div>'
        );
        $('.purchase-layout').append($accentBoxTemplate).find('.purchase:last-child');

        $('.c-input--date').mask('00.00.0000');
        $('.c-input--tel').mask('+7(000)000-00-00');
        $('.c-input--sum').mask('000000');
    });
});
