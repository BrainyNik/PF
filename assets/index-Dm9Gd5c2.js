import{_ as i}from"./index-CpFtTd2l.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-cGr9syWY.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-cGr9syWY.js","assets/ValueWithRandom-D6GA2aqV.js","assets/index-CpFtTd2l.js","assets/index-BoHDsSQN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
