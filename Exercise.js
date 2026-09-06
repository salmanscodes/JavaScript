 function card(title,cname,views,months,duration,thumbnail){
// let thumbnail="https://i.ytimg.com/vi/NrhP53Divco/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCVA__jPtY8iTCSPDtBPFNpIVktEQ";
let con=document.getElementById("png");

let cardpng=document.createElement("div");
cardpng.className="card";
let img=document.createElement("img");
img.setAttribute("src",thumbnail);
img.setAttribute("alt",thumbnail);
cardpng.prepend(img);
img.style.height="20vh";
img.style.borderRadius="10px";
img.style.marginLeft="25px";
img.style.marginTop="25px";
img.style.display="block";
//img.style.position="relative";
cardpng.style.position="relative";
con.prepend(cardpng);
let dur=document.createElement("span");
dur.innerText=duration;
dur.style.position="absolute";
dur.style.bottom="10px";
dur.style.right="10px";
dur.style.backgroundColor="black";
dur.style.color="white";
cardpng.append(dur);

let text=document.createElement("div");
text.innerText=title;
con.append(text);
text.style.color="white";
text.style.fontSize="30px";
text.style.fontWeight="200";
text.style.marginTop="30px";
con.style.display="flex";
con.style.gap="20px";
 let cnam=document.createElement("div");
cnam.innerText=cname+" •"+views+" •"+months;
cnam.style.color="gray";
cnam.style.fontSize="20px";
cnam.style.marginTop="30px";
text.append(cnam);
 }
card("JavaScript Tutorial for Beginners in Urdu | Learn JavaScript in 1 month","Coding"," 1.2M views"," 1 year ago","1:00:00","https://i.ytimg.com/vi/NrhP53Divco/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCVA__jPtY8iTCSPDtBPFNpIVktEQ");