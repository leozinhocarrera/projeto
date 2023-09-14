function toggleMode(){
  const html = document.documentElement

  //if(html.classList.contains ('light')) {
// html.classlist.remove('light')
//  } else {
  //  html.classList.add('light')
 // }

 html.classList.toggle('light')

 const img = document.querySelector('#Foto')

 if (html.classList.contains('light')) {
  img.src = 'assets/avatar-light.png'
 }
 else {
  img.src = 'assets/avatar.png'
 }
}