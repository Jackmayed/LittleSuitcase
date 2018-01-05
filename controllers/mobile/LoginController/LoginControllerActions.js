define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_c93bbfa6e15348c1928ad7ee083766ac: function AS_Button_c93bbfa6e15348c1928ad7ee083766ac(eventobject, x, y) {
        var self = this;
        login.call(this);
        if ((userID !== emptyUser)) {
            var ntf = new kony.mvc.Navigation("Menu");
            ntf.navigate();
        } else {
            kony.ui.Alert({
                message: "Email or password is incorrect "
            }, {});
        }
    }
});