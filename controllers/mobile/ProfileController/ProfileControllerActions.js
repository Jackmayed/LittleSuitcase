define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_d17007050b3a4f68b6d12e19fd310603: function AS_Button_d17007050b3a4f68b6d12e19fd310603(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("Menu");
        ntf.navigate();
    },
    AS_Button_dc69c43b932341c18892e66d7916fcb1: function AS_Button_dc69c43b932341c18892e66d7916fcb1(eventobject, x, y) {
        var self = this;
        kony.ui.Alert({
            message: getUserID()
        }, []);
    },
    AS_Button_d21970bf931645da87ef24a3e31a54ad: function AS_Button_d21970bf931645da87ef24a3e31a54ad(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("Login");
        ntf.navigate();
    }
});