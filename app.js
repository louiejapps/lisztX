var firebaseConfig={apiKey:"AIzaSyD7156apCcrJnRX9cP8KSazMbILNJgKEt0",authDomain:"lois-files.firebaseapp.com",projectId:"lois-files",databaseURL:"https://lois-files-default-rtdb.asia-southeast1.firebasedatabase.app/",storageBucket:"lois-files.appspot.com",messagingSenderId:"294529638144",appId:"1:294529638144:web:f2c2c504d1ed9a12641de5"};firebase.initializeApp(firebaseConfig);const storage=firebase.storage();window.onload=function(){postFrom.reset(),authorInput.disabled=!0,setTimeout(function(){window.scrollTo(0,0)},0)};const internetTime=Date.now();var items=10,database=firebase.database(),urltext="",posttext="",selectedText="",rnum="",userInput=randomNum(0,uarray.length-1);user="Admin",localStorage.setItem("data",internetTime),sessionStorage.setItem("link","?"),sessionStorage.setItem("base64","");var upflag=!1;const headerImage=document.querySelector("#header-image"),loading=document.querySelector("#loading-page");loading.style.display="block",headerImage.src=imageHeader;var childNum=0;loadDatabase(items,"",!0,pinTableBody),loadDatabase(items,"",!1,quoteTableBody),loadThoughts();const reactArr=["loves","likes","wows","hahas","frowns","dislikes"];database.ref("quotes").once("value").then(e=>{childNum=e.numChildren()}).catch(e=>{console.log("Error retrieving data:",e)});let inputChanged=!1,more_toggle=!1;function resetPage(){location.reload(),window.location.href="#top",postFrom.reset()}function openLink(e){window.open(e)}function checkRegex(){let e=quoteTextarea.value,t=/(https?:\/\/[^\s]+)/g,a=e.match(t),n=/^https?:\/\/shp\.ee\/.*$/;if(a&&a.length>0)for(let i of a)n.test(i)?(showImage.style.display="block",toolBar.style.display="none",urltext=i,posttext=quoteTextarea.value.replace(t,"<a>$1</a>")):"none"===window.getComputedStyle(toolbarUrl).display&&(showImage.style.display="none",toolBar.style.display="block");else"none"===window.getComputedStyle(toolbarUrl).display&&(showImage.style.display="none",toolBar.style.display="block")}function loadThoughts(){console.log("dgsd");let e={Admin:{image:`${profileHashMap.Admin}`,shoutout:"+New Thoughts"},Fenimaure:{image:profileHashMap.Fenimaure,shoutout:"達成 gets it"},ZzenN:{image:profileHashMap.ZzenN,shoutout:"Magic lies in the mind"},Pennyclied30:{image:profileHashMap.Pennyclied30,shoutout:"\uD83D\uDE01\uD83D\uDE01"},Jolyows:{image:profileHashMap.Jolyows,shoutout:"\uD83D\uDE0D\uD83D\uDE0B"},XtreamCH:{image:profileHashMap.XtreamCH,shoutout:"\uD83D\uDE44\uD83D\uDE2F"},ZzzChizCurlzzZ:{image:profileHashMap.ZzzChizCurlzzZ,shoutout:""},JellyMuse:{image:profileHashMap.JellyMuse,shoutout:""},lystar:{image:profileHashMap.lystar,shoutout:""},sevenEvelyn:{image:profileHashMap.sevenEvelyn,shoutout:"To the hidden blade, all life is equal."},Bradford:{image:profileHashMap.Bradford,shoutout:""},Metsuki:{image:profileHashMap.Metsuki,shoutout:""},mjba4w:{image:profileHashMap.mjba4w,shoutout:"rank"},arrciiemm:{image:profileHashMap.arrciiemm,shoutout:""},Redclouds:{image:profileHashMap.Redclouds,shoutout:""},zoyuken:{image:profileHashMap.zoyuken,shoutout:""},marssh:{image:profileHashMap.marssh,shoutout:"golden"},abigail98:{image:profileHashMap.abigail98,shoutout:""},rhomdz:{image:profileHashMap.rhomdz,shoutout:""},zerojhe101:{image:profileHashMap.zerojhe101,shoutout:"earthworm"},andreazxcv:{image:profileHashMap.andreazxcv,shoutout:""},Frenzo125:{image:`${profileHashMap.Frenzo125}`,shoutout:"達成"},zekejaeger:{image:profileHashMap.zekejaeger,shoutout:""},alkens:{image:profileHashMap.alkens,shoutout:""},znerski:{image:profileHashMap.znerski,shoutout:""},icebear:{image:profileHashMap.icebear,shoutout:"追いかける"},scarlett:{image:profileHashMap.scarlett,shoutout:""},FindingXY:{image:profileHashMap.FindingXY,shoutout:""},Coolbookkeeper7:{image:profileHashMap.Coolbookkeeper7,shoutout:"12345\uD83D\uDE0D"},astrazelle:{image:profileHashMap.astrazelle,shoutout:""},leviHeichou:{image:profileHashMap.leviHeichou,shoutout:""},ParkJaechan:{image:profileHashMap.ParkJaechan,shoutout:""}},t="";database.ref("users/Admin/thoughts").on("value",function(a){t=a.val();let n=document.getElementById("chat-list");n.innerHTML="",Object.entries(e).forEach(([e,a])=>{let i=document.createElement("div");i.classList.add("chat-icon-container");let o=document.createElement("img");if(o.src=a.image,o.alt=`${e}'s profile picture`,o.addEventListener("click",()=>{"Admin"===e&&thoughtModal(t)}),i.appendChild(o),""!==a.shoutout.trim()){let s=document.createElement("div");s.classList.add("thought-bubble"),"Admin"===e?(console.log(t),""===t?(s.style.fontSize="0.85em",s.style.fontFamily="cursive",s.style.fontWeight="bold",s.style.lineHeight="1em",s.style.maxWidth="60px",s.textContent="+New Thoughts"):s.textContent=t):s.textContent=a.shoutout,i.appendChild(s)}let l=document.createElement("div");l.classList.add("profile-name"),l.textContent=e,i.appendChild(l),n.appendChild(i)})},function(e){console.error("Error retrieving data:",e)})}function uploadImages(){let e=document.getElementById("toolbar"),t=document.getElementById("img-button"),a=t.files,n=document.getElementById("thumbnails"),i=document.getElementById("post-button");for(let o=0;o<a.length;o++){let s=a[o],l=storage.ref("images/"+s.name),r=l.put(s),d=document.createElement("div");n.appendChild(d),r.on("state_changed",t=>{let a=t.bytesTransferred/t.totalBytes*100;e.style.display="none",d.innerHTML="<strong>Uploading: "+Math.round(a)+"%</strong>"},e=>{console.error("Upload failed:",e)},()=>{l.getDownloadURL().then(e=>{let t=document.createElement("img");t.src=sessionStorage.getItem("base64"),t.style.maxHeight="200px",t.style.maxWidth="300px",t.style.margin="1px";let a=document.createElement("a");a.href=e,a.download=s.name,a.appendChild(t),d.innerHTML="",d.appendChild(t),i.disabled=!1,sessionStorage.setItem("link",e),console.log(sessionStorage.getItem("link"))}).catch(e=>{console.error("Failed to get download URL:",e)})})}}function selectFile(){let e=document.getElementById("img-button");e.addEventListener("change",function t(){e.removeEventListener("change",t),!1===upflag?(uploadImages(),upflag=!0):console.log(upflag)}),e.click()}function getSelectedText(){selectedText=window.getSelection().toString()}function limitCharacters(e,t){let a=e.trim();return a.length>t?a.substring(0,t):a}function handleImage(){let e=document.getElementById("img-button"),t=e.files[0];if(t){let a=new FileReader;a.onload=function(e){let t=new Image;t.src=e.target.result,t.onload=function(){let e=document.createElement("canvas"),a=e.getContext("2d"),n=700,i=500,o,s;t.width>t.height?(o=n,s=t.height*n/t.width):(o=t.width*i/t.height,s=i),e.width=o,e.height=s,a.drawImage(t,0,0,o,s);let l=e.toDataURL("image/webp",.5);sessionStorage.setItem("base64",l)}},a.readAsDataURL(t)}}function loadDatabase(itemCount,searchkey,pin,tablebody){let dbRef="";(dbRef=""===searchkey?database.ref("quotes").orderByChild("pinned").equalTo(pin).limitToLast(itemCount):database.ref("quotes").orderByChild("timestamp").limitToLast(itemCount)).on("value",function(snapshot){postHeader="",postHeader=tablebody===quoteTableBody?"Feed":"Pinned Post",tablebody.innerHTML=`<br><span style="text-align: left;font-weight: bold;font-size: 0.9em;">${postHeader}</span>`;var quotes=[];snapshot.forEach(function(e){var t=e.val();t.key=e.key,(t.hasOwnProperty("uname")&&-1!==t.uname.indexOf(searchkey)||t.hasOwnProperty("quote")&&-1!==t.quote.indexOf(searchkey)||t.hasOwnProperty("title")&&-1!==t.title.indexOf(searchkey))&&quotes.push(t)}),quotes.reverse(),quotes.forEach(function(childData){var rrow=document.createElement("tr");let divStyle="",bkgStyle,borderStyle;divStyle=`<td style='padding-top: 7.5px;padding-bottom: 7.5px;'>
			<div id = 'rdiv' style='background-color: rgba(255, 255, 255, 0.8);; padding-top:2.5px; padding-bottom:2.5px; border: solid 0px lightgrey;'>`;let myAuthor="",indicator,userSpan;myAuthor=`<span style="color: #de3c35;font-size:0.8em;font-weight:bold;">${childData.uname} </span> `;let myViews=childData.views+" Seen"+(1==eval(childData.views)?"":"s"),myQuote="",myCaption="";if("?"===childData.quote){if(childData.hasOwnProperty("caption")){let myBackground="",fontSize=childData.caption.length<160?"font-size:1.5em":"font-size:1.2em";myCaption="<p style='background:"+(myBackground=""===childData.background?";white-space: pre-line;text-align:center; font-weight: normal;word-wrap:break-word;padding:10px;font-size:1.1em'":childData.background+";text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); color: #fff;white-space: pre-line;text-align:center; font-weight: bold;"+fontSize+"; word-wrap:break-word;padding:100px; font-family: sans-serif'")+">"+childData.caption+"</p>"}}else myQuote=`<center><img id='thumbs' src='${childData.thumbnail}' alt='Cannot load image 😓' id='load-image'
					style='max-width: 100%;max-height:400px'  style='display: none;'></center>`,childData.hasOwnProperty("caption")&&(myCaption=""===childData.caption?"":"<section style='white-space: pre-line;text-align:center; font-size:0.9em; font-weight:bold; word-wrap:break-word;padding:2.5px;'>"+childData.caption+"</section>");let myTime=getTimeString(childData.timestamp),dotsMenu="";dotsMenu=childData.pinned?`
				<!-- Icons section -->
				<div id="menu-options" class="button-div" style="margin-right:10px">
				<svg width="16" height="16" fill="currentColor" class="bi bi-pin-fill" viewBox="0 0 16 16">
				<path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354" style="fill: #C34632"/>
			</svg>
			
				</div>
				`:`
				<!-- Icons section -->
				<div id="menu-options" class="button-div" style="margin-right:10px" ontouchstart="this.style.backgroundColor='rgba(211, 211, 211, 0.7)';" 
				ontouchend="this.style.backgroundColor='transparent';">
					<svg width="16" height="16" fill="currentColor"
						class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
						<path
							d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
					</svg>
				</div>
				`;let myReaction="";childData.react&&childData.react.hasOwnProperty(user)&&(myReaction=childData.react[user]);let reactBut="";reactBut="likes"===myReaction?`<span style = "font-size: 1.2em">👍 Like</span>`:"loves"===myReaction?`<span style = "font-size: 1.2em">❤️ Love</span>`:"wows"===myReaction?`<span style = "font-size: 1.2em">🔥 Lit</span>`:"hahas"===myReaction?`<span style = "font-size: 1.2em">😂 Funny</span>`:"frowns"===myReaction?`<span style = "font-size: 1.2em">😥 Worried</span>`:"dislikes"===myReaction?`<span style = "font-size: 1.2em">👎 Dislike</span>`:`
				<svg width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" style="vertical-align: middle;" viewBox="0 0 16 16">
				<path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
			  </svg>
				React				
				`;var tableHTML=`
			<div style="display: flex; width: 100%; justify-content: space-between; align-items: center; padding: 5px;">

			<div>
				<table style='margin:7px'>
					<tr>
						<td rowspan='2' style='text-align:center;'>
							<img src='${profileHashMap[childData.uname]}' alt='Profile Image' width='32'
								style='border-radius: 50%;'>
						</td>
						<td>
							<span style='color:#ed4c2b;font-size: 18px'>${myAuthor}</span>
						</td>
					</tr>
					<tr>
						<td><span style='color:#808080;word-wrap: break-word;font-size: 12px'>${myTime}</span></td>
					</tr>
				</table>
			</div>
	
${dotsMenu}
		</div>
			`;let reactionMap={loves:getReactCount(childData.key,"loves"),likes:getReactCount(childData.key,"likes"),wows:getReactCount(childData.key,"wows"),hahas:getReactCount(childData.key,"hahas"),frowns:getReactCount(childData.key,"frowns"),dislikes:getReactCount(childData.key,"dislikes"),views:getCount(childData.key,"views"),comments:getCount(childData.key,"comments")},rowData=`
			${divStyle}
			${tableHTML}
			${myQuote}
			${myCaption}

			<hr>
			
			${generateReactionHTML(reactionMap)}
			
			<div style='height:auto; margin-top:5px'>

				<span style="color: #008ba3; font-size: 0.7em; display: flex; align-items: center;">

					<span style="width: 100%; display: inline-block; text-align: center;">
						<div id="react-div" onmouseover="this.style.backgroundColor='rgba(211, 211, 211, 0.7)';
							this.style.transition='background-color 0.3s ease'" onmouseout="this.style.backgroundColor='transparent';
							this.style.transition='background-color 0.3s ease'"	
							ontouchstart="this.style.backgroundColor='rgba(211, 211, 211, 0.7)';" 
							ontouchend="this.style.backgroundColor='transparent';" 
							style="background-color: transparent; padding: 10px; margin-right: 5px; cursor: pointer; color: #65676b;
							font-weight: bold; vertical-align: middle;">
								${reactBut}</div>
					</span>
			
					<span style="width: 100%; display: inline-block; text-align: center; vertical-align: middle; ">					
							<div id="comment-div" onmouseover="this.style.backgroundColor='rgba(211, 211, 211, 0.7)';
							this.style.transition='background-color 0.3s ease'" onmouseout="this.style.backgroundColor='transparent';
							this.style.transition='background-color 0.3s ease'"
							ontouchstart="this.style.backgroundColor='rgba(211, 211, 211, 0.7)';" 
							ontouchend="this.style.backgroundColor='transparent';" 
							style="background-color: transparent; padding: 10px; cursor: pointer; color: #65676b;
							font-weight: bold; vertical-align: middle;">
								<svg width="16" height="16" fill="currentColor" class="bi bi-chat-right-text"  style="vertical-align: middle;" viewBox="0 0 16 16">
									<path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
								<path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
						  		</svg>
									Comment
							</div>
					</span>
		
				</span>
		
			</div>
			</td>`;rrow.innerHTML=rowData;let thumbsBut;rrow.querySelector("#thumbs")&&rrow.querySelector("#thumbs").addEventListener("click",function(e){setViewer(childData.key,sessionNumber),commentModal(childData)}),tablebody.appendChild(rrow),rrow.querySelector("#menu-options").addEventListener("click",function(e){var t;menuModal(e.clientX,e.clientY,childData)});let reactDiv=rrow.querySelector("#react-div");reactDiv.addEventListener("click",function(e){var t;reactModal(e.clientX,e.clientY,childData,reactDiv)}),rrow.querySelector("#comment-div").addEventListener("click",function(){setViewer(childData.key,sessionNumber),commentModal(childData)}),document.title="Liszt | "+user,loading.style.display="none"})},function(e){console.error("Failed to retrieve quotes:",e),"PERMISSION_DENIED"===e.code?notif.innerHTML="Database is locked":"NETWORK_ERROR"===e.code?notif.innerHTML="No internet connection.":notif.innerHTML="Failed to save link."})}function setViewer(e,t){database.ref(`quotes/${e}/views/${t}`).set(!0)}function saveData(e,t,a,n,i){return inputChanged=!1,saveButton.disabled=!0,!((n.match(/\n/g)||[]).length>5)&&((t.length>50&&(t=t.substring(0,50)),navigator.onLine)?database.ref("quotes").push().set({quote:limitCharacters(e,200),uname:t,thumbnail:a,sessionkey:internetTime,pinned:!1,show:"true",views:"0",visits:"0",background:i,caption:n,subtitle:"Guest",timestamp:firebase.database.ServerValue.TIMESTAMP},function(e){e?(console.error("Failed to save quote:",e),notif.style.display="block","PERMISSION_DENIED"===e.code?notif.innerHTML="Database is locked":"NETWORK_ERROR"===e.code?notif.innerHTML="No internet connection.":notif.innerHTML="Failed to save link."):(myForm.style.display="none",postFrom.reset(),showFormButton.style.display="block",myContent.style.display="block",notif.style.display="block",notif.innerHTML="Shared Successfully!",saveButton.disabled=!1)}):(notif.style.display="block",notif.innerHTML="No Connection"),!0)}function toggleLike(e,t,a){for(let n=0;n<reactArr.length;n++)document.getElementById(`${reactArr[n]}`).style.fontSize="1em";var i=database.ref(`quotes/${t}/react/${a}`);if(""===e)i.remove();else{i.set(e);let o=document.getElementById(`${e}`);o&&(o.style.fontSize="2em")}}function getReactCount(e,t){var a=0;return firebase.database().ref(`quotes/${e}/react`).orderByValue().equalTo(t).once("value",function(e){a=e.exists()?e.numChildren():0}),a}function getCount(e,t){var a=0;return firebase.database().ref(`quotes/${e}/${t}`).once("value",function(e){a=e.exists()?e.numChildren():0}),a}function generateReactionHTML(e){let t=Object.entries(e).sort(([,e],[,t])=>t-e).reduce((e,[t,a])=>({...e,[t]:a}),{}),a=`
    <div
        style="display: flex; justify-content: space-between; align-items: center; padding: 5px; margin: 5px; background-color: transparent;">

        <div
            style="display: flex; gap: 0px; align-items: center; font-family: 'Arial', sans-serif; font-size: 12px; color: #333;">

            ${Object.entries(t).filter(([e,t])=>t>0&&"comments"!==e&&"views"!==e).map(([e,t])=>`
            <div
                style="display: flex; align-items: center; padding: 4px; border: 1px solid #ccc; border-radius: 5px; background-color: #fff; margin-right: 5px;">
                ${n(e)}
                <div style="margin-left: 3px; font-weight: bold;">${t}</div>
            </div>
            `).join("")}
        </div>

        <div
            style="display: flex; gap: 0px; align-items: center; font-family: 'Arial', sans-serif; font-size: 12px; color: #333;">
            <div
                style="display: flex; align-items: center; margin-right: 5px; padding: 4px; border: 1px solid #ccc; border-radius: 5px; background-color: #fff;">
                <svg width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path
                        d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                </svg>
                <div style="margin-left: 3px; font-weight: bold;">${e.views||0}</div>
            </div>

            <div
                style="display: flex; align-items: center; padding: 4px; border: 1px solid #ccc; border-radius: 5px; background-color: #fff;">
                <svg width="16" height="16" fill="currentColor" class="bi bi-chat-right" viewBox="0 0 16 16">
                    <path
                        d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                </svg>
                <div style="margin-left: 5px; font-weight: bold;">${e.comments||0}</div>
            </div>
        </div>

    </div>
	`;function n(e){let t={loves:"❤️",likes:"\uD83D\uDC4D",wows:"\uD83D\uDD25",hahas:"\uD83D\uDE02",frowns:"\uD83D\uDE25",dislikes:"\uD83D\uDC4E"};return t[e]}return a}function getTotalReact(e){var t=0;return firebase.database().ref(`quotes/${e}/react`).once("value",function(e){e.exists()&&(t=e.numChildren())}),t}function updatelike(e,t){let a=document.getElementById(`${e}`);a&&(0===t?a.innerText=" ":a.innerText=`${t}`)}function togglePin(e){database.ref(`quotes/${e}/pinned`).transaction(e=>!e)}function setComment(e,t,a,n){console.log(n);let i=database.ref(`quotes/${e}/comments`),o=`<img src="mage/${n}.png" height="75px">`;""!==n&&(a=o),i.push({username:t,message:a,timestamp:firebase.database.ServerValue.TIMESTAMP})}function loadComments(e,t){t.innerHTML="";let a="";a=window.matchMedia("(orientation: landscape)").matches?"max-width: 400px":"max-width: 300px";let n=database.ref(`quotes/${e}/comments`);var i=[];n.orderByChild("timestamp").on("value",function(e){e.forEach(function(e){var t=e.val();t.key=e.key,i.push(t)}),i.reverse()}),i.forEach(function(i){var o=document.createElement("tr");o.innerHTML=`<td>

			<table border="0" style="border-collapse: collapse; width: 100%;">
			<tr>
				<td style="width: 25px; height: 25px; padding: 1px; text-align: center;">
					<img src='${profileHashMap[i.username]}' alt='Profile Image' width='32px' style='border-radius: 50%;'>
				</td>
				<td style="padding: 1px; text-align: center;">
					<div style="${a}; height: auto; background-color: #ffffff; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					padding: 5px; margin: 5px;  text-align: left;">
					<span style="color: #666666;font-size:0.8em;word-wrap: break-word;">
					<span style="color: #4257B2;font-size:0.7em;font-weight: bold;">${i.username}</span>
					<br>
					${i.message}</span>
					<br>
					<div style="display: flex; justify-content: space-between;">
					<span style="color: #b0b3b8; font-size: 0.7em; word-wrap: break-word;">${getTimeString(i.timestamp)}</span>
					<span class="button-div" id="del-comment" style="display: inline-block; color: #FF6961; font-size: 0.7em; word-wrap: break-word;"
					ontouchstart="this.style.backgroundColor='rgba(211, 211, 211, 0.7)';" 
					ontouchend="this.style.backgroundColor='transparent';"
					>Delete</span>
				  </div>
				  
					</div>
				</td>
			</tr>
		</table>
		</td>`,t.appendChild(o),o.querySelector("#del-comment").addEventListener("dblclick",function(){event.preventDefault(),n.child(i.key).remove().then(()=>{loadComments(e,t),console.log("Data successfully deleted")}).catch(e=>{console.log("Error deleting data:",e)})})})}showFormButton.addEventListener("click",function(){postModal()}),searchBt.addEventListener("click",function(){var e=document.getElementById("search-in").value;moreButton.innerHTML="<b>END OF SEARCH RESULTS</b>",more_toggle=!0,showFormButton.innerHTML='<b>Search results for "'+e+'"</b>',window.location.href="#top",column1.style.backgroundColor="#f2cbc1",loadDatabase(1e3,e,!1),document.getElementById("search-in").value=""}),window.addEventListener("beforeunload",function(e){inputChanged&&(e.preventDefault(),e.returnValue="")}),moreButton.addEventListener("click",function(){more_toggle?(window.location.href="#top",location.reload()):loadDatabase(items+=9,"",!1,quoteTableBody)});
