import{_ as n}from"./index-DGNQ4D_Y.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-BlrXaTAV.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-XK_wK69b.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-BlrXaTAV.js","assets/PolygonDrawerBase-DlOsC0VR.js","assets/index-DGNQ4D_Y.js","assets/index-md9pfFkp.css","assets/TriangleDrawer-XK_wK69b.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
