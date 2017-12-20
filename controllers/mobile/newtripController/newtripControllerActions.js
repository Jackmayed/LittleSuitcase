define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_h63763670abc436987c970b2508f50f4: function AS_Button_h63763670abc436987c970b2508f50f4(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("plantrip");
        ntf.navigate();
    },
    AS_TextField_f143fad90ebb4be4a5aff5691bf8cd38: function AS_TextField_f143fad90ebb4be4a5aff5691bf8cd38(eventobject, changedtext) {
        var self = this;
    },
    AS_Button_d9abb6d8e28e46aba2e1ea9303bc60a9: function AS_Button_d9abb6d8e28e46aba2e1ea9303bc60a9(eventobject, x, y) {
        var self = this;
        return createTrip.call(this);
    }
});