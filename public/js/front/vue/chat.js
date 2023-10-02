// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhztOqMjG0YFWpRhlzQ2R-U8SCI6zcFwo",
  authDomain: "dhafar-c2e6b.firebaseapp.com",
  projectId: "dhafar-c2e6b",
  storageBucket: "dhafar-c2e6b.appspot.com",
  messagingSenderId: "1035993403227",
  appId: "1:1035993403227:web:738fbba2b264b1101d947e",
  measurementId: "G-QDH1W4MKK6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Access Firestore (optional if you need to use the Firestore database)
const db = firebase.firestore();

const i18n = new VueI18n({
  locale: "en", // Set the default locale
  messages: {
    en: {
      hello: "Hello",
      Items: "Items",
    },
    fr: {
      hello: "Bonjour",
      Items: "Items",
    },
  },
});

new Vue({
  el: "#appp",
  i18n,
  data: {
    showChat: true,
    load: true,
    user_id: 0,
    image: "",
    name: "",
    private: false,
    receiver_id: 0,
    from_to: "",
    color: "HSL(45,100%,50%)",
    messages: [],
    newMessage: "",
    message: "Hello Vue!",
    local: "en",
    cart: [],

    baseUrl: "",
  },
  mounted() {
    // setInterval(this.colorChanger, 4000);
    this.local = this.$i18n.locale;
    var baseUrl = window.location.protocol + "//" + window.location.host + "/";
    // this.categoryImage = baseUrl + "images/category/";
    // this.productImage = baseUrl + "images/products/";
    this.baseUrl = baseUrl;

    const isLogged = localStorage.getItem("isLogged");

    if (isLogged) {
      const id = localStorage.getItem("user_id");
      const image = localStorage.getItem("image");
      const name = localStorage.getItem("name");
      this.name = name;
      this.image = baseUrl + "images/avatar/" + image;
      this.user_id = id;
    } else {
      this.name = "Anonymous";
      this.image = "https://cdn-icons-png.flaticon.com/512/1768/1768630.png";
      this.user_id = 0;
    }

    const urlParams = new URLSearchParams(window.location.search);

    // Get the value of the user_id parameter
    // const userId = urlParams.get('user_id');

    if (urlParams.has("user_id")) {
      // Get the value of the user_id parameter
      const userId = urlParams.get("user_id");
      this.private = true;

      this.receiver_id = userId;


    
 
      // Check if the 'replay' parameter exists in the current URL
      if (urlParams.has("replay")) {
        // The 'replay' parameter exists in the current URL
       
        this.from_to =  userId+"-" +  this.user_id;
       
      } else {
        this.from_to = this.user_id + "-" + userId;     
      }

    
      // Use the userId value as needed
      // console.log(userId);
    } else {
      // Handle the case when the user_id parameter is not present
      console.log("user_id parameter is missing");
    }

    // user_id

    // db.collection("messages")
    // .orderBy("time")
    // .get()
    // .then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     this.messages.push(doc.data());
    //   });
    // })
    // .catch((error) => {
    //   console.error("Error loading messages from Firestore: ", error);
    // });

    if (this.private) {
      // this.from_to
      //  var reply =




      // const user = this.receiver_id + "-" + this.user_id;

      db.collection("chats")
        .doc(this.from_to)
        .collection("messages")
        .orderBy("time")
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              const newMessage = change.doc.data();
              this.messages.push(newMessage);
              this.$nextTick(() => {
                this.$refs.chatMessages.scrollTop =
                  this.$refs.chatMessages.scrollHeight;
              });
            }
          });
        });

      // db.collection("private")
      // .orderBy("time")
      // .onSnapshot((snapshot) => {
      //   snapshot.docChanges().forEach((change) => {
      //     if (change.type === "added") {
      //       const newMessage = change.doc.data();
      //       this.messages.push(newMessage);
      //       this.$nextTick(() => {
      //         this.$refs.chatMessages.scrollTop = this.$refs.chatMessages.scrollHeight;
      //       });
      //     }
      //   });
      // });
    } else {
      db.collection("messages")
        .orderBy("time")
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              const newMessage = change.doc.data();
              this.messages.push(newMessage);
              this.$nextTick(() => {
                this.$refs.chatMessages.scrollTop =
                  this.$refs.chatMessages.scrollHeight;
              });
            }
          });
        });
    }
  },
  methods: {
    close() {
      this.showChat = false;
    },
    sendMessage() {
      var newMessage = {};
      if (this.private) {
        newMessage = {
          who: "justify-content-end mb-4 pt-1",
          time: Date.now(),
          username: "You",
          id: this.user_id,
          name: this.name,
          to: this.receiver_id,
          image: this.image,
          text: this.newMessage,
        };
      } else {
        newMessage = {
          who: "justify-content-end mb-4 pt-1",
          time: Date.now(),
          username: "You",
          id: this.user_id,
          name: this.name,
          image: this.image,
          text: this.newMessage,
        };
      }

      if (this.private) {
        // let joinData = firebase.database().ref('chatrooms/'+this.roomid+'/chats').push();

        db.collection("chats")
          .doc(this.from_to)
          .collection("messages")
          .add(newMessage)
          .then(() => {
            //   this.messages.push(newMessage);
            this.newMessage = "";

            this.$nextTick(() => {
              this.$refs.chatMessages.scrollTop =
                this.$refs.chatMessages.scrollHeight;
            });
          })
          .catch((error) => {
            console.error("Error adding message to Firestore: ", error);
          });

        if (this.private) {
          const user = {
            to: this.receiver_id,
            time: Date.now(),
            username: "You",
            id: this.user_id,
            name: this.name,
            image: this.image,
            text: this.newMessage,
          };

          db.collection("users")
            .add(user)
            .then(() => {
              //   this.messages.push(newMessage);
              // this.newMessage = '';
              // this.$nextTick(() => {
              //   this.$refs.chatMessages.scrollTop = this.$refs.chatMessages.scrollHeight;
              // });
            })
            .catch((error) => {
              console.error("Error adding message to Firestore: ", error);
            });
        }

        // db.collection("chats")
        // .doc(this.from_to)
        // .collection("messages")
        // .add(newMessage)
        // .then((docRef) => {
        //   this.newMessage = "";

        //   docRef.collection("subcollectionName").add(newMessage);
        //   this.newMessage = "";
        // })
        // .catch((error) => {
        //   console.error("Error sending message: ", error);
        // });
      } else {
        db.collection("messages")
          .add(newMessage)
          .then(() => {
            //   this.messages.push(newMessage);
            this.newMessage = "";

            this.$nextTick(() => {
              this.$refs.chatMessages.scrollTop =
                this.$refs.chatMessages.scrollHeight;
            });
          })
          .catch((error) => {
            console.error("Error adding message to Firestore: ", error);
          });
      }

      // this.messages.push(newMessage);
      // this.newMessage = '';
      // this.$nextTick(() => {
      //   this.$refs.chatMessages.scrollTop = this.$refs.chatMessages.scrollHeight;
      // });

      const intervalIdd = setInterval(this.callBacload, 2000);

      setTimeout(() => clearInterval(intervalIdd), 2000);

      // const intervalId = setInterval(this.callback, 1000);
      // setTimeout(() => clearInterval(intervalId), 1000);
    },

    colorChanger() {
      let liscolor = [
        "HSL(45,100%,50%)",
        "#b62827",
        "#fbd30f",
        "#2e499b",
        "#93cd45",
      ];
      const min = 0;
      const max = 5;
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      this.color = liscolor[randomNum];
    },
    callBacload() {
      this.load = false;
    },
    callback() {
      let mess =
        "Hi , My name is coopa I hope you are well , I am out of service right now.";
      this.replay(mess);
      // this.load = true;
    },
    replay(message) {
      const newMessage = {
        who: "justify-content-end mb-4 pt-1",
        time: Date.now(),
        username: "coopa",
        text: message,
      };
      this.messages.push(newMessage);
      this.newMessage = "";
      this.$nextTick(() => {
        this.$refs.chatMessages.scrollTop =
          this.$refs.chatMessages.scrollHeight;
      });
    },
  },
});
