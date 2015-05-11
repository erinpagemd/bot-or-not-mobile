angular
.module('starter.services', [])
.factory('ArrayFactory', function(){
  var images = [
    {
      url: 'img/human/Anastasia.png',
      hof: 'Human',
      des: 'Anastasia Shpagina is a 22-year old from Ukraine who looks this way without plastic surgery.'
    },
    {
      url: 'img/human/Arnold.jpg',
      hof: 'Human',
      des: 'Arnold: No pain, no gain.'
    },
    {
      url: 'img/human/C3P0.png',
      hof: 'Human',
      des: 'Anthony Daniels is a British Actor who portrayed C3P0.'
    },
    {
      url: 'img/human/Fembot.jpg',
      hof: 'Human',
      des: 'Austin Powers: Fembot Cindy is an American glamour spokesmodel and actress.'
    },
    {
      url: 'img/human/Hara.png',
      hof: 'Human',
      des: 'Hara is a HUMAN!'
    },
    {
      url: 'img/human/Hiroshi.png',
      hof: 'Human',
      des: 'Professor Hiroshi Ishiguro is director of the Intelligent Robotics Laboratory, part of the Department of Systems Innovation in the Graduate School of Engineering Science at Osaka University, Japan. '
    },
    {
      url: 'img/human/Justin.png',
      hof: 'Human',
      des: 'Justin Jedlica, known as The Human Ken Doll, is a Slovak American businessperson and model. He is known as the man who came to national attention for undergoing over 100 plastic surgeries.'
    },
    {
      url: 'img/human/Sarah.png',
      hof: 'Human',
      des: 'Despite what you may have heard, Sarah Palin is not a robot.'
    },
    {
      url: 'img/human/Shpagina.jpg',
      hof: 'Human',
      des: 'Anastasia Shpagina is a 22-year old from Ukraine who looks this way without plastic surgery. REALLY!'
    },
    {
      url: 'img/human/Valeria.png',
      hof: 'Human',
      des: 'Valeria Valeryevna Lukyanova is a Moldovan-Ukrainian model and entertainer, notable for her resemblance to a Barbie doll.'
    },
    {
      url: 'img/robot/Aico.jpg',
      hof: 'Robot',
      des: 'Introduced at CES2015 by Toshiba, ChihiraAico is a humanoid robot made to resemble a 32-yr old woman and uses 43 pneumatic actuators for its movements, including 24 in its shoulders, arms and hands and 15 in the face. '
    },
    {
      url: 'img/robot/Android.png',
      hof: 'Robot',
      des: 'Kodomoroid is a robot designed by Professor Ishiguro at Osaka University.'
    },
    {
      url: 'img/robot/Cameron.png',
      hof: 'Robot',
      des: 'Robot of Terminator Cameron on display at Museum Miraikan, Tokyo, Japan.'
    },
    {
      url: 'img/robot/Femdroid.png',
      hof: 'Robot',
      des: 'Femdroid is a DARPA sponsored research robot with the ability to express emotions.'
    },
    {
      url: 'img/robot/GemDK.png',
      hof: 'Robot',
      des: 'Introduced in 2011, Geminoid DK is an android that is nearly indistinguishable from a human.'
    },
    {
      url: 'img/robot/GemF.png',
      hof: 'Robot',
      des: 'Android Geminoid F was a special showcase for Valentines Day by Professor Ishiguro of Osaka University.'
    },
    {
      url: 'img/robot/GEMHS.jpg',
      hof: 'Robot',
      des: 'This android named Geminoid DK was made to replace Professor Henrik Scharfe. On my!'
    },
    {
      url: 'img/robot/GeminoidDK.jpg',
      hof: 'Robot',
      des: 'Introduced in 2011, Geminoid DK is an android that is nearly indistinguishable from a human.'
    },
    {
      url: 'img/robot/Hiroshi.png',
      hof: 'Robot',
      des: 'Android copy of Professor Ishiguro, famous roboticist at Osaka University.'
    },
    {
      url: 'img/robot/Q1.jpg',
      hof: 'Robot',
      des: 'The Repliee Q1 actroid is a type of android with strong visual human-likeness developed by Osaka University and manufactured by Kokoro Company Ltd.'
    },
    {
      url: 'img/robot/Roxxy.png',
      hof: 'Robot',
      des: 'Roxxxy is a full-sized interactive android built by the company TrueCompanion.'
    },
    {
      url: 'img/robot/T2.jpg',
      hof: 'Robot',
      des: 'Terminator: a animatron robot at Universal Studios in Los Angeles.'
    },
    {
      url: 'img/robot/Vaudeville.jpg',
      hof: 'Robot',
      des: 'Geminoid Vaudeville is an android robot created at the Intelligent Robotics Laboratory in Tokyo, Japan.'
    },
    {
      url: 'img/robot/yangyang.jpg',
      hof: 'Robot',
      des: 'YangYang is a life-size humanoid robot modeled after Sarah Palin and able to exhibit human facial expressions.'
    }
  ]

  images = _.shuffle(images)
  images = _.sample(images, 5)

  return images
});

//   return {
//     all: function() {
//       return chats;
//     },
//     remove: function(chat) {
//       chats.splice(chats.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].id === parseInt(chatId)) {
//           return chats[i];
//         }
//       }
//       return null;
//     }
//   };
// });
