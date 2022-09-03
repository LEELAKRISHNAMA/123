const firebaseConfig = {
    apiKey: "AIzaSyDiuK4cAGTgfdD2pNeYf5-n52oZERa4Iy0",
    authDomain: "kkk-gbd.firebaseapp.com",
    databaseURL: "https://kkk-gbd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kkk-gbd",
    storageBucket: "kkk-gbd.appspot.com",
    messagingSenderId: "717753312908",
    appId: "1:717753312908:web:106974fc8532ab107d7da9",
    measurementId: "G-KLDPCTH9YC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const messaging = firebase.messanging()

  function notifi(){
    Notification.requestPermission().then(Permission=>{
        console.log(Permission)
        if(Permission == "granted"){
            messaging.getToken({vapidKey:"BOfPyOizrWByinCoklbC6AwQ91yl4Of1s3_KKBPFekORsia4MMDFR8ohWJf9hRqIuC7ytl78faS_DratxcxY6mQ"}).then(currentToken=>{
                console.log(currentToken)
                document.getElementById('tokenId').innerHTML =
                currentToken
            })

        }
    })
  }


  function sendNtification(){
    const token =document.getElementById('token').value
    const title =document.getElementById('title').value
    const msg =document.getElementById('msg').value

    let body ={
        to: token,
        notification:{
            title:title,
            body:msg
        }
        

    }
    fetch
    console.log(body)

  }
