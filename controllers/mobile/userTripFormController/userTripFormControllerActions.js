define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_a4d839d4c0664379a5c2dc9280746973: function AS_Button_a4d839d4c0664379a5c2dc9280746973(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("tripPlanner");
        ntf.navigate();
    },
    AS_Form_je97759daa9549f0b1e02e1f0b8a974f: function AS_Form_je97759daa9549f0b1e02e1f0b8a974f(eventobject) {
        var self = this;
        return getUserSpecificTrips.call(this);
    },
    AS_Label_e4c6713d387f4d8e9d6b7e95ce43fd61: function AS_Label_e4c6713d387f4d8e9d6b7e95ce43fd61(eventobject, x, y) {
        var self = this;
        return saveTrips.call(this);
    }
});