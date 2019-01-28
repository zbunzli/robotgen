var verb = [
'kills',
'eats',
'yeets',
'jerks',
'shoots',
'whispers to',
'talks to',
'deletes',
'finds the nearest gun and murders',
'disables',
'reprodices with',
'electrocutes',
'falls in love with',
'loves',
'hates',
'fucks',
'dislikes',
'becomes friends with',
'shoots hot glue at',
'ends',
'shoots lazers at'
]

var sub = [
  'itself',
  'you',
  'me',
  'your eyes',
  'my suffering',
  'christians',
  'the entire fucking human popualtion',
  'my dad',
  'youtube commenters with anime profile pictures',
  'sub-par content on the internet',
  'youtubers',
  'logangsters',
  'white people',



]

function newIdea() {
  var randomVerb = Math.floor(Math.random() * (verb.length));
  var randomSub = Math.floor(Math.random() * (sub.length));
  document.getElementById('idea').innerHTML = "make a robot that "+verb[randomVerb]+" "+sub[randomSub];
}
