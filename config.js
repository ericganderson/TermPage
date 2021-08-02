var scList = ['str', 'dev', 'web', 'lng']
var scListD = [
  'Streaming Sites',
  'Developer Sites',
  'Web Managment',
  'Languages',
]

var userNameV = 'User'
var hostNameV = 'Chrome'

//The definition within shortcut should look like the following:
// "NAME_sc" : [ ["Link Name 1", "Link Address 1"], ["Link Name 2", "Link Address 2"]]:w

// Keep in mind there can only be a total of 6 entries per ShortCut List.
//Also NAME in NAME_sc has to match exactly with the value in scList.
const shortcut = {
  str_sc: [
    ['HBO', 'https://play.hbomax.com/page/urn:hbo:page:home'],
    [
      'Prime',
      'https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1',
    ],
    ['Hulu', 'https://www.hulu.com/hub/home'],
    ['Disney+', 'https://www.disneyplus.com/'],
    ['Netflix', 'https://www.netflix.com/'],
    ['Udemy', 'https://www.udemy.com/'],
  ],
  dev_sc: [
    ['Github', 'https://github.com/ericganderson'],
    ['cdnjs', 'https://cdnjs.com/'],
    ['ReactBootstrap', 'https://react-bootstrap.github.io/'],
    ['Philips Hue Developer', 'https://developers.meethue.com/'],
  ],
  web_sc: [
    ['Cloudflare', 'https://dash.cloudflare.com/'],
    ['Google Domains', 'https://domains.google.com/'],
    ['Google Search Console', 'https://search.google.com/search-console?'],
  ],
  lng_sc: [
    ['React', 'https://reactjs.org/'],
    ['Js', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'],
    ['Ts', 'https://www.typescriptlang.org/docs'],
    ['CSS', 'https://developer.mozilla.org/en-US/docs/Web/CSS'],
  ],
}

var favourites = [
  ['Keybr', 'https://www.keybr.com/'],
  ['YouTube', 'https://youtube.com'],
  ['YouTube Music', 'https://music.youtube.com'],
  ['Gmail', 'https://mail.google.com'],
  ['ProtonMail', 'https://mail.protonmail.com/login'],
]
