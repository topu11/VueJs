Vue.component("panel", {
    template: `
    <div class="panel" v-if="show">
    <div class="panelTitle">
        {{title}}
        <div class="close" @click="show = false">x</div>
    </div>
    <div class="panelContent">
        <slot></slot>
    </div>
</div>
    `,
    data: function(){
        return {
            show: true
        }
    },
    props:["title"]
});