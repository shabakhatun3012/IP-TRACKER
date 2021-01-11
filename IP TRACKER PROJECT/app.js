const lookupbtn=document.querySelector(".LOOKUP");
const ipdisplay=document.querySelector(".IP-DISPLAY");
const ipversion=document.querySelector(".VERSION");
const iplocation=document.querySelector(".LOCATION-DISPLAY");
const ipgeolocation=document.querySelector(".GEOLOCATION");
const loader=document.querySelector(".loader-container");
const details=document.querySelector(".details");
lookupbtn.addEventListener("click",()=>{
    loader.style.display="flex";
    details.style.display="none";
    axios.get("https://ipapi.co/json/").then(response=>{
        loader.style.display="none";
        details.style.display="block";
    ipdisplay.textContent=`IP-ADDRESS:${response.data.ip}`;
    iplocation.textContent=`LOCATION:${response.data.city},${response.data.region},${response.data.country_name}`;
    ipversion.textContent=`VERSION:${response.data.version}`;
    ipgeolocation.textContent=`GEO-LOCATION:${response.data.latitude},${response.data.longitude},${response.data.timezone}`;
    

   
})

});


