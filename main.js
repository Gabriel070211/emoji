Webcam.set({ 
    width:350,
    height:300,
    imageFormat:'png',
    pngQuality:90
});

camera=document.getElementById('camera');
Webcam.attach("#camera");
console.log(camera);


function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedImage" src="'+data_uri+'">';
    })
}

var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J2Ip11PDF/model.json',modelLoaded);

function modelLoaded () {
    conxole.log("modelLoaded");
}

function check () {
    foto=document.getElementById("capturedImage");
    classifier.classify(foto,gotResult)
}

function gotResult (error,results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        document.getElementById("result-emotion-name").innerHTML=results[0].label
        
        if (results[0].label=="feliz") {
            document.getElementById("update-emoji").innerHTML="&#128522";


        }
        if (results[0].label=="triste") {
            document.getElementById("update-emoji").innerHTML="&#128532";
            

        }
        if (results[0].label=="irritado") {
            document.getElementById("update-emoji").innerHTML="&#128548";
            

        }
    }

}

