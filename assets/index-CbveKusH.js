import{_ as i}from"./index-DGNQ4D_Y.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CX25GuhT.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-CX25GuhT.js","assets/ValueWithRandom-sozME-rw.js","assets/index-DGNQ4D_Y.js","assets/index-md9pfFkp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
