import{_ as o}from"./index-Rfz78JFI.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-CsWKXSBy.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-CsWKXSBy.js","assets/index-Rfz78JFI.js","assets/index-BXqEgT1S.css","assets/ValueWithRandom-BtX26gGv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
