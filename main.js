Webcam.set({

    width:360,
    height:270,
    image_format:'jpeg',
    jpeg_quality:90

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture_image(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'

    });

}

console.log('ml5 Version: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PDFHqv91z/',modelLoaded);

function modelLoaded(){

    console.log('Model loaded!');

}