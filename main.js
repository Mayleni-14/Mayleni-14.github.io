let app = document.getElementById('typewriter');
 
let  typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #DF0101;">Creo sitios web, páginas web y me gusta la tecnologia.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
