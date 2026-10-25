import * as THREE from "three";

// Original, procedural portrait illustration. No reference-avatar geometry is used.
export function createAvatar() {
  const avatar = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({color:0xc99b79,roughness:.68});
  const hair = new THREE.MeshStandardMaterial({color:0x211e1c,roughness:.7});
  const shirt = new THREE.MeshStandardMaterial({color:0x626e57,roughness:.88});
  const collar = new THREE.MeshStandardMaterial({color:0x384332,roughness:.9});
  const dark = new THREE.MeshStandardMaterial({color:0x232521,roughness:.42,metalness:.25});
  const whites = new THREE.MeshStandardMaterial({color:0xf3e9db,roughness:.5});
  const iris = new THREE.MeshStandardMaterial({color:0x3b3026,roughness:.55});
  const lip = new THREE.MeshStandardMaterial({color:0x885a48,roughness:.85});
  const sphere = (parent:THREE.Object3D, material:THREE.Material, position:number[], scale:number[]) => {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(1,40,32),material);
    mesh.position.set(position[0],position[1],position[2]);
    mesh.scale.set(scale[0],scale[1],scale[2]);parent.add(mesh);return mesh;
  };
  const line = (parent:THREE.Object3D, points:THREE.Vector3[], radius:number, material:THREE.Material) => {
    const mesh = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),24,radius,8,false),material);parent.add(mesh);return mesh;
  };
  // Slim torso with gently sloping shoulders, rather than the broad reference model.
  const outline=[new THREE.Vector2(.43,0),new THREE.Vector2(.46,.2),new THREE.Vector2(.48,.65),new THREE.Vector2(.59,.98),new THREE.Vector2(.49,1.12),new THREE.Vector2(.25,1.23)];
  const torso = new THREE.Mesh(new THREE.LatheGeometry(outline,48),shirt);
  torso.scale.z=.62;avatar.add(torso);
  sphere(avatar,shirt,[-.5,.66,0],[.15,.49,.18]);sphere(avatar,shirt,[.5,.66,0],[.15,.49,.18]);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(.18,.21,.3,32),skin);neck.position.y=1.33;avatar.add(neck);
  const neckline = new THREE.Mesh(new THREE.TorusGeometry(.205,.045,12,40),collar);neckline.rotation.x=Math.PI/2;neckline.position.y=1.19;avatar.add(neckline);
  const head = new THREE.Group();head.position.y=1.88;avatar.add(head);
  const face = sphere(head,skin,[0,.1,0],[.46,.68,.43]);
  // Taper the cheeks and jaw to give this face its own silhouette.
  const vertices=face.geometry.attributes.position;
  for(let i=0;i<vertices.count;i++){const y=vertices.getY(i);if(y<-.1)vertices.setX(i,vertices.getX(i)*(1-(-y-.1)*.15));}
  vertices.needsUpdate=true;face.geometry.computeVertexNormals();
  sphere(head,skin,[-.46,.08,-.015],[.09,.15,.075]);sphere(head,skin,[.46,.08,-.015],[.09,.15,.075]);
  sphere(head,lip,[-.49,.08,.025],[.028,.08,.02]);sphere(head,lip,[.49,.08,.025],[.028,.08,.02]);
  // Small eyes with a neutral, forward-facing gaze.
  const eyes = new THREE.Group();head.add(eyes);
  const gazeGroups: THREE.Group[] = [];
  for(const x of [-.19,.19]) {
    sphere(eyes,whites,[x,.17,.375],[.115,.068,.045]);
    const gaze = new THREE.Group(); eyes.add(gaze); gazeGroups.push(gaze);
    sphere(gaze,iris,[x,.17,.417],[.041,.05,.018]);
    sphere(gaze,dark,[x,.17,.431],[.018,.031,.009]);
    sphere(gaze,whites,[x-.012,.19,.44],[.009,.012,.005]);
    line(head,[new THREE.Vector3(x-.105,.295,.385),new THREE.Vector3(x,.315,.415),new THREE.Vector3(x+.1,.295,.39)],.018,hair);
  }
  sphere(head,skin,[0,.015,.435],[.061,.115,.095]);
  sphere(head,skin,[0,-.045,.48],[.076,.053,.065]);
  line(head,[new THREE.Vector3(-.105,-.22,.373),new THREE.Vector3(0,-.242,.407),new THREE.Vector3(.105,-.22,.373)],.012,lip);
  // A close, softly textured cut with a low side sweep, not a solid wig-like cap.
  const capGeometry = new THREE.SphereGeometry(1,40,24,0,Math.PI*2,0,Math.PI*.52);
  const hairVertices = capGeometry.attributes.position;
  for(let i=0;i<hairVertices.count;i++) {
    const x=hairVertices.getX(i),y=hairVertices.getY(i),z=hairVertices.getZ(i);
    const texture=1+Math.sin(x*24+z*17)*Math.sin(y*19)*.016;
    hairVertices.setXYZ(i,x*texture,y*texture,z*texture);
  }
  capGeometry.computeVertexNormals();
  const cap = new THREE.Mesh(capGeometry,hair);
  cap.position.set(0,.35,-.04);cap.scale.set(.47,.46,.43);head.add(cap);
  const sweep=sphere(head,hair,[-.1,.64,.2],[.3,.095,.22]);sweep.rotation.z=.1;
  sphere(head,hair,[-.435,.34,-.035],[.05,.17,.24]);
  sphere(head,hair,[.435,.34,-.035],[.05,.17,.24]);
  // Rounded rectangular glasses, with bridge, temples and separate clear lenses.
  const glasses = new THREE.Group();head.add(glasses);
  const frameShape=(w:number,h:number,r:number)=>{
    const shape=new THREE.Shape();shape.moveTo(-w/2+r,-h/2);shape.lineTo(w/2-r,-h/2);shape.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);shape.lineTo(w/2,h/2-r);shape.quadraticCurveTo(w/2,h/2,w/2-r,h/2);shape.lineTo(-w/2+r,h/2);shape.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);shape.lineTo(-w/2,-h/2+r);shape.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);return shape;
  };
  const lensMaterial=new THREE.MeshPhysicalMaterial({color:0xdce7da,transparent:true,opacity:.08,roughness:.12,metalness:0,depthWrite:false});
  for(const x of [-.2,.2]) {
    const outer=frameShape(.34,.23,.055);
    const inner=frameShape(.294,.184,.038);outer.holes.push(new THREE.Path(inner.getPoints().reverse()));
    const frame=new THREE.Mesh(new THREE.ExtrudeGeometry(outer,{depth:.025,bevelEnabled:false,curveSegments:12}),dark);frame.position.set(x,.17,.45);glasses.add(frame);
    const lens=new THREE.Mesh(new THREE.ShapeGeometry(frameShape(.294,.184,.038),16),lensMaterial);lens.position.set(x,.17,.464);glasses.add(lens);
  }
  line(glasses,[new THREE.Vector3(-.035,.2,.46),new THREE.Vector3(0,.215,.48),new THREE.Vector3(.035,.2,.46)],.014,dark);
  for(const side of [-1,1])line(glasses,[new THREE.Vector3(side*.37,.21,.46),new THREE.Vector3(side*.46,.2,.15),new THREE.Vector3(side*.47,.16,.015)],.013,dark);
  const trousers = new THREE.MeshStandardMaterial({color:0x30373a,roughness:.92});
  const shoes = new THREE.MeshStandardMaterial({color:0x202725,roughness:.65});
  const soles = new THREE.MeshStandardMaterial({color:0xc6cbb9,roughness:.9});
  for(const x of [-.23,.23]) {
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(.145,.8,8,20),trousers);
    leg.position.set(x,-.48,0);avatar.add(leg);
    sphere(avatar,trousers,[x,-1.035,0],[.13,.15,.14]);
    sphere(avatar,shoes,[x,-1.19,.08],[.17,.105,.28]);
    sphere(avatar,soles,[x,-1.27,.08],[.172,.026,.285]);
  }
  sphere(avatar,skin,[-.51,.12,.03],[.105,.15,.1]);
  sphere(avatar,skin,[.51,.12,.03],[.105,.15,.1]);
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(.75,48),new THREE.MeshBasicMaterial({color:0x080c08,transparent:true,opacity:.22,depthWrite:false}));
  shadow.rotation.x=-Math.PI/2;shadow.position.y=-1.3;shadow.scale.y=.55;avatar.add(shadow);
  head.rotation.y=0;
  return {avatar,head,eyes,gazeGroups};
}
