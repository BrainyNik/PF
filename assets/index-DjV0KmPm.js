import{_ as n}from"./index-Rfz78JFI.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-DMFTIVWN.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-ehpw9BMN.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-DMFTIVWN.js","assets/PolygonDrawerBase-F6OTZ4i1.js","assets/index-Rfz78JFI.js","assets/index-BXqEgT1S.css","assets/TriangleDrawer-ehpw9BMN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
