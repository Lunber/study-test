/**
 * Created by lunber on 16/8/6.
 */
var vm = new Vue({
    el:'body',
    data: {
        ifAlert:false,
        ifClass:false
    },
    methods:{
        btnClick:function (event) {
            if (!this.ifAlert) {
                this.ifAlert = true;
                var _this = this;
                setTimeout(function () {
                    _this.ifClass = true;
                }, 1)
                this.closeAlert()
            }
        },
        closeAlert:function () {
            var _this = this;
            setTimeout(function () {
                _this.ifClass = false;
            },2000)
            setTimeout(function () {
                _this.ifAlert = false;
            },3000)
        }
    }
})