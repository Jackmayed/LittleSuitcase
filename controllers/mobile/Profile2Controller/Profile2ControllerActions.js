define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_bbb044ac009145468672c405cc58f2ee: function AS_Button_bbb044ac009145468672c405cc58f2ee(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("Menu");
        ntf.navigate();
    },
    AS_Button_d70491ab087a4d2dafe08f279a3d9a06: function AS_Button_d70491ab087a4d2dafe08f279a3d9a06(eventobject, x, y) {
        var self = this;
        return saveProfile.call(this);
    },
    AS_Button_d4f0a2ff09e443ef9096b502a7443066: function AS_Button_d4f0a2ff09e443ef9096b502a7443066(eventobject, x, y) {
        var self = this;
        setUserID('');
        var ntf = new kony.mvc.Navigation("Login");
        ntf.navigate();
    },
    AS_Form_c98e06e14dec4ef2b067bec7f3f1fa2b: function AS_Form_c98e06e14dec4ef2b067bec7f3f1fa2b(eventobject) {
        var self = this;
        return getProfile.call(this);
    }
});