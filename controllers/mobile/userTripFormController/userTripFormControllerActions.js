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
    }
});