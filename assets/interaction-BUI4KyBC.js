import{_ as i}from"./index-BTwteuTG.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-DYYV8nbq.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-DYYV8nbq.js","assets/Ranges-DGGqAe2m.js","assets/index-BTwteuTG.js","assets/index-BXqEgT1S.css","assets/index-DccgDMj4.js","assets/OptionsColor-BjFr_mjX.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}