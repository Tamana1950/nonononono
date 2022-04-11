img = "";
status ="";

objects=[];


function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:deteting objects";
}

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
image(img,0,0,600,500);
if(status != "")
{
for(i=0;i<objects.length;i++)
{
    document.getElementById("status").innerHTML="Status is good.";
   fill("#ff0095");
   percent=floor(objects[i].confidence*100);
   text(objects[i].label + "" + percent + "%" , objects[i].x , object[i].y);
   nofill();
   stroke("#ff0095");
   rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
}

}

}
function modelLoaded()
{
    console.log("model loded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
if(error)
{
    console.log(error);
}
console.log(results);
objects=results;
}
