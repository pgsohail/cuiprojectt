var material_sets;wearfits.showQualityButtons=!0,wearfits.showRotationButton=!1,wearfits.showRayTracingButton=!0,wearfits.rayTracingToneMapping=1,wearfits.rayTracingToneMappingExposure=.55,wearfits.showMaterialPresets=!1;var white_image_url="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKAP/2Q==";let presets=[],objects=[{url:"koszula_base"},{url:"koszula_pockets",default_variant:0},{url:"koszula_collars",default_variant:1},{url:"koszula_buttons"},{url:"koszula_cuffs",default_variant:2}];new URL(window.location.href).searchParams.get("loadAvatar")&&objects.push({url:"avatar_koszula"}),wearfits.addEventListener("scene_load",function(){updateMaterialList(),new URL(window.location.href).searchParams.get("lockCameraShirt")&&(wearfits.zoom(wearfits.objects[0],"y"),wearfits.controls.enablePan=!1,wearfits.controls.minDistance=.7,wearfits.controls.maxDistance=wearfits.controls.radius,wearfits.controls.minPolarAngle=.35*Math.PI,wearfits.controls.maxPolarAngle=.5*Math.PI)}),wearfits.addEventListener("upload_material_finish",function(){updateMaterialList()});for(let e=0;e<objects.length;++e)objects[e].index=e,wearfits.load(objects[e].url,objects[e]).then(t=>{if(void 0!==objects[e].default_variant)for(let e=0;e<t.meshes.length;++e)t.meshes[e].visible=e===t.default_variant});function updateMaterialList(){let e=document.getElementById("menu_customize");e.innerHTML="";let t=document.getElementById("menu_presets");if(t.innerHTML="",window.menu_customize)for(let t of wearfits.objects){if(!t.mesh)continue;let a=document.createElement("ul"),s=document.createElement("li");if(s.className="mesh_name",s.setAttribute("mesh_name",t.name),s.appendChild(document.createTextNode(t.name)),a.appendChild(s),t.meshes.length>1){let s=document.createElement("ul");for(let e=0;e<t.meshes.length;++e){let a=t.meshes[e].name,i=document.createElement("li");i.className="variant",i.setAttribute("variant",a),i.setAttribute("mesh_name",t.name),i.appendChild(document.createTextNode("Variant "+(e+1))),s.appendChild(i)}a.appendChild(s),e.appendChild(a)}}if(window.menu_materials){let e=document.createElement("ul");menu_materials.appendChild(e),e.id="materials_list",e.style.padding="0",wearfits.isSmallDevice?e.style.display="inline-block":e.style.columns="2",e.style["list-style-type"]="none";for(let t of wearfits.object.material_sets){let a=document.createElement("li");a.className="material",a.setAttribute("material",t.name);let s=document.createElement("img");s.src=t.materials[0].s3_diffuse_map_url||white_image_url,s.style.border="1px solid black",s.style.width="60px",s.style.height="60px",a.appendChild(s),e.appendChild(a)}}presets=[];for(let e of wearfits.object.material_sets)presets.push({material:e.name});if(window.menu_presets){let e=document.createElement("ul");t.appendChild(e),e.id="wearfits_preset_list",e.style.padding="0",wearfits.isSmallDevice?e.style.display="inline-block":e.style.columns="2",e.style["list-style-type"]="none";for(let t=0;t<presets.length;++t){let a,s=document.createElement("li");s.className="preset",s.setAttribute("index",t);for(let e of wearfits.object.material_sets)if(e.name===presets[t].material){a=e.materials[0].s3_diffuse_map_url||white_image_url;break}let i=document.createElement("img");i.src=a,i.style.border="1px solid black",i.style.width="60px",i.style.height="60px",s.appendChild(i),e.appendChild(s)}}}function showVariant(e,t){for(let a of wearfits.objects)if(a&&a.name===e){if(Number.isInteger(t)){if(!(t<a.meshes.length))return void console.warn("Warning: No variant of index: "+t);t=a.meshes[t].name}for(let e=0;e<a.meshes.length;++e){let s=a.meshes[e];s.visible=s.name===t}}}$(document).ready(()=>{$(document).on("click",".variant",function(){showVariant($(this).attr("mesh_name"),$(this).attr("variant")),wearfits.forceRenderWithTimeout("refresh")}),$(document).on("click",".material",function(){let e=$(this).attr("material");wearfits.loadMaterialSet(e),wearfits.setSelectedMaterial()}),$(document).on("click",".preset",function(){let e=$(this).attr("index"),t=presets[e];wearfits.loadMaterialSet(t.material),showVariant("Cuffs",void 0!=t.cuffs?t.cuffs:Math.floor(3*Math.random())),showVariant("Collar",void 0!=t.collar?t.collar:Math.floor(3*Math.random())),showVariant("Pocket",void 0!=t.pocket?t.pocket:Math.floor(3*Math.random())),wearfits.setSelectedMaterial()})});