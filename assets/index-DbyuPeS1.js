import{_ as e}from"./index-CpFtTd2l.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-37K5EuyN.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-37K5EuyN.js","assets/index-CpFtTd2l.js","assets/index-BoHDsSQN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
