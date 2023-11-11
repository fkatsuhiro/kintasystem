$(function() {
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
            $('#inputEmail').val('');
            $("#inputEmail").toggle(true);
            $('#inputPassword6').val('');
            $("#inputPassword6").toggle(true);
            //送信完了したらアラートをクリアにする
            $(".firstname").hide();
            $(".firstname").toggle(false);
            $(".lastname").hide();
            $(".lastname").toggle(false);
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
        /*日付選択がされていない際のアラートの取り消し項目 */
        /*後付けで人数入力の欄の項目が入力されていない際のアラートの取り消し項目 */
        $('#inputEmail').val('');
        $('#inputPassword6').val('');
        $(".disable").hide();
        $(".disable").toggle(false);
        //送信完了したらアラートをクリアにする
        $(".firstname").hide();
        $(".firstname").toggle(false);
        $(".lastname").hide();
        $(".lastname").toggle(false);
        $(".alertEmail").hide();
        $(".alertEmail").toggle(false);
        $(".alertPass").hide();
        $(".alertPass").toggle(false);
    })
});