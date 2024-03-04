import{_ as i}from"./index-Rfz78JFI.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-C7fIQq65.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-C7fIQq65.js","assets/ValueWithRandom-BtX26gGv.js","assets/index-Rfz78JFI.js","assets/index-BXqEgT1S.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
