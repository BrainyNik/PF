import{_ as i}from"./index-B-vFhvah.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-nnP2V0Et.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-nnP2V0Et.js","assets/ValueWithRandom-DsEEZ9Xl.js","assets/index-B-vFhvah.js","assets/index-md9pfFkp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
