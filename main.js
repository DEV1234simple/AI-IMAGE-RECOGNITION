Webcam.set({
width:350,
height:450,
img_format:"jpg",
jpg_quality:100
});
camera=document.getElementById("camera");

Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="capture">';

    });
}
console.log("ml5 version:",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zkKs30Gnv/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded!");
}

function check()
{
img = document.getElementById('capture');
classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}