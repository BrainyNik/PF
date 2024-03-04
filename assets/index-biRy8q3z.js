import{_ as c}from"./index-Rfz78JFI.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-VkaWcNKJ.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-VkaWcNKJ.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-Rfz78JFI.js","assets/index-BXqEgT1S.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
