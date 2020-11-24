Vue.component("panel", {
    template: `
    <div class="panel">
    <div class="panelTitle">
        {{title}}
    </div>
    <div class="panelContent">
        <slot></slot>
    </div>
</div>
    `,
    props:["title"]
});