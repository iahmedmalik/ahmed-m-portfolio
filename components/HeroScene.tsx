"use client";
import {useEffect,useRef,useState} from "react";

export default function HeroScene(){
  const host=useRef<HTMLDivElement>(null);
  const paused=useRef(false);
  const reset=useRef<(()=>void)|null>(null);
  const [stopped,setStopped]=useState(false);
  const [status,setStatus]=useState<'loading'|'ready'|'fallback'>('loading');
  useEffect(()=>{
    const element=host.current;if(!element)return;
    let disposed=false,cleanup=()=>{};
    const preference=matchMedia('(prefers-reduced-motion: reduce)');paused.current=preference.matches;setStopped(preference.matches);
    async function setup(){
      const [THREE,{createAvatar}]=await Promise.all([import('three'),import('../lib/create-avatar')]);if(disposed||!element)return;
      let renderer:InstanceType<typeof THREE.WebGLRenderer>;
      try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}catch{setStatus('fallback');return;}
      renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;renderer.setClearColor(0x1c1e1b,0);renderer.domElement.setAttribute('aria-hidden','true');element.appendChild(renderer.domElement);
      const scene=new THREE.Scene();scene.fog=new THREE.Fog(0x1c1e1b,13,46);
      const camera=new THREE.PerspectiveCamera(35,1,.1,100);
      const {avatar,head,gazeGroups}=createAvatar();scene.add(avatar);
      scene.add(new THREE.HemisphereLight(0xfff4df,0x293e2b,2.1));
      const key=new THREE.DirectionalLight(0xffead5,3.3);key.position.set(-3,5,6);scene.add(key);
      const rim=new THREE.DirectionalLight(0xd3ed9b,2.8);rim.position.set(5,4,-2);scene.add(rim);
      const tunnel=new THREE.Group();const tileGeometry=new THREE.PlaneGeometry(1,1);
      const mats=[new THREE.MeshBasicMaterial({color:0x242b25,side:THREE.DoubleSide}),new THREE.MeshBasicMaterial({color:0x4a5745,side:THREE.DoubleSide})];
      const batches=mats.map(material=>new THREE.InstancedMesh(tileGeometry,material,256));const counts=[0,0];batches.forEach(b=>tunnel.add(b));
      for(let z=0;z<16;z++)for(let side=0;side<4;side++)for(let cell=0;cell<8;cell++){
        const tile=new THREE.Object3D();const depth=-4-z*2.5,curve=Math.sin(z*.14)*3.5,parity=(cell+z+side)%2;
        if(side<2){tile.rotation.x=side===0?-Math.PI/2:Math.PI/2;tile.position.set(-8+cell*2+1+curve,side===0?-2.5:6,depth);tile.scale.set(2,2.5,1);}
        else{tile.rotation.y=side===2?Math.PI/2:-Math.PI/2;tile.position.set((side===2?-8:8)+curve,-2.5+cell*1.0625+.53125,depth);tile.scale.set(2.5,1.0625,1);}
        tile.updateMatrix();batches[parity].setMatrixAt(counts[parity]++,tile.matrix);
      }
      scene.add(tunnel);
      const contours=new THREE.Group();const lineMaterial=new THREE.LineBasicMaterial({color:0xb7d16d,transparent:true,opacity:.26});
      for(let i=0;i<24;i++){
        const points=[];
        for(let j=0;j<=160;j++){const t=j/160*Math.PI*2;points.push(new THREE.Vector3(Math.sin(t)*(5.1+i*.055),1.4+Math.cos(t)*(2+i*.035)+Math.sin(t*3)*.4,-3.5+Math.sin(t*2)*1.3-i*.08));}
        contours.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),lineMaterial));
      }
      scene.add(contours);
      let pointer={x:0,y:0},current={x:0,y:0},visible=true,raf=0,last=0;
      const resize=()=>{const {width,height}=element.getBoundingClientRect();const mobile=width<760;renderer.setSize(width,height);camera.aspect=width/height;camera.fov=mobile?53:35;camera.position.set(0,.7,9.5);camera.lookAt(0,.7,0);camera.updateProjectionMatrix();avatar.position.set(mobile ? .25 : camera.aspect*1.22, mobile ? -1.65 : .3, 1);avatar.scale.setScalar(mobile ? .86 : .98);renderer.render(scene,camera);};
      const point=(event:PointerEvent)=>{if(paused.current)return;const r=element.getBoundingClientRect();pointer={x:Math.max(-1,Math.min(1,(event.clientX-r.left)/r.width*2-1)),y:Math.max(-1,Math.min(1,(event.clientY-r.top)/r.height*2-1))};};
      const neutral=()=>{pointer={x:0,y:0};};
      const motion=()=>{paused.current=preference.matches;setStopped(preference.matches);neutral();};
      const draw=(now:number)=>{if(disposed||!visible||document.hidden)return;raf=requestAnimationFrame(draw);if(now-last<33)return;last=now;if(paused.current)return;current.x+=(pointer.x-current.x)*.065;current.y+=(pointer.y-current.y)*.065;head.rotation.y=current.x*.58;head.rotation.x=current.y*.2;avatar.rotation.y=current.x*.16;gazeGroups.forEach(eyes=>{eyes.position.x=current.x*.025;eyes.position.y=-current.y*.015;});element.dataset.lookX=current.x.toFixed(2);tunnel.rotation.y=current.x*.025;tunnel.position.x=current.x*.2;contours.rotation.y=current.x*.045;contours.rotation.x=current.y*.025;renderer.render(scene,camera);};
      function start(){cancelAnimationFrame(raf);last=performance.now();raf=requestAnimationFrame(draw);}
      const visibility=()=>{if(document.hidden)cancelAnimationFrame(raf);else start();};
      const observer=new ResizeObserver(resize);observer.observe(element);
      const intersection=new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(visible)start();else cancelAnimationFrame(raf);});intersection.observe(element);
      window.addEventListener('pointermove',point,{passive:true});element.parentElement?.addEventListener('pointerleave',neutral);document.addEventListener('visibilitychange',visibility);preference.addEventListener('change',motion);
      reset.current=()=>{neutral();current={x:0,y:0};head.rotation.set(0,0,0);avatar.rotation.y=0;gazeGroups.forEach(eyes=>eyes.position.set(0,0,0));tunnel.rotation.y=0;tunnel.position.x=0;contours.rotation.set(0,0,0);renderer.render(scene,camera);};
      resize();start();setStatus('ready');
      cleanup=()=>{cancelAnimationFrame(raf);observer.disconnect();intersection.disconnect();window.removeEventListener('pointermove',point);element.parentElement?.removeEventListener('pointerleave',neutral);document.removeEventListener('visibilitychange',visibility);preference.removeEventListener('change',motion);scene.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.Line){o.geometry.dispose();(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());}});renderer.dispose();renderer.domElement.remove();reset.current=null;};
    }
    setup().catch(()=>{if(!disposed)setStatus('fallback');});return()=>{disposed=true;cleanup();};
  },[]);
  return <div className="hero-scene-wrap"><div className={`hero-scene scene-${status}`} ref={host} role="img" aria-label="Original slim 3D character with glasses, surrounded by an interactive checkerboard room and flowing contour lines."/><div className="hero-shade" aria-hidden="true"/><div className="scene-toolbar"><span>{stopped?'Motion paused. Resume to follow your cursor.':'Move across the hero — he follows your cursor.'}</span><div><button type="button" aria-pressed={stopped} onClick={()=>{paused.current=!paused.current;setStopped(paused.current);}}>{stopped?'Resume':'Pause'}</button><button type="button" onClick={()=>reset.current?.()}>Reset view</button></div></div></div>;
}
