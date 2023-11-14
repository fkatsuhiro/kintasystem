//画面幅によってデザインが変化するようにするコード
$(window).on("load resize", function(){
    const smWindowSize = 700;
    if (window.innerWidth <=  smWindowSize){
        $("#full-screen").removeClass("main-width").addClass("mobile-width");
        $("#form-screen").removeClass("form-width").addClass("form-width-mobile");
        $("#margin").removeClass("form-margin").addClass("form-margin-mobile");
        $("#back").removeClass("back").addClass("back-mobile");
    }else {
        $("#full-screen").removeClass("mobile-width").addClass("main-width");
        $("#form-screen").removeClass("form-width-mobile").addClass("form-width");
        $("#margin").removeClass("form-margin-mobile").addClass("form-margin");
        $("#back").removeClass("back-mobile").addClass("back");
   }
});



$(function() {
    //人数入力の際のアラートに関して
    $("#numberOfPeople").on("blur", function(){

        var numberOfPeople = $("#numberOfPeople").val();
      // バリデーション
        if (numberOfPeople === "" || isNaN(numberOfPeople) || numberOfPeople <= 0 || numberOfPeople % 1 !== 0) {
            $("#numberOfPeopleError").text("正の整数を入力してください。");
        } else {
            $("#numberOfPeopleError").text(""); // エラーメッセージをクリア
        // ここでフォームの送信や他の処理を行う
        }
    })

    $("#inputEmail").on("blur" , function(){
        var nullat = [];
        if(!$("#inputEmail").val().match("@")){/*メールアドレスに@が含まれていない場合*/
            nullat.push("適切なメールアドレスを入力してください");
            //リストに追加したテキストをhtmlに表示する
            $(".alertEmail").html(nullat.join("<br />"));
            $(".alertEmail").toggle(true);
        }
    })
    $("#inputPassword6").on("blur" , function(){
        var passlen = $("#inputPassword6").val();
        if(passlen.length > 20){/*パスワードが20文字を超える場合*/
            $(".disable").show();
            $(".disable").toggle(true);
        }
        else if(passlen.length < 8){/*パスワードが8文字未満の場合*/
            $(".disable").show();
            $(".disable").toggle(true);
        }
    })

    $("#sendsubmit").on("click" , function(){//空欄確認用コード
        s = 0;
        var firstnamealert = [];
        var firstname = $("#Firstname").val();
        if(firstname==null || firstname.length == 0){
            s = s + 1;
            firstnamealert.push("姓を入力してください");
            $(".firstname").html(firstnamealert.join("<br />"));//欄の下にアラートを表示するコード
            $(".firstname").toggle(true);
        }

        var secondnamealert = [];
        var secondname = $("#Lastname").val();
        if(secondname == null || secondname.length == 0){
            s = s + 1;
            secondnamealert.push("名を入力してください");
            $(".lastname").html(secondnamealert.join("<br />"));
            $(".lastname").toggle(true);
        }

        var timealert = [];
        var time = $("#start").val();
        if(time == null || time.length == 0){
            s = s + 1;
            timealert.push("時刻を選択してください");
            $(".alerttime").html(timealert.join("<br />"));
            $(".alerttime").toggle(true);
        }

        var emailalert = [];
        var email = $("#inputEmail").val();
        if(email == null || email.length == 0){
            s = s + 1;
            emailalert.push("メールアドレスを入力してください");
            $(".alertEmail").html(emailalert.join("<br />"));
            $(".alertEmail").toggle(true);
        }

        var passalert = [];
        var pass = $("#inputPassword6").val();
        if(pass == null || pass.length == 0){
            s = s + 1;
            passalert.push("パスワードを入力してください");
            $(".alertPass").html(passalert.join("<br />"));
            $(".alertPass").toggle(true);
        }

        //予約日の選択に関してエラーメッセージを出す
        var reservationDate = $("#reservationDate").val();
        if (reservationDate === "") {
            s = s + 1;
          $("#reservationDateError").text("日付を選択してください。");
        } else {
          /*$("#reservationDateError").text(""); // エラーメッセージをクリア*/
          var selectedDate = new Date(reservationDate);
          var currentDate = new Date();
    
          // 過去の日程を選択した場合
          if (selectedDate < currentDate) {
            s = s + 1;
            $("#reservationDateError").text("過去の日程は選択できません。");
          }
    
          // 1か月以上先の日程を選択した場合
          var maxDate = new Date();
          maxDate.setMonth(maxDate.getMonth() + 1);
          if (selectedDate > maxDate) {
            s = s + 1;
            $("#reservationDateError").text("1か月以上先の日程は選択できません。");
          }
        }

        //人数が選択されていない場合のコードに関して
        var numberOfPeople = $("#numberOfPeople").val();
        if (numberOfPeople === "") {
            s = s + 1;
            $("#numberOfPeopleError").text("人数を入力してください");
        } 

        if(s > 0){//空文字が存在しないかの判定と、送信できた際のアラートの表示に関して
            window.scroll({
                top: 0,
                behavior: "smooth",
            })
        }else{
            alert("送信されました！");
            //送信完了したら、入力内容をクリアする
            $('#Firstname').val('');
            $("#Firstname").toggle(true);
            $('#Lastname').val('');
            $("#Lastname").toggle(true);
            $("#reservationDate").val("");
            $("#reservationDate").toggle(true);
            $("#numberOfPeople").val("")
            $("#numberOfPeople").toggle(true);
            $('#inputEmail').val('');
            $("#inputEmail").toggle(true);
            $('#inputPassword6').val('');
            $("#inputPassword6").toggle(true);
            //送信完了したらアラートをクリアにする
            $(".firstname").hide();
            $(".firstname").toggle(false);
            $(".lastname").hide();
            $(".lastname").toggle(false);
            $(".DateError").hide();
            $(".DateError").toggle(false);
            $(".NumberPeople").hide();
            $(".NumberPeople").toggle(false);
            $(".alertEmail").hide();
            $(".alertEmail").toggle(false);
            $(".alertPass").hide();
            $(".alertPass").toggle(false);
        }
    })
    /*入力間違いや空欄があって送信がクリックされた場合、画面が上に移動するので、内容とアラートをクリックするボタンを設置しておく*/
    $("#clearbutton").on("click",function(){
        $('#Firstname').val('');
        $("#Firstname").toggle(true);
        $('#Lastname').val('');
        $("#Lastname").toggle(true);
        $("#reservationDate").val("");
        $("#reservationDate").toggle(true);
        $("#numberOfPeople").val("")
        $("#numberOfPeople").toggle(true);
        $('#inputEmail').val('');
        $('#inputPassword6').val('');
        $(".disable").hide();
        $(".disable").toggle(false);
        //クリアボタンをクリックしたらアラートをクリアにする
        $(".firstname").hide();
        $(".firstname").toggle(false);
        $(".lastname").hide();
        $(".lastname").toggle(false);
        $(".DateError").hide();
        $(".DateError").toggle(false);
        $(".NumberPeople").hide();
        $(".NumberPeople").toggle(false);
        $(".alertEmail").hide();
        $(".alertEmail").toggle(false);
        $(".alertPass").hide();
        $(".alertPass").toggle(false);
    })
});