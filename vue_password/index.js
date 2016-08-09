/**
 * Created by lunber on 16/8/6.
 */
var vm = new Vue({
    el:'body',
    data: {
        arr:[]
    },
    ready:function () {
        this.$els.inputEl.focus();
        for (var k = 0; k < 6; k++) {
            this.arr.push({a:' '})
        }
    },
    methods: {
        input: function (event) {
            var numLength = event.currentTarget.value.length;
            this.add(numLength)
            console.log(this.arr)
        },
        add: function (i) {
            this.arr = new Array();
            for (var j = 0; j < i; j++) {
                this.arr.push({a:'·'})
            }
            for (var k = 0; k < 6-i; k++) {
                this.arr.push({a:' '})
            }
        }
    }
})