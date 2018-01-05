define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Map_b370b3cc1410450b8be0a0489adca5d8: function AS_Map_b370b3cc1410450b8be0a0489adca5d8(eventobject) {
        var self = this;
    },
    AS_Button_b882f7b1d31342ea9c104562a2b95391: function AS_Button_b882f7b1d31342ea9c104562a2b95391(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("newtrip");
        ntf.navigate();
    },
    AS_Button_c78292a03258477c8e824a228b2e2618: function AS_Button_c78292a03258477c8e824a228b2e2618(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("Menu");
        ntf.navigate();
    },
    AS_Form_cae53ab5e500479486fb62d4ed84170d: function AS_Form_cae53ab5e500479486fb62d4ed84170d(eventobject) {
        var self = this;
        return getRandomLocation.call(this);
    }
});