$(document).ready(function () {
    let id = (id) => document.getElementById(id);

    let fname = id("first-name"),
        phone = id("phone"),
        companyemail = id("company-email"),
        companyname = id("company-name");

    let last_name = id("last-name"),
        company_name = id("company-name"),
        company_email = id("company-email"),
        job_title = id("jobtitle"),
        company_size = id("company-size"),
        isPro = id("meetverse-pro").checked,
        isEnterprise = id("meetverse-ent").checked,
        userMeetverse = id("users-count"),
        teamFileStorage = id("teamFileStorage"),
        brandedSpace = id("brandedSpace");

    var current_fs, next_fs, previous_fs;

    // Next button
    $(".form-btn").click(function () {
        if ($(".show").hasClass("first-screen")) {
            if (fname.value.trim() === "") {
                return;
            } if (phone.value.trim() === "") {
                return;
            } else {
                current_fs = $(this).parent().parent().parent();
                next_fs = $(this).parent().parent().parent().next();

                $(current_fs).removeClass("show");
                $(next_fs).addClass("show");

                $("#progressbar li").eq($(".card2").index(next_fs)).addClass("active");

                current_fs.animate({}, {
                    step: function () {
                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        next_fs.css({
                            'display': 'block'
                        });
                    }
                });
            }
        } else if ($(".show").hasClass("second-screen")) {
            if (companyemail.value.trim() === "") {
                return;
            } if (companyname.value.trim() === "") {
                return;
            } else {
                current_fs = $(this).parent().parent().parent();
                next_fs = $(this).parent().parent().parent().next();

                $(current_fs).removeClass("show");
                $(next_fs).addClass("show");

                $("#progressbar li").eq($(".card2").index(next_fs)).addClass("active");

                current_fs.animate({}, {
                    step: function () {
                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        next_fs.css({
                            'display': 'block'
                        });
                    }
                });
            }
        } else if ($(".show").hasClass("third-screen")) {
            current_fs = $(this).parent().parent().parent();
            next_fs = $(this).parent().parent().parent().next();

            $(current_fs).removeClass("show");
            $(next_fs).addClass("show");

            $("#progressbar li").eq($(".card2").index(next_fs)).addClass("active");

            current_fs.animate({}, {
                step: function () {
                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    next_fs.css({
                        'display': 'block'
                    });
                }
            });
        } else if ($(".show").hasClass("fourth-screen")) {
            var values = {
                'type': "signup",
                'first_name': fname.value.trim(),
                'last_name': last_name.value.trim(),
                'phone': phone.value.trim(),
                'company_name': company_name.value.trim(),
                'company_email': company_email.value.trim(),
                'job_title': job_title.value.trim(),
                'company_size': company_size.value.trim(),
                'isPro': isPro,
                'isEnterprise': isEnterprise,
                'userMeetverse': userMeetverse.value.trim(),
                'teamFileStorage': teamFileStorage.value.trim(),
                'brandedSpace': brandedSpace.value.trim()
            };

            $.ajax({
                method: "POST",
                data: values,
                url: "./sendSignupDataAjax.php",
            }).done(function (data) {
                localStorage.clear();
                // window.location.href = "../cart-draft.php";
            }).fail(function (jqXHR, textStatus) {
                localStorage.clear();
            });
        }
    });
});