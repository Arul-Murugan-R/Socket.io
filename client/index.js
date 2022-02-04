const socket = io("http://localhost:3080/");
        var idea=0;
        var add =document.querySelector("#add")
        var img = document.querySelector("#photo")
        var content = document.querySelector("#content")
        var main = document.querySelector("#chat")


            /*start.addEventListener("click",function(){
                sub.style.display="inline"
                start.style.display="none"
            })*/
            /*function submit() {
                var message = document.querySelector('#add').value
                console.log(message)
                add.innerHTML = message
                add.style.backgroundColor ="white"
                idea=idea+1
                console.log(idea)
            }
            function addimg(){
                alert("Enter a valid url to upload img in the prompt")
                var imgp=prompt("Enter a valid url to upload")
                //img.innerHTML =""
                img.src=imgp
                idea=idea+1
                console.log(idea)
            }*/
            main.addEventListener('click',(event)=>{
                submit()
            })
            function submit(){
                var message = document.querySelector('#add').value
                socket.emit('message',message)
                dis(message,"left")
            }
            socket.on('send-message',(msg)=>{
                console.log(msg)
                dis(msg,"end")
            })
            function dis(message,align){
                content.appendChild(document.createElement("br"))
                var ele=document.createElement("a")
                var div=document.createElement("div")
                // console.log(ele)
                var elec=document.createTextNode(message)
                ele.appendChild(elec)
                console.log(ele)
                div.appendChild(ele)
                div.classList.add(`text-${align}`)
                content.appendChild(div)
                content.appendChild(document.createElement("br"))
                add.value=""
            }
            function addimg(){
                var imgp=prompt("Enter a valid url to upload")
                socket.emit('image',imgp)
                sendImg(imgp,"left")
            }
            socket.on('send-image',(img)=>{
                console.log(img)
                sendImg(img,"end")
            })
            function sendImg(imgp,align){
                content.appendChild(document.createElement("br"))
                var div=document.createElement("div")
                var imgtag=document.createElement("img")
                imgtag.src=imgp
                div.appendChild(imgtag)
                div.classList.add(`text-${align}`)
                content.appendChild(div)
                content.appendChild(document.createElement("br"))
                
            }
                imgtag.classList.add(".show")
            
            // add.addEventListener('change',submit)