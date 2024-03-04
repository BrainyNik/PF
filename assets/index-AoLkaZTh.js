import{_ as o}from"./index-B-vFhvah.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-B0_3B47C.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-B0_3B47C.js","assets/index-B-vFhvah.js","assets/index-md9pfFkp.css","assets/ValueWithRandom-DsEEZ9Xl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
