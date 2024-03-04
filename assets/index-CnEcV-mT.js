import{_ as c}from"./index-CpFtTd2l.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-B8b3ds74.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-B8b3ds74.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-CpFtTd2l.js","assets/index-BoHDsSQN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
