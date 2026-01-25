let topics = {
    politeness: [
      {question: "Answer according to the situation. Are you ready?", answers: ["Yes", "of course", "sure", "ready", "go", "do"], translation: "Jawablah sesuai dengan situasi yang terjadi. Apakah kamu siap?", choices: ["Yeah, I'm ready!", "Sure, bring it on!", "Yep, let's do this!"]},
      {question: "Teacher gives you a gift", answers: ["thank", "thanks", "thankies", "appreciate", "thankful", "owe", "cheers", "lifesaver", "great", "bless", "blessed"], translation: "Guru memberikanmu hadiah", choices: ["Thank you for the present!", "I'm sorry, teacher. I forgot the present", "Please pass the present"]},
      {question: "You are thirsty. How do you ask for water?", answers: ["please", "would it be okay if", "excuse me", "may i", "can i", "would you", "may i", "would it be alright", "could i" ], translation: "Kamu haus. Bagaimana cara meminta air minum?", choices: ["Thank you for the water", "I'm sorry, I spilled the water", "Excuse me, may i drink some water?"]},
      {question: "Your classmate shares their snack", answers: ["thank", "thanks", "thankies", "appreciate", "thankful", "owe", "cheers", "lifesaver", "great", "bless", "blessed"], translation: "Teman sekelasmu membagikan snack", choices: ["I'm sorry, I didn't know it is your snack", "Could you please sharing your snack to me?", "Thank you for sharing your snack"]},
    ],
    school: [
      {question: "How are you today?", answers: ["fine", "amazing", "good", "awesome", "better", "happy", "sad", "grateful", "great", "well", "excellent", "not feeling very well", "not feeling well", "a bit under the weather", "rough", "dealing", "not", "tired", "tire", "stressed", "bad", "trying"], translation: "Hi, apa kabarmu hari ini?", choices: ["I'm fine, thank you", "I am not feeling very well today", "I am good", "Not so good"]},
      {question: "Where are you right now?", answers: ["school", "in the", "in the classroom", "in the library", "in the teacher's room", "canteen", "in the principal's office", "in the laboratory", "in the computer room", "in the music room", "art room", "in the bathroom", "gate", "flag", "flagpole", "classrooms", "tree", "teacher", "friend", "teachers", "friends", "in the school yard"], translation: "Di mana kamu sekarang?", choices: ["I'm at school", "I am in the classroom", "i'm in the canteen"]},
      {question: "Look around you. What do you find there?", answers: ["a", "i", "u", "e", "o"], translation: "Lihat sekelilingmu. Apa yang kau temukan di sana?", choices: ["Table", "Chair", "Pencil"]},
      {question: "Touch something you see around you right now! What do you feel?", answers: ["is", "feel", "feels", "is", "are", "i feel", "i like", "it feels", "i feel something", "this feels", "it's", "it is", "i don't feel", "i don't like", "i do not like", "i don't want", "i do not want", "i can not", "i can't", "sorry", "no"], translation: "Sentuh sesuatu yang kamu lihat di sekitar kamu saat ini! Apa yang kamu rasakan?", choices: ["I feel something soft", "it feels warm", "I don't feel anything", "Sorry, I am not comfortable doing that"]},
      {question: "Ok, What are you doing right now?", answers: ["i am", "i am not", "i'm", "i'm not", "don't", "do not"], translation: "Ok, apa yang sedang kamu lakukan sekarang ini?", choices: ["I am reading a book", "I'm just relaxing", "I'm not doing anything"]},
      {question: "Oh, Are you with someone right now?", answers: ["yes", "no", "not", "private", "I am with", "i'm with", "alone", "myself"], translation: "Oh, apa kau bersama seseorang saat ini?", choices: ["Yes, I'm with my firend", "No, I'm alone right now", "I'd rather not say", "It's a bit private"]},
      {question: "Ok. Class starts soon, so let's hurry up and go to class.", answers: ["agree", "yes", "sure", "on my way", "okay", "alright", "all right", "great", "i'm ready", "go", "hurry", "class"], translation: "Ok. Kelas akan segera dimulai, ayo segera pergi ke kelas.", choices: ["Okay, let's go!", "Sure, let's hurry up!", "All right, I'm on my way!", "We are already in class."]},
      {question: "Let's begin our lesson!", answers: ["yes", "let's do it", "sure", "i'm ready", "ready", "start", "good idea", "let's begin", "begin", "okay", "go"], translation: "Mari kita mulai belajar!", choices: ["Yes!, Let's do it!", "Sure, I'm ready to start!", "Good idea, let's begin.", "Okay, I'm ready to learn."]},
      {question: "Can I sit next to you?", answers: ["yes", "no", "please", "sure", "good idea", "okay", "sorry", "can", "can't", "can not"], translation: "Bolehkah aku duduk di samping kamu?", choices: ["Sure, I saved you a seat!", "Sorry, someone's already here.", "Good idea", "Yes, let's work together."]},
      {question: "What is your favorite subject?", answers: ["my favorite subject is", "i like", "it's", "i love", "it is", "i prefer", "like"], translation: "Apa pelajaran favoritmu?", choices: ["My favorite subject is English", "i think it is English"]},
      {question: "What class do we have now?", answers: ["We have", "it's", "it is"], translation: "Sekarang kita pelajaran apa?", choices: ["We have Math", "We have English", "We have Science"]},
      {question: "Did you do the homework?", answers: ["of course", "yes", "no", "forget", "forgot", "did", "do", "finish", "finished"], translation: "Apakah kamu sudah mengerjakan PR?", choices: ["Yes, I finished it last night", "No, I forgot to do it", "I did half. I'll finish during break"]},
      {question: "Do we have homework for tomorrow?", answers: ["yes", "no", "forget", "forgot", "did", "do"], translation: "Apakah kita ada PR untuk besok?", choices: ["Yes, we have homework for tomorrow"]},
      {question: "Can i borrow your pencil?", answers: ["sure", "yes", "can", "sorry", "here", "take", "no", "can't", "can not"], translation: "Boleh aku pinjam pencilmu?", choices: ["Sure, here you go!", "Sorry, I forgot mine to", "Yup, take it!"]},
      {question: "What are you going to buy during recess?", answers: ["i will", "buy", "want", "like"], translation: "Apa yang akan kamu beli saat istirahat?", choices: ["I will buy noodles and juice"]},
      {question: "Class is over. Are you going home now?", answers: ["of course", "Yes", "No", "am", "is", "are", "will", "shall"], translation: "Pelajaran sudah berakhir. Apakah kamu langsung pulang sekarang?", choices: ["Yes, I am", "No, I have music club"]},
    ],
    science: [
      {question: "Class is starting soon. Are you ready?", answers: ["Yes", "of course", "sure", "ready", "go", "do"], translation: "Pelajaran akan segera dimulai. Apakah kamu siap?", choices: ["Yeah, I'm ready!", "Sure, bring it on!", "Yep, let's do this!"]},
      {question: "What do plants need to grow?", answers: ["need", "needs", "get", "gets", "help", "helps", "makes", "take", "make", "takes", "without", "grow"], translation: "Apa yang dibutuhkan tanaman untuk tumbuh?", choices: ["Plants need water to grow", "Plants grow well when they get sunlight every day", "Without good soil, plants can't grow big."]},
      {question: "What color is the sky?", answers: ["color", "sky", "it is", "it's", "looks", "colors", "look", "looks"], translation: "Apa warna langit?", choices: ["The sky is blue", "It's orange and pink during sunset", "It looks white today."]},
      {question: "What do we use to see?", answers: ["eye", "eyes", "light", "sun", "sunlight"], translation: "Apa yang kita gunakan untuk melihat?", choices: ["I see with my eyes", "We need light to see clearly", "We use our eyes to see"]},
      {question: "What animal can fly?", answers: ["can", "fly", "wing", "wings", "i think", "i know"], translation: "Hewan apa yang bisa terbang?", choices: ["Bird can fly", "Eagles can fly very high", "Flying squirrels can glid, bt they don't really fly"]},
      {question: "What do we use to hear?", answers: ["ear", "ears"], translation: "Apa yang kita gunakan untuk mendengar?", choices: ["We use our ears to hear", "Our ears help us hear sounds", "We need ears to hear music"]},
      {question: "Is ice hot or cold?", answers: ["cold"], translation: "Apakah es panas atau dingin?", choices: ["Ice is cold", "It's very cold", "Ice feels cold when you touch it"]},
      {question: "Where do fish live?", answers: ["water", "pond", "ponds", "sea", "river", "rivers", "ocean", "oceans", "lake", "lakes", "freshwater", "saltwater", "aquarium", "aquariums", "deep"], translation: "Di mana ikan tinggal?", choices: ["Most fish live in freshwater or saltwater", "They live in rivers and oceans", "Fish live in the water"]},
      {question: "What animal lives in the jungle?", answers: ["it's", "it is", "lives in the jungle", "live in the jungle"], translation: "Hewan apa yang tinggal di hutan?", choices: ["I think lions live in the jungle", "Monkeys live in the jungle", "A tiger lives in the jungle"]},
      {question: "Is fire safe to touch?", answers: ["not safe", "burn", "of course not", "hurt", "injury", "dangerous", "danger", "no way", "never", "hot"], translation: "Apakah api aman untuk disentuh", choices: ["No, it's too hot and dangerous", "We should never touch fire", "No, it can hurt you"]},
      {question: "What do we drink every day?", answers: ["drink", "drinks"], translation: "Apa yang kita minum setiap hari?", choices: ["We drink water every day", "I drink milk everyday", "We usually drink juice in the morning"]},
      {question: "Why do we need the sun?", answers: ["need the sun", "need the sun to", "the sun gives", "need sunlight", "need the sun", "the sun helps", "it helps", "sunlight helps", "whitout the sun", "the sun keeps", "the sun makes", "the sun is", "the sun has"], translation: "Kenapa kita butuh matahari?", choices: ["The sun gives us light and heat", "The sun helps fruits and vegetables grow", "The sun gives us beautiful sunsets"]},
      {question: "Can we see the moon at night?", answers: ["Yes", "we can", "of course", "sure", "definitely", "the moon", "night", "dark", "sometimes", "depends", "depend", "cloud", "clouds", "only when", "just when", "if"], translation: "Bisakah kita melihat bulan di malam hari?", choices: ["Yes, it shines in the dark", "It depends on the moon phase", "Only when the weather is good"]},
      {question: "Why do we eat food?", answers: ["we eat food to", "because food", "to keep", "we need food", "food gives", "it gives", "we can", "to stay alive", "food helps", "to make", "to build", "it helps"], translation: "Kenapa kita makan makanan?", choices: ["We eat food to stay alive", "To make our muscles grow stronger", "Because it helps us feel better when we are tired"]},
      {question: "How many hands do we have?", answers: ["have", "has"], translation: "Berapa tangan yang kita punya?", choices: ["Some people might have only one hand", "I have two hands. One left and one right", "We have two hands"]},
      {question: "What is the weather like today?", answers: ["it looks", "the weather", "sun", "moon", "sky", "star","sunny", "cloudy", "partly cloudy", "overcast", "rainy", "light rain", "heavy rain", "drizzle", "thunderstorm", "lightning", "stormy", "windy", "breezy", "foggy", "misty", "hazy", "snowy", "light snow", "heavy snow", "sleet", "hail", "freezing", "cold", "cool", "warm", "hot", "humid", "dry", " icy", "blazing", "chilly", "scorching", "dust storm", "sandstorm", "tornado", "hurricane", "cyclone", "typhoon", "monsoon", "gale", "squall", "wintry mix", "slush", "black ice", "white out", "chill factor", "wind chill", "heatwave", "cold snap", "polar vortex", "ashfall", "tropical depression", "dew", "frost", "glaze ice", "sun shower"], translation: "Bagaimana cuaca hari ini?", choices: ["The weather is perfect today", "The sun is shining and the sky is clear", "It's freezing cold outside"]},
      {question: "Class is over. Are you going home now?", answers: ["of course", "Yes", "No", "am", "is", "are", "will", "shall"], translation: "Pelajaran sudah berakhir. Apakah kamu langsung pulang sekarang?", choices: ["Yes, I am", "No, I have football club"]},
    ],
    colors: [
      {question: "What is your favorite color?", answers: ["blue", "pink", "yellow"], translation: "Apa warna favoritmu?", choices: ["blue", "pink", "yellow"]},
      {question: "Name a color of the sky.", answers: ["blue"], translation: "Sebutkan warna langit.", choices: ["blue", "green", "red"]},
    ]
  };
  
  let currentTopic = [];
  let currentIndex = 0;
  let score = 0;
  let recognition;
  
  function startGame() {
    const selectedTopic = document.getElementById('topic').value;
    const childName = document.getElementById('childName').value.trim();
    if (!childName || !selectedTopic) {
      alert("Please enter your name and choose a topic.");
      return;
    }
    currentTopic = topics[selectedTopic];
    currentIndex = 0;
    score = 0;
  
    document.getElementById('start-area').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    speak("Hi, My name is Gin. I will help you talk in English. Let's Start!");
    showQuestion();
  }
  
  function showQuestion() {
    const q = currentTopic[currentIndex];
    document.getElementById('question').textContent = q.question;
    document.getElementById('translation').textContent = q.translation;
    document.getElementById('choices').innerHTML = '';
  
    q.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.onclick = () => {
        document.getElementById('textAnswer').value = choice;
      };
      document.getElementById('choices').appendChild(button);
    });
  
    changeBot('🤔');
    speak(q.question);
  }
  
  function submitAnswer() {
    const userAnswer = document.getElementById('textAnswer').value.toLowerCase().trim();
    const correctAnswers = currentTopic[currentIndex].answers.map(a => a.toLowerCase());
  
    if (currentIndex === currentTopic.length - 1) {
      if (correctAnswers.some(ans => userAnswer.includes(ans))) {
        score++;
      }
      showScore();
      return;
    }
  
    if (correctAnswers.some(ans => userAnswer.includes(ans))) {
      score++;
      changeBot('😃');
      playCorrectSound();
      speak("Good job!");
      currentIndex++;
      setTimeout(() => {
        document.getElementById('textAnswer').value = '';
        showQuestion();
      }, 1000);
    } else {
      changeBot('😟');
      playWrongSound();
      speak("Try again! Please use correct grammar!");
      document.getElementById('textAnswer').value = '';
    }
  }
  
  function showScore() {
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('score-area').style.display = 'block';
    document.getElementById('score-text').textContent = `Your score: ${score}/${currentTopic.length}`;
    changeBot('🎉');
    speak("Congratulations! You finished the game!");
  }
  
  function changeBot(expression) {
    document.getElementById('bot-face').textContent = expression;
  }
  
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Pilih bahasa Inggris Amerika
    utterance.pitch = 1.2;
    utterance.rate = 1;
  
    // Menentukan suara wanita dewasa
    const voices = speechSynthesis.getVoices();
    let voiceFound = false;
    for (let voice of voices) {
      // Mencari suara wanita dewasa
      if (voice.name.includes('Google UK English Female') || voice.name.includes('Google US English Female')) {
        utterance.voice = voice;
        voiceFound = true;
        break;
      }
    }
  
    if (!voiceFound) {
      // Jika tidak ditemukan, gunakan suara default
      utterance.voice = voices.find(voice => voice.lang === 'en-US');
    }
  
    speechSynthesis.speak(utterance);
  }
  
  function handleKey(e) {
    if (e.key === 'Enter') {
      submitAnswer();
    }
  }
  
  function startListening() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Sorry, your browser does not support voice recognition.");
      return;
    }
  
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
  
    recognition.start();
    document.getElementById('speakButton').classList.add('listening');
    changeBot('🎤');
  
    recognition.onresult = function(event) {
      const result = event.results[0][0].transcript;
      document.getElementById('textAnswer').value = result;
      checkPronunciation(result);
      document.getElementById('speakButton').classList.remove('listening');
    };
  
    recognition.onerror = function(event) {
      document.getElementById('speakButton').classList.remove('listening');
      changeBot('😟');
      alert('Error occurred: ' + event.error);
    };
  }
  
  function checkPronunciation(userSpeech) {
    const correctAnswers = currentTopic[currentIndex].answers.map(a => a.toLowerCase());
    const userAnswer = userSpeech.toLowerCase().trim();
  
    let accuracy = 0;
    if (correctAnswers.some(ans => userAnswer.includes(ans))) {
      accuracy = 100;
      speak("Perfect pronunciation!");
    } else {
      accuracy = Math.floor(Math.random() * 40) + 50;
      speak("Almost correct, try again!");
    }
  
    console.log("Pronunciation accuracy:", accuracy + "%");
  }
  
  function playCorrectSound() {
    document.getElementById('correctSound').play();
  }
  function playWrongSound() {
    document.getElementById('wrongSound').play();
  }
  
  function sendWhatsApp() {
    const phoneNumber = "6285824927838"; // Ganti dengan nomor WhatsApp tujuan
    const childName = document.getElementById("childName").value.trim();
    const topic = document.getElementById("topic").value;
    const date = new Date().toLocaleDateString();
    const message = `Hello! This is ${childName}. I just played the English Game on the topic "${topic}".\nMy score: ${score}/${currentTopic.length}\nDate: ${date}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }