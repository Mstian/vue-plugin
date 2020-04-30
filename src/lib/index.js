import Toast from './vue-leilei-toast.vue';

var ToastPlugin = {};

ToastPlugin.install = function(Vue,options){
    var ToastConstructor = Vue.extend(Toast);
    var ToastInstance = new (ToastConstructor);
    var div = document.createElement('div');
    ToastInstance.$mount(div);
    document.body.appendChild(ToastInstance.$el);

    Vue.prototype.$toast = function(msg,duration=2000){
        ToastInstance.message = msg;
        ToastInstance.show = true;
        setTimeout(()=>{
            ToastInstance.show = false
        },duration)
    }
}
export default ToastPlugin