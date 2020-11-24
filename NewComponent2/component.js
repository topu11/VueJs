Vue.component("panel", {
    template: `
    <div class="panel">
    <div class="panelTitle">
        {{title}}
    </div>
    <div class="panelContent">
        {{content}}
    </div>
</div>
    `,
    props:["title","content"]
});